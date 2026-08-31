import type { GameState, Institution, Participant } from '../types'

export const STORAGE_KEY = 'the-last-lesson:game-state'
export const STATE_VERSION = 1

const isInstitution = (value: unknown): value is Institution => typeof value === 'string' && ['BYU', 'BYU–Idaho', 'BYU–Hawaii', 'Ensign College', 'BYU-Pathway', 'Church'].includes(value)

const isState = (value: unknown): value is GameState => {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<GameState>
  const participant = candidate.participant as Partial<Participant> | undefined
  const currentStep = candidate.currentStep
  return candidate.version === STATE_VERSION && typeof participant?.name === 'string' && participant.name.trim().length > 0 && isInstitution(participant.institution) && typeof participant.createdAt === 'string' && typeof currentStep === 'number' && Number.isInteger(currentStep) && currentStep >= 1 && currentStep <= 10 && Array.isArray(candidate.completedSteps) && candidate.completedSteps.every((step) => Number.isInteger(step) && step >= 1 && step <= 10) && typeof candidate.answers === 'object' && candidate.answers !== null && typeof candidate.revealedHints === 'object' && candidate.revealedHints !== null && Array.isArray(candidate.archiveEntries) && Array.isArray(candidate.viewedArchiveEntries)
}

export const readGameState = (): GameState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (!isState(parsed)) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export const writeGameState = (state: GameState) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch { /* Storage may be unavailable in private browsing. */ }
}

export const clearGameState = () => localStorage.removeItem(STORAGE_KEY)

export const createGameState = (participant: Participant): GameState => ({
  version: STATE_VERSION, participant, currentStep: 1, completedSteps: [], answers: {}, revealedHints: {}, archiveEntries: [], viewedArchiveEntries: [], lastSavedAt: new Date().toISOString(),
})

export const createParticipant = (name: string, institution: Institution): Participant => ({ name: name.trim(), institution, createdAt: new Date().toISOString() })
