import { useEffect, useMemo, useState } from 'react'
import { archiveCatalog, getPuzzle, getVariant, institutionNames, puzzles } from './content/puzzles'
import { clearGameState, createGameState, createParticipant, readGameState, writeGameState } from './lib/storage'
import { isChatGPTSharedLink, validateAnswer } from './lib/validation'
import type { GameState, Institution, Puzzle, Resource } from './types'
import { INSTITUTION_FILE_TYPES, INSTITUTIONS } from './types'

const PROGRESSIVE_HINT_COUNT = 2

type View = 'mission' | 'evidence' | 'about'
type Theme = 'dark' | 'light'
const isDevMode = import.meta.env.DEV && new URLSearchParams(window.location.search).get('dev') === '1'
const THEME_STORAGE_KEY = 'the-last-lesson:theme'

const Icon = ({ name }: { name: 'arrow' | 'book' | 'check' | 'lock' | 'spark' | 'reset' | 'close' | 'sun' | 'moon' }) => {
  const paths: Record<string, string> = { arrow: 'M5 12h14m-6-6 6 6-6 6', book: 'M5 5.5A2.5 2.5 0 0 1 7.5 3H19v17H7.5A2.5 2.5 0 0 0 5 22V5.5Zm0 0V22', check: 'm5 12 4 4L19 6', lock: 'M7 10V7a5 5 0 0 1 10 0v3m-12 0h14v10H5V10Z', spark: 'm12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z', reset: 'M4 12a8 8 0 1 0 2.3-5.7M4 5v7h7', close: 'M6 6l12 12M18 6 6 18', sun: 'M12 3v2m0 14v2M3 12h2m14 0h2m-3.4-6.6 1.4-1.4M6 18l-1.4 1.4m0-14.8L6 6m12 12 1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z', moon: 'M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z' }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} /></svg>
}

const readTheme = (): Theme => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

document.documentElement.dataset.theme = readTheme()

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  return <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${nextTheme} mode`} aria-pressed={theme === 'light'}>
    <span className="theme-toggle-icon"><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></span>
    <span className="theme-toggle-copy"><strong>{theme === 'dark' ? 'Dark mode' : 'Light mode'}</strong><small>Switch to {nextTheme}</small></span>
  </button>
}

function App() {
  const [game, setGame] = useState<GameState | null>(() => readGameState())
  const [view, setView] = useState<View>('mission')
  const [devOpen, setDevOpen] = useState(isDevMode)
  const [theme, setTheme] = useState<Theme>(() => readTheme())

  useEffect(() => { if (game) writeGameState(game) }, [game])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7faf9' : '#101519')
    try { localStorage.setItem(THEME_STORAGE_KEY, theme) } catch { /* Storage may be unavailable in private browsing. */ }
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')

  if (!game) return <Onboarding theme={theme} onToggleTheme={toggleTheme} onComplete={(name, institution) => setGame(createGameState(createParticipant(name, institution)))} />

  const update = (mutator: (state: GameState) => GameState) => setGame((current) => current ? mutator({ ...current, lastSavedAt: new Date().toISOString() }) : current)
  const reset = () => { clearGameState(); setGame(null); setView('mission') }

  return <div className="app-shell flex min-h-screen flex-col">
    <TopBar game={game} view={view} theme={theme} onToggleTheme={toggleTheme} onNavigate={setView} onReset={reset} />
    <main className="page-wrap grow">
      {view === 'mission' && <Mission game={game} update={update} onNavigate={setView} />}
      {view === 'evidence' && <Evidence game={game} update={update} />}
      {view === 'about' && <About />}
    </main>
    {isDevMode && <DevTools game={game} open={devOpen} onToggle={() => setDevOpen((value) => !value)} update={update} reset={reset} />}
  </div>
}

function Onboarding({ theme, onToggleTheme, onComplete }: { theme: Theme; onToggleTheme: () => void; onComplete: (name: string, institution: Institution) => void }) {
  const [name, setName] = useState('')
  const [institution, setInstitution] = useState<Institution | ''>('')
  return <div className="onboarding min-h-screen">
    <div className="onboarding-tools"><ThemeToggle theme={theme} onToggle={onToggleTheme} /></div>
    <div className="onboarding-art"><div className="signal-orbit orbit-one" /><div className="signal-orbit orbit-two" /><div className="evidence-seal"><span>2041</span><strong>CASE FILE<br />OPEN</strong></div><div className="vertical-label">CES // FUTURE EVIDENCE</div></div>
    <section className="onboarding-card">
      <div className="eyebrow"><span className="status-dot" /> Emergency transmission · 2041</div>
      <h1>The Last<br /><em>Lesson</em></h1>
      <p className="intro-copy">Somewhere between efficiency and excellence, something fundamental was lost. The case is open. We need your help reconstructing what happened.</p>
      <div className="rule" />
      <p className="form-intro">Before you begin, identify yourself to the investigation.</p>
      <label className="field-label" htmlFor="name">Name</label>
      <input id="name" className="text-input" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" autoComplete="name" />
      <label className="field-label" htmlFor="institution">CES institution</label>
      <select id="institution" className="text-input" value={institution} onChange={(event) => setInstitution(event.target.value as Institution)}><option value="">Select your institution</option>{INSTITUTIONS.map((item) => <option key={item} value={item}>{institutionNames[item]}</option>)}</select>
      <button className="primary-button full" disabled={!name.trim() || !institution} onClick={() => institution && onComplete(name, institution)}><span>Open the case</span><Icon name="arrow" /></button>
      <p className="privacy-note">Your progress is saved only on this device. No account or sign-in required.</p>
    </section>
  </div>
}

function TopBar({ game, view, theme, onToggleTheme, onNavigate, onReset }: { game: GameState; view: View; theme: Theme; onToggleTheme: () => void; onNavigate: (view: View) => void; onReset: () => void }) {
  const progress = game.completedSteps.length
  return <header className="top-bar">
    <button className="brand" onClick={() => onNavigate('mission')} aria-label="Return to mission"><span className="brand-mark">C</span><span><strong>THE LAST LESSON</strong><small>CES AI CHALLENGE</small></span></button>
    <nav className="primary-nav" aria-label="Primary navigation"><button className={view === 'mission' ? 'active' : ''} onClick={() => onNavigate('mission')}>Mission</button><button className={view === 'evidence' ? 'active' : ''} onClick={() => onNavigate('evidence')}>Evidence <span className="nav-count">{progress}</span></button><button className={view === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About</button></nav>
    <div className="participant-chip"><ThemeToggle theme={theme} onToggle={onToggleTheme} /><span className="mini-avatar">{game.participant.name.charAt(0).toUpperCase()}</span><span className="participant-name">{game.participant.name}</span><button className="reset-link" onClick={() => { if (window.confirm('Reset this investigation and erase all local progress?')) onReset() }} aria-label="Reset local progress"><Icon name="reset" /></button></div>
  </header>
}

function Mission({ game, update, onNavigate }: { game: GameState; update: (mutator: (state: GameState) => GameState) => void; onNavigate: (view: View) => void }) {
  const activeStep = Math.min(game.currentStep, 10)
  const puzzle = getPuzzle(activeStep)
  const selectStep = (step: number) => {
    update((state) => ({ ...state, currentStep: step }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return <div className="mission-layout">
    <aside className="mission-sidebar"><div className="sidebar-intro"><div className="eyebrow">Mission progress</div><div className="progress-number">{String(game.completedSteps.length).padStart(2, '0')} <span>/ 10</span></div><div className="progress-track"><span style={{ width: `${game.completedSteps.length / 10 * 100}%` }} /></div><p>{game.completedSteps.length === 10 ? 'Investigation complete' : `${10 - game.completedSteps.length} transmissions remain`}</p></div><div className="step-list" aria-label="Mission stages">{puzzles.map((item) => <StageRow key={item.id} puzzle={item} currentStep={activeStep} complete={game.completedSteps.includes(item.step)} locked={item.step > activeStep} devNavigation={isDevMode} onSelect={selectStep} />)}</div><div className="sidebar-foot"><span className="status-dot" /> Signal stable <span className="sidebar-institution">{game.participant.institution}</span></div></aside>
    <section className="mission-content"><div className="mobile-progress"><span>Transmission progress</span><strong>{game.completedSteps.length} / 10</strong></div><div className="mission-kicker"><span>Transmission {String(puzzle.step).padStart(2, '0')}</span><span className="kicker-line" /><span>{puzzle.capability}</span></div><PuzzleView game={game} puzzle={puzzle} update={update} onNavigate={onNavigate} /></section>
  </div>
}

function StageRow({ puzzle, currentStep, complete, locked, devNavigation, onSelect }: { puzzle: Puzzle; currentStep: number; complete: boolean; locked: boolean; devNavigation: boolean; onSelect: (step: number) => void }) {
  const className = `stage-row ${puzzle.step === currentStep ? 'current' : ''} ${complete ? 'complete' : ''} ${locked ? 'locked' : ''} ${devNavigation ? 'dev-navigable' : ''}`
  const content = <><span className="stage-indicator">{complete ? <Icon name="check" /> : locked ? <Icon name="lock" /> : String(puzzle.step).padStart(2, '0')}</span><span className="stage-copy"><strong>{puzzle.title}</strong><small>{puzzle.capability.split(' / ')[0]}</small></span>{puzzle.step === currentStep && <span className="current-chevron">›</span>}</>
  return devNavigation ? <button type="button" className={className} onClick={() => onSelect(puzzle.step)} aria-label={`Jump to stage ${puzzle.step}: ${puzzle.title}`}>{content}</button> : <div className={className}>{content}</div>
}

function PuzzleView({ game, puzzle, update, onNavigate }: { game: GameState; puzzle: Puzzle; update: (mutator: (state: GameState) => GameState) => void; onNavigate: (view: View) => void }) {
  const isComplete = game.completedSteps.includes(puzzle.step)
  const storedAnswer = () => puzzle.step === 6 && typeof game.answers[puzzle.id] !== 'string' ? '' : game.answers[puzzle.id] ?? (puzzle.inputType === 'composite' ? {} : '')
  const [answer, setAnswer] = useState<unknown>(() => storedAnswer())
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [showHints, setShowHints] = useState(false)
  const [imageUploadState, setImageUploadState] = useState<'idle' | 'checking' | 'ready'>('idle')
  const variant = getVariant(puzzle, game.participant.institution)
  useEffect(() => { setAnswer(storedAnswer()); setFeedback(null); setShowHints(false); setImageUploadState('idle') }, [puzzle.id])
  const revealed = game.revealedHints[puzzle.id] ?? []
  const saveAnswer = (value: unknown) => setAnswer(value)
  const handleImageUpload = (file: File | null) => {
    if (!file) return
    setFeedback(null)
    setImageUploadState('checking')
    window.setTimeout(() => setImageUploadState('ready'), 4000)
  }

  useEffect(() => {
    if (imageUploadState !== 'ready' || puzzle.inputType !== 'image-upload') return
    if (!isComplete) {
      update((state) => ({ ...state, completedSteps: state.completedSteps.includes(puzzle.step) ? state.completedSteps : [...state.completedSteps, puzzle.step], archiveEntries: state.archiveEntries.includes(puzzle.archiveEntry.id) ? state.archiveEntries : [...state.archiveEntries, puzzle.archiveEntry.id], currentStep: puzzle.step }))
    }
    setFeedback({ type: 'success', message: puzzle.successMessage })
  }, [imageUploadState, puzzle.id])

  const submit = () => {
    if (puzzle.step === 10) {
      const thoughts = String(answer ?? '').trim()
      if (!thoughts) { setFeedback({ type: 'error', message: 'Write your email to Cosmo before continuing to the debrief.' }); return }
      update((state) => ({ ...state, completedSteps: state.completedSteps.includes(10) ? state.completedSteps : [...state.completedSteps, 10], archiveEntries: state.archiveEntries.includes(puzzle.archiveEntry.id) ? state.archiveEntries : [...state.archiveEntries, puzzle.archiveEntry.id], currentStep: 10 }))
      setFeedback({ type: 'success', message: puzzle.successMessage }); return
    }
    if (puzzle.step === 6) {
      const conversationLink = typeof answer === 'string' ? answer.trim() : ''
      if (!conversationLink) { setFeedback({ type: 'error', message: 'Paste your ChatGPT conversation share link to continue.' }); return }
      if (!isChatGPTSharedLink(conversationLink)) { setFeedback({ type: 'error', message: 'Use a valid HTTPS ChatGPT Share link.' }); return }
      update((state) => ({ ...state, answers: { ...state.answers, [puzzle.id]: conversationLink }, completedSteps: state.completedSteps.includes(puzzle.step) ? state.completedSteps : [...state.completedSteps, puzzle.step], archiveEntries: state.archiveEntries.includes(puzzle.archiveEntry.id) ? state.archiveEntries : [...state.archiveEntries, puzzle.archiveEntry.id], currentStep: puzzle.step }))
      setFeedback({ type: 'success', message: puzzle.successMessage }); return
    }
    if (puzzle.inputType === 'image-upload') {
      if (imageUploadState !== 'ready') return
      update((state) => ({ ...state, completedSteps: state.completedSteps.includes(puzzle.step) ? state.completedSteps : [...state.completedSteps, puzzle.step], archiveEntries: state.archiveEntries.includes(puzzle.archiveEntry.id) ? state.archiveEntries : [...state.archiveEntries, puzzle.archiveEntry.id], currentStep: puzzle.step }))
      setFeedback({ type: 'success', message: puzzle.successMessage }); return
    }
    const result = validateAnswer(puzzle, answer, game.participant.institution)
    if (!result.valid) { setFeedback({ type: 'error', message: result.message }); return }
    update((state) => ({ ...state, answers: { ...state.answers, [puzzle.id]: answer }, completedSteps: state.completedSteps.includes(puzzle.step) ? state.completedSteps : [...state.completedSteps, puzzle.step], archiveEntries: state.archiveEntries.includes(puzzle.archiveEntry.id) ? state.archiveEntries : [...state.archiveEntries, puzzle.archiveEntry.id], currentStep: puzzle.step }))
    setFeedback({ type: 'success', message: puzzle.successMessage })
  }

  const revealHint = () => update((state) => ({ ...state, revealedHints: { ...state.revealedHints, [puzzle.id]: [...new Set([...(state.revealedHints[puzzle.id] ?? []), Math.min((state.revealedHints[puzzle.id]?.length ?? 0), puzzle.hints.length - 1)])] } }))
  const activeHintCount = Math.min(revealed.length, puzzle.hints.length)
  return <>
    <div className="puzzle-header"><div className="puzzle-title-block"><div className="eyebrow">{puzzle.subtitle}</div><h2>{puzzle.title}</h2><p>{puzzle.narrative}</p></div>{puzzle.step === 10 && isComplete ? <div className="complete-seal"><Icon name="check" /><span>Complete</span></div> : <div className="step-badge">{String(puzzle.step).padStart(2, '0')}<small>/10</small></div>}</div>
    {puzzle.transmission && <CosmoTransmission text={puzzle.transmission} />}
    <div className="puzzle-body"><div className="puzzle-main"><div className="instructions-panel"><div className="panel-label"><Icon name="spark" /> Your brief</div><p>{puzzle.instructions}</p>{puzzle.collaboration && <div className="collab-note"><span className="collab-icon">◎</span><span><strong>Field collaboration</strong>{puzzle.collaboration}</span></div>}</div>{variant && <div className="variant-panel"><div className="panel-label"><Icon name="book" /> {variant.label}</div><p>{variant.body}</p></div>}<div className={`resources-grid ${puzzle.resources.length === 1 ? 'single-resource' : ''}`}>{puzzle.resources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div>{variant?.resource && <div className="resources-grid"><ResourceCard resource={variant.resource} /></div>}<AnswerPanel puzzle={puzzle} answer={answer} onChange={saveAnswer} onSubmit={submit} onImageUpload={handleImageUpload} imageUploadState={imageUploadState} isComplete={isComplete} feedback={feedback} />{puzzle.step < 10 && <HintPanel puzzle={puzzle} revealed={activeHintCount} showHints={showHints} setShowHints={setShowHints} revealHint={revealHint} />}{feedback?.type === 'success' && <div className="next-panel"><div><span className="eyebrow">{puzzle.step === 10 ? 'Transmission received' : 'Next Challenge'}</span><strong>{puzzle.nextStage}</strong></div>{puzzle.step < 10 && <button className="text-button" onClick={() => { update((state) => ({ ...state, currentStep: puzzle.step + 1 })); setFeedback(null); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{puzzle.step === 3 ? 'Continue to Next Challenge' : 'Continue'} <Icon name="arrow" /></button>}{puzzle.step === 10 && <button className="text-button" onClick={() => onNavigate('evidence')}>Review evidence <Icon name="arrow" /></button>}</div>}</div><aside className="cosmo-aside"><div className="cosmo-aside-label">A note from the investigation</div><p>{puzzle.step < 4 ? 'You keep looking for the technology that failed. Maybe that is not what failed.' : puzzle.step < 8 ? 'Be careful with a tidy answer. Tidy answers are how some of this began.' : 'The last step is not hidden in another tool. It is waiting in your judgment.'}</p><span className="cosmo-signature">— C</span></aside></div>
  </>
}

function CosmoTransmission({ text }: { text: string }) { return <div className="transmission-line"><span className="signal-icon"><span /></span><span>{text}</span><strong>RECEIVED</strong></div> }

function ResourceCard({ resource }: { resource: Resource }) {
  const [copied, setCopied] = useState(false)
  const copyResource = async () => { try { await navigator.clipboard.writeText(resource.body); setCopied(true); window.setTimeout(() => setCopied(false), 1800) } catch { setCopied(false) } }
  return <article className={`resource-card ${resource.accent ?? ''}`}>
    <div className="resource-top"><span className="resource-kind">{resource.kind}</span><span className="resource-actions"><span className="resource-meta">{resource.meta}</span>{resource.copyable && <button className="resource-copy" onClick={copyResource}>{copied ? 'Copied' : resource.copyLabel ?? 'Copy email'}</button>}{(resource.imageSrc || resource.downloadSrc) && <a className="resource-download" href={resource.imageSrc ?? resource.downloadSrc} download={resource.downloadName}>Download</a>}</span></div>
    {resource.kind === 'image' ? <>{resource.imageSrc ? <div className="resource-image"><img src={resource.imageSrc} alt={resource.title} /></div> : <div className="placeholder-image"><div className="image-window"><span /><span /><span /></div><div className="image-card">ASK<br />WHY<br />FIRST</div><div className="image-caption">ROOM 204 · 18:42</div></div>}<h3>{resource.title}</h3><p>{resource.body}</p></> : <><h3>{resource.title}</h3><p>{resource.body}</p></>}
    <div className="resource-bottom"><span>{resource.label}</span><span>↗</span></div>
  </article>
}

function AnswerPanel({ puzzle, answer, onChange, onSubmit, onImageUpload, imageUploadState, isComplete, feedback }: { puzzle: Puzzle; answer: unknown; onChange: (value: unknown) => void; onSubmit: () => void; onImageUpload?: (file: File | null) => void; imageUploadState?: 'idle' | 'checking' | 'ready'; isComplete: boolean; feedback: { type: 'success' | 'error'; message: string } | null }) {
  const uploadReady = imageUploadState === 'ready'
  const isCodeInput = puzzle.inputType === 'code'
  const isSharedConversation = puzzle.step === 6
  const isCollaboration = puzzle.validation?.strategy === 'collaboration' || puzzle.validation?.strategy === 'group-collaboration'
  const isHumanReview = puzzle.step === 8 || puzzle.step === 9
  const panelLabel = puzzle.step === 10 ? 'Email to Cosmo' : puzzle.inputType === 'image-upload' ? 'Security upload' : isSharedConversation ? 'Conversation share link' : isHumanReview ? 'Human review record' : isCollaboration ? 'Collaboration record' : isCodeInput ? 'Code to advance' : 'Keywords to advance'
  const panelDescription = puzzle.step === 10 ? 'Your response is not saved · write your thoughts and be prepared to share them in the hackathon debrief' : puzzle.inputType === 'image-upload' ? 'The uploaded image is used for this check only and is not saved.' : puzzle.responsePrompt ?? (isCollaboration ? 'Record the people you spoke with and the work you created together.' : 'Enter the keywords that best answer the question below.')
  const submitted = (answer && typeof answer === 'object' ? answer : {}) as Record<string, unknown>
  const updateField = (id: string, value: string) => onChange({ ...submitted, [id]: value })
  const answerContent = puzzle.inputType === 'composite' ? <div className={`composite-grid ${isCollaboration && puzzle.validation?.strategy === 'group-collaboration' ? 'people-grid' : ''}`}>{(puzzle.fields ?? []).map((field) => <div key={field.id}><label className="field-label" htmlFor={`${puzzle.id}-${field.id}`}>{field.label}</label>{field.inputType === 'textarea' ? <textarea id={`${puzzle.id}-${field.id}`} className="text-input collaboration-textarea" value={String(submitted[field.id] ?? '')} onChange={(event) => updateField(field.id, event.target.value)} placeholder={field.placeholder} /> : field.inputType === 'institution' ? <select id={`${puzzle.id}-${field.id}`} className="text-input" value={String(submitted[field.id] ?? '')} onChange={(event) => updateField(field.id, event.target.value)}><option value="">Select {field.label.toLowerCase().includes('institution') ? 'institution' : 'campus'}</option>{INSTITUTIONS.map((institution) => <option key={institution} value={institution}>{institutionNames[institution]}</option>)}</select> : field.inputType === 'file-type' ? <select id={`${puzzle.id}-${field.id}`} className="text-input" value={String(submitted[field.id] ?? '')} onChange={(event) => updateField(field.id, event.target.value)}><option value="">Select file type</option>{Object.values(INSTITUTION_FILE_TYPES).map((fileType) => <option key={fileType} value={fileType}>{fileType}</option>)}</select> : <input id={`${puzzle.id}-${field.id}`} className="text-input" value={String(submitted[field.id] ?? '')} onChange={(event) => updateField(field.id, event.target.value)} placeholder={field.placeholder} />}</div>)}</div> : puzzle.inputType === 'textarea' ? <textarea className="text-input recommendation-input" maxLength={500} value={String(answer ?? '')} onChange={(event) => onChange(event.target.value)} placeholder="Email Cosmo about what CES will do with AI in 2026…" /> : puzzle.inputType === 'image-upload' ? <label className={`upload-field ${imageUploadState ?? 'idle'}`}><span className="upload-icon">{imageUploadState === 'checking' ? '◌' : imageUploadState === 'ready' ? '✓' : '↑'}</span><span><strong>{imageUploadState === 'checking' ? 'Analyzing image…' : imageUploadState === 'ready' ? 'Image accepted' : 'Choose generated puppy image'}</strong><small>{imageUploadState === 'checking' ? 'BOT-DETECTION REVIEW IN PROGRESS' : imageUploadState === 'ready' ? 'SECURITY CHECK COMPLETE' : 'PNG, JPG, OR WEBP'}</small></span><input type="file" accept="image/*" onChange={(event) => onImageUpload?.(event.target.files?.[0] ?? null)} /></label> : <input className="text-input answer-input" type={isSharedConversation ? 'url' : undefined} inputMode={isCodeInput ? 'numeric' : undefined} value={String(answer ?? '')} onChange={(event) => onChange(event.target.value)} placeholder={isSharedConversation ? 'Paste your conversation share link' : isCodeInput ? 'Enter the count' : 'Type your keywords'} onKeyDown={(event) => event.key === 'Enter' && onSubmit()} />
  const showSubmitButton = puzzle.inputType !== 'image-upload'
  return <div className="answer-panel"><div className="answer-header"><div><div className="panel-label">{panelLabel}</div><p>{panelDescription}</p></div>{isComplete && <span className="saved-label"><Icon name="check" /> {puzzle.step === 10 ? 'Ready for debrief' : 'Saved'}</span>}</div>{answerContent}{feedback && <div className={`feedback ${feedback.type}`} role="status"><span>{feedback.type === 'success' ? 'MATCH CONFIRMED' : 'KEEP INVESTIGATING'}</span><p>{feedback.message}</p></div>}{showSubmitButton && <button className="primary-button" disabled={puzzle.inputType === 'image-upload' && !uploadReady} onClick={onSubmit}>{isComplete ? 'Retry' : puzzle.inputType === 'image-upload' ? puzzle.step === 3 ? 'Login' : 'Continue to LMS' : puzzle.step === 10 ? 'Prepare email' : isSharedConversation ? 'Submit conversation link' : isHumanReview ? 'Submit review' : isCollaboration ? 'Submit collaboration' : isCodeInput ? 'Submit code' : 'Submit keywords'} <Icon name="arrow" /></button>}</div>
}

function HintPanel({ puzzle, revealed, showHints, setShowHints, revealHint }: { puzzle: Puzzle; revealed: number; showHints: boolean; setShowHints: (value: boolean) => void; revealHint: () => void }) {
  const progressiveHintCount = Math.min(PROGRESSIVE_HINT_COUNT, puzzle.hints.length)
  const keywordRevealAvailable = puzzle.hints.length > progressiveHintCount
  const keywordsRevealed = keywordRevealAvailable && revealed >= puzzle.hints.length
  const nextAction = revealed < progressiveHintCount ? `Reveal hint ${revealed + 1}` : 'Get the answer'
  return <div className="hint-panel"><button className="hint-toggle" onClick={() => setShowHints(!showHints)}><span><Icon name="spark" /> Need a nudge?</span><span>{Math.min(revealed, progressiveHintCount)}/{progressiveHintCount} hints revealed{keywordsRevealed ? ' · keywords revealed' : ''} <b>{showHints ? '−' : '+'}</b></span></button>{showHints && <div className="hint-body">{puzzle.hints.slice(0, revealed).map((hint, index) => <div className="hint-item" key={hint.title}><span>0{index + 1}</span><div><strong>{hint.title}</strong><p>{hint.body}</p></div></div>)}{revealed < puzzle.hints.length && <button className="secondary-button" onClick={revealHint}>{nextAction} <Icon name="arrow" /></button>}</div>}</div>
}

function Evidence({ game, update }: { game: GameState; update: (mutator: (state: GameState) => GameState) => void }) { const [selected, setSelected] = useState<string | null>(null); const entries = archiveCatalog.filter((entry) => game.archiveEntries.includes(entry.id)); return <div className="evidence-page"><div className="page-heading"><div><div className="eyebrow">CES investigation // personal evidence</div><h1>Mission <em>Evidence</em></h1><p>Each established finding stays here so you can review the investigation whenever you need.</p></div><div className="evidence-count"><strong>{String(entries.length).padStart(2, '0')}</strong><span>findings established</span></div></div><div className="evidence-grid">{archiveCatalog.map((entry, index) => { const unlocked = game.archiveEntries.includes(entry.id); return <button className={`evidence-card ${unlocked ? 'unlocked' : 'locked'}`} key={`${entry.id}-${index}`} disabled={!unlocked} onClick={() => { setSelected(entry.id); if (!game.viewedArchiveEntries.includes(entry.id)) update((state) => ({ ...state, viewedArchiveEntries: [...state.viewedArchiveEntries, entry.id] })) }}><span className="evidence-card-number">{unlocked ? <Icon name="check" /> : <Icon name="lock" />}</span><span className="evidence-card-copy"><small>{unlocked ? entry.transmission : 'ENTRY LOCKED'}</small><strong>{unlocked ? entry.title : 'Sealed evidence'}</strong><span>{unlocked ? entry.summary : 'Complete earlier transmissions to recover this record.'}</span></span><span className="evidence-card-arrow">›</span></button> })}</div>{selected && <EvidenceModal entry={archiveCatalog.find((entry) => entry.id === selected)!} close={() => setSelected(null)} />}</div> }
function EvidenceModal({ entry, close }: { entry: (typeof archiveCatalog)[number]; close: () => void }) { return <div className="modal-backdrop" role="presentation" onClick={close}><div className="evidence-modal" role="dialog" aria-modal="true" aria-labelledby="evidence-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={close} aria-label="Close evidence entry"><Icon name="close" /></button><div className="eyebrow">{entry.transmission}</div><h2 id="evidence-modal-title">{entry.title}</h2><p>{entry.detail}</p><div className="modal-stamp">EVIDENCE RECORD // VERIFIED</div></div></div> }

function About() { return <div className="about-page"><div className="page-heading"><div><div className="eyebrow">Briefing document // read before you begin</div><h1>How to read<br /><em>the evidence</em></h1><p>This is an individual investigation with moments that require the people around you.</p></div></div><div className="about-columns"><div><section className="about-section"><span className="section-number">01</span><div><h2>Use AI as a thinking partner</h2><p>The challenge does not call AI for you. Instead, each stage gives you a reason to try a different capability: conversation, image understanding and generation, file analysis, structured data, shared conversations, collaboration, skills, agents, and human judgment.</p></div></section><section className="about-section"><span className="section-number">02</span><div><h2>Bring the room into the story</h2><p>Later evidence is distributed across CES institutions. When the investigation asks for a collaborator, find a real person nearby. Your device remains individual; the investigation becomes shared.</p></div></section><section className="about-section"><span className="section-number">03</span><div><h2>Use the ChatGPT tools available to you</h2><p>Depending on your account, a stage may use a ChatGPT conversation, Project, Skill, Agent, or Outlook app/connector. If live email access is unavailable, use a mock inbox or ask the facilitator for the safe demo path.</p></div></section><section className="about-section"><span className="section-number">04</span><div><h2>There is no penalty for hints</h2><p>Hints are designed to teach a useful way to prompt, inspect, and verify. The purpose is learning—not winning.</p></div></section></div><div className="about-quote"><span>“</span><p>AI can help humans reason. It cannot decide what humans should value.</p><small>THE LAST LESSON // PRINCIPLE</small></div></div></div> }

function DevTools({ game, open, onToggle, update, reset }: { game: GameState; open: boolean; onToggle: () => void; update: (mutator: (state: GameState) => GameState) => void; reset: () => void }) { return <div className={`dev-tools ${open ? 'open' : ''}`}><button className="dev-tab" onClick={onToggle}>DEV {open ? '×' : '↗'}</button>{open && <div className="dev-content"><div className="eyebrow">Development mode</div><strong>Test the investigation</strong><label className="field-label">Jump to stage</label><select className="text-input" value={game.currentStep} onChange={(event) => update((state) => ({ ...state, currentStep: Number(event.target.value) }))}>{puzzles.map((puzzle) => <option key={puzzle.step} value={puzzle.step}>{puzzle.step}. {puzzle.title}</option>)}</select><label className="field-label">Test institution</label><select className="text-input" value={game.participant.institution} onChange={(event) => update((state) => ({ ...state, participant: { ...state.participant, institution: event.target.value as Institution } }))}>{INSTITUTIONS.map((item) => <option key={item}>{item}</option>)}</select><div className="dev-actions"><button className="secondary-button" onClick={() => update((state) => ({ ...state, completedSteps: puzzles.map((puzzle) => puzzle.step), archiveEntries: archiveCatalog.map((entry) => entry.id), currentStep: 10 }))}>Complete all</button><button className="secondary-button" onClick={reset}>Reset</button></div><details><summary>Local state</summary><pre>{JSON.stringify(game, null, 2)}</pre></details></div>}</div> }

export default App
