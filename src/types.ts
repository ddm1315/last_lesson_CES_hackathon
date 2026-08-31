export const INSTITUTIONS = ['BYU', 'BYU–Idaho', 'BYU–Hawaii', 'Ensign College', 'BYU-Pathway', 'Church'] as const
export type Institution = (typeof INSTITUTIONS)[number]

export const INSTITUTION_FILE_TYPES: Record<Institution, string> = {
  BYU: 'PowerPoint slide',
  'BYU–Idaho': 'Word document',
  'BYU–Hawaii': 'Excel sheet',
  'Ensign College': 'PDF',
  'BYU-Pathway': 'Image',
  Church: 'Downloadable .ics invite',
}

export type ResourceKind = 'text' | 'quote' | 'notes' | 'reflection' | 'message' | 'data' | 'fragment' | 'image' | 'download'
export type InputType = 'text' | 'textarea' | 'code' | 'composite' | 'image-upload'
export type ValidationStrategy = 'normalized' | 'hashed' | 'composite' | 'collaboration' | 'group-collaboration'

export interface Resource {
  id: string
  kind: ResourceKind
  label: string
  title: string
  body: string
  meta?: string
  accent?: string
  copyable?: boolean
  copyLabel?: string
  imageSrc?: string
  downloadSrc?: string
  downloadName?: string
}

export interface AnswerField {
  id: string
  label: string
  placeholder?: string
  inputType?: 'text' | 'textarea' | 'institution' | 'file-type'
}

export interface InstitutionVariant {
  institution: Institution
  label: string
  body: string
  resource?: Resource
}

export interface CollaborationValidation {
  mode: 'same-institution' | 'cross-institution-group'
  nameFields: string[]
  campusFields: string[]
  fileTypeFields?: string[]
  responseField?: string
  requireParticipantCampus?: boolean
  fileTypes?: Record<Institution, string>
}

export interface PuzzleValidation {
  strategy: ValidationStrategy
  acceptedAnswers?: string[]
  acceptedHashes?: string[]
  fields?: AnswerField[]
  acceptedCombinations?: Record<string, string>[]
  collaboration?: CollaborationValidation
}

export interface PuzzleHint {
  title: string
  body: string
}

export interface Puzzle {
  id: string
  step: number
  title: string
  subtitle: string
  narrative: string
  instructions: string
  responsePrompt?: string
  capability: string
  collaboration?: string
  transmission?: string
  resources: Resource[]
  institutionVariants?: InstitutionVariant[]
  inputType: InputType
  fields?: AnswerField[]
  validation?: PuzzleValidation
  hints: PuzzleHint[]
  successMessage: string
  archiveEntry: ArchiveEntry
  nextStage: string
}

export interface ArchiveEntry {
  id: string
  title: string
  summary: string
  detail: string
  transmission?: string
}

export interface Participant {
  name: string
  institution: Institution
  createdAt: string
}

export interface GameState {
  version: number
  participant: Participant
  currentStep: number
  completedSteps: number[]
  answers: Record<string, unknown>
  revealedHints: Record<string, number[]>
  archiveEntries: string[]
  viewedArchiveEntries: string[]
  finalRecommendation?: string
  finalSubmittedAt?: string
  lastSavedAt: string
}
