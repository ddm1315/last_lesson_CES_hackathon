import type { Puzzle, PuzzleValidation } from '../types'

const normalize = (value: string) => value.toLowerCase().trim().replace(/[“”‘’]/g, "'").replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, ' ')

const matchesNormalizedAnswer = (value: string, expected: string) => {
  if (!expected.includes('%')) return normalize(expected) === value
  const parts = expected.split('%').filter(Boolean).map(normalize)
  let cursor = 0
  return parts.every((part) => {
    const matchAt = value.indexOf(part, cursor)
    if (matchAt === -1) return false
    cursor = matchAt + part.length
    return true
  })
}

// This is intentionally lightweight obfuscation for a client-only conference activity, not security.
export const hashAnswer = (value: string) => {
  let hash = 2166136261
  for (const character of normalize(value)) { hash ^= character.charCodeAt(0); hash = Math.imul(hash, 16777619) }
  return (hash >>> 0).toString(16).padStart(8, '0')
}

export const isChatGPTSharedLink = (value: string) => {
  try {
    const url = new URL(value.trim())
    return url.protocol === 'https:' && url.hostname === 'chatgpt.com' && /^\/share\/e\/[^/]+(?:\/)?$/.test(url.pathname)
  } catch {
    return false
  }
}

export const validateAnswer = (puzzle: Puzzle, answer: unknown, participantInstitution?: string) => {
  if (!puzzle.validation) return { valid: false, message: 'This transmission is waiting for a written recommendation.' }
  const validation: PuzzleValidation = puzzle.validation
  if (validation.strategy === 'normalized') {
    const value = normalize(String(answer ?? ''))
    return { valid: validation.acceptedAnswers?.some((accepted) => matchesNormalizedAnswer(value, accepted)) ?? false, message: 'That does not match the archive. Try separating the evidence from your first interpretation.' }
  }
  if (validation.strategy === 'hashed') {
    const value = hashAnswer(String(answer ?? ''))
    return { valid: validation.acceptedHashes?.includes(value) ?? false, message: 'The transmission rejected that interpretation. There may be another connection.' }
  }
  if (validation.strategy === 'collaboration' || validation.strategy === 'group-collaboration') {
    const collaboration = validation.collaboration
    const submitted = (answer && typeof answer === 'object' ? answer : {}) as Record<string, unknown>
    if (!collaboration) return { valid: false, message: 'This collaboration brief is missing its validation rules.' }

    const names = collaboration.nameFields.map((field) => String(submitted[field] ?? '').trim())
    const campuses = collaboration.campusFields.map((field) => String(submitted[field] ?? '').trim())
    const fileTypes = (collaboration.fileTypeFields ?? []).map((field) => String(submitted[field] ?? '').trim())
    const responseFields = collaboration.responseFields ?? (collaboration.responseField ? [collaboration.responseField] : [])
    const responses = responseFields.map((field) => String(submitted[field] ?? '').trim())

    if (names.some((name) => !name) || campuses.some((campus) => !campus) || fileTypes.some((fileType) => !fileType) || responses.some((response) => !response)) {
      return { valid: false, message: 'Complete every name, institution, and reflection field before continuing.' }
    }

    if (collaboration.mode === 'same-institution') {
      const collaboratorCampus = campuses[0]
      if (!participantInstitution || normalize(collaboratorCampus) !== normalize(participantInstitution)) {
        return { valid: false, message: 'Step 6 needs a collaborator from your same CES institution.' }
      }
      return { valid: true, message: '' }
    }

    if (collaboration.fileTypeFields?.length) {
      const expectedFileTypes = collaboration.fileTypes
      const filesMatchCampuses = campuses.every((campus, index) => {
        const institution = Object.keys(expectedFileTypes ?? {}).find((candidate) => normalize(candidate) === normalize(campus))
        return Boolean(institution && normalize(fileTypes[index]) === normalize(expectedFileTypes?.[institution as keyof typeof expectedFileTypes] ?? ''))
      })
      if (!filesMatchCampuses) {
        return { valid: false, message: 'At least one file type does not match the campus assignment. Check the step 7 brief.' }
      }
    }
    if (collaboration.requireParticipantCampus && (!participantInstitution || !campuses.some((campus) => normalize(campus) === normalize(participantInstitution)))) {
      return { valid: false, message: 'Include your own campus in the three-person collaboration record.' }
    }
    const otherCampuses = campuses.filter((campus) => normalize(campus) !== normalize(participantInstitution ?? ''))
    if (otherCampuses.length < 2) {
      return { valid: false, message: 'This step needs two people from outside your CES institution.' }
    }
    return { valid: true, message: '' }
  }
  const fields = validation.fields ?? []
  const submitted = (answer && typeof answer === 'object' ? answer : {}) as Record<string, unknown>
  const matches = validation.acceptedCombinations?.some((combination) => fields.every((field) => {
    const expected = String(combination[field.id] ?? '')
    const actual = normalize(String(submitted[field.id] ?? ''))
    const containsPattern = expected.startsWith('%') && expected.endsWith('%')
    const normalizedExpected = normalize(containsPattern ? expected.slice(1, -1) : expected)
    return containsPattern ? actual.includes(normalizedExpected) : normalizedExpected === actual
  })) ?? false
  return { valid: matches, message: 'The archive is missing one connection. Check each field against the evidence and try again.' }
}

export { normalize }
