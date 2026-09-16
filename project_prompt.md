# Build "The Last Lesson" — CES AI Challenge Web App

I want you to build the first version of an interactive web-based AI challenge called **The Last Lesson** for a CES (Church Educational System) IT All Hands conference being held at BYU.

The experience is part escape room, part AI workshop, part mystery, and part collaboration exercise.

Approximately 200 conference attendees will receive access to the challenge Monday morning. They will work on it individually throughout Monday, occasionally needing to collaborate with other attendees. On Tuesday afternoon, the conference will walk through the experience together and discuss what participants learned about using AI.

For V1, focus on building a polished, extensible **game engine and participant experience**. Use placeholder puzzle content where necessary. The actual puzzles and narrative details will be refined later.

---

# 1. Technology

Build with:

* React
* TypeScript
* Tailwind CSS
* Deployable to Vercel
* No database
* No authentication
* No backend required for V1
* No analytics
* No AI API integrations

Use `localStorage` for all participant information and progress.

Participants will use the same device throughout the challenge.

Keep dependencies minimal.

---

# 2. Core Concept

The experience begins with an emergency transmission from the year **2041**.

Something has gone seriously wrong with education across CES.

Technology works.

Students attend class.

Professors teach.

Assignments are completed.

Grades are excellent.

AI is extraordinarily capable.

But somewhere along the way, something fundamental was lost.

Students increasingly stopped thinking because AI thought for them. Faculty increasingly outsourced parts of teaching that required human judgment, creativity, mentorship, and connection. CES became extraordinarily efficient at producing educational outputs while slowly losing sight of actual learning.

The participants don't know this at the beginning.

Initially, it should feel like they are investigating some kind of mysterious AI-related catastrophe. leave them wondering if AI became sentient and is trying to take over the world or other AI related possible catastrophes. 

Throughout ten stages, they reconstruct what happened between 2026 and 2041.

The eventual revelation is:

**There was no rogue AI.**

There was no single catastrophic event.

People gradually became so effective at using AI to produce educational outputs that they accidentally began optimizing the thinking out of education.

The challenge should ultimately ask:

**How can CES use AI to strengthen thinking, teaching, and learning rather than replace them?**

Do not reveal this conclusion too early.

---

# 3. Cosmo

**Cosmo the Cougar** is an important character.

A future version of Cosmo is communicating with participants from 2041.

Initially, messages may simply be signed:

**— C**

Eventually participants discover that their mysterious contact is Cosmo.

Cosmo should function as:

* guide
* storyteller
* source of occasional hints
* comic relief
* emotional connection to BYU/CES
* messenger from 2041

Do not make Cosmo childish or overly cartoonish.

He should feel like a slightly mysterious, occasionally humorous guide who has witnessed what happened to education in this future.

Example tone:

> COSMO // 2041
>
> Good news: Average GPA reached 3.97.
>
> Bad news: I asked twelve students what they learned this semester.
>
> Nine asked if they could upload the question to their AI assistant.

Another example:

> COSMO // 2041
>
> You keep looking for the technology that failed.
>
> Maybe that's not what failed.

Create reusable components for Cosmo transmissions so we can easily insert them throughout the experience.

For now, use a simple visual placeholder/avatar for Cosmo rather than relying on copyrighted imagery or external assets.

---

# 4. Participant Onboarding

There is no login.

On first visit, show a polished introduction/onboarding screen.

Ask only:

**Name**

and

**CES Institution**

Institution options:

* BYU
* BYU–Idaho
* BYU–Hawaii
* Ensign College
* BYU-Pathway
* Church

Store this information in `localStorage`.

After onboarding, begin the experience.

Include an unobtrusive way to reset all local progress for testing/admin purposes, but make it difficult for participants to trigger accidentally.

---

# 5. Game Structure

There are **10 sequential stages**.

Steps 1–9 have objective answers.

Step 10 is an open-ended final recommendation.

Participants cannot normally access a stage until the previous stage has been completed.

Build the architecture so puzzle content is data-driven and easy to modify later.

Avoid ten giant hard-coded page components.

Ideally, puzzle configuration should support fields such as:

* id
* step number
* title
* subtitle
* narrative
* Cosmo transmission
* instructions
* AI capability being practiced
* collaboration requirement
* evidence/resources
* input type
* accepted answer/validation strategy
* hints
* success message
* archive entry unlocked
* next-stage transition

Design the TypeScript types/interfaces cleanly.

---

# 6. AI Skill Progression

The ten stages should expose participants to increasingly sophisticated ways of using AI.

The app itself does **not** call AI.

Instead, participants use whatever approved AI tools they have available outside the application.

The progression is approximately:

### Step 1 — Chat

Basic AI prompting.

### Step 2 — Context and Vision

Providing better context and structured instructions.

### Step 3 — Image Generation

Giving AI images, screenshots, photographs, or other visual information.

### Step 4 — Work

Working with longer documents or collections of information.

### Step 5 — Structured Analysis

Combining multiple sources and perspectives.

### Step 6 — Shared Conversations and Human Review

Recognizing contradictions, hallucinations, unsupported claims, and the need to verify AI output.

### Step 7 — Collaboration

Combining information held by different people/institutions.

### Step 8 — ChatGPT Ecosystem / Skill Building

Using AI-assisted coding to analyze information or build a small tool.

### Step 9 — Agent Creation and Human Approval

Using multiple AI capabilities, people, and sources to solve a difficult problem.

### Step 10 — Human Judgment

AI can assist, but humans must ultimately decide what recommendation CES should make.

The participant should gradually realize:

**AI is much more than a chatbot.**

---

# 7. Collaboration Progression

This is an **individual challenge**, not a team competition.

There are no assigned teams.

However, later puzzles require participants to physically collaborate with conference attendees.

Canonical V1 progression:

**Steps 1–5:** Can be completed individually.

**Step 6:** Requires one human checkpoint. Participants share a short ChatGPT conversation with another person, exchange perspectives, and compare what they explored. A same-institution match is not required in V1.

**Step 7:** Requires a small three-person group: the participant plus two people from outside the participant's institution. The group creates a small, cross-campus toolkit.

**Step 8:** Requires two lightweight reflections from people at other CES institutions after recreating a bounded inbox skill with ChatGPT tools.

**Step 9:** Requires a new pair of lightweight reflections from people at other CES institutions after testing a bounded inbox agent.

**Step 10:** Participants make their own final recommendation after learning from the collaboration.

The application does NOT need to digitally connect participants.

Collaboration happens in person.

The story should naturally reveal why another person's information is required. These are lightweight, honor-system collaboration records rather than intensive proof.

Example:

> TRANSMISSION INCOMPLETE
>
> C’s archive contains the next clue, but the investigation needs another person’s perspective.

Later:

> CROSS-CAMPUS REQUEST
>
> C needs a small group to build the missing piece together.

Build the content system so we can display different evidence or puzzle variants depending on the participant's selected institution.

---

# 8. Placeholder 10-Stage Story

For V1, implement placeholder content around this progression.

### 1. The Transmission

Decode the first damaged transmission from 2041. this can be a message that is given in binary or a combination of text, binary, hex etc. 

### 2. The Hidden Clue

Inspect a 2026 CES All Hands attachment and find the hidden instruction pointing to the LMS.

### 3. The Bot Detection

Generate and upload a puppy image to pass the LMS security experiment.

### 4. The Gradebook

Analyze a 2025–2040 grade export and notice that grades rise without proving deeper learning.

### 5. The Instructor’s Notes

Analyze the professor’s structured journal and identify the most common mood.

### 6. The Human Check

Share a short ChatGPT conversation with another person and compare perspectives before accepting the next clue.

### 7. Build the Missing Piece

Create a small toolkit with two people from outside the participant’s institution.

### 8. The Inbox Skill

Recreate a bounded inbox skill from a 2032 case file using the ChatGPT tools available to the participant.

### 9. The Inbox Agent

Turn the bounded skill into an agent, test its stopping point, and require human approval.

### 10. The Last Lesson

The expected final password does not exist.

Instead, participants receive a final transmission:

> You know what happened to us.
>
> We became very good at asking AI for answers.
>
> So I'm not asking AI.
>
> I'm asking you.
>
> What should CES do in 2026 to ensure AI strengthens thinking, teaching, and learning rather than replacing them?

Allow approximately 500 characters. The V1 response is intentionally not stored; participants bring it to the debrief.

After submission, show a strong ending state.

For example:

> TRANSMISSION RECEIVED
>
> The future is no longer certain.

We will refine all of this copy later.

---

# 9. Puzzle Answer Validation

Use three levels of answer handling.

## Level 1 — Simple Client Validation

For early stages, straightforward client-side answer validation is acceptable.

Normalize answers before comparison:

* trim whitespace
* case-insensitive
* optionally ignore common punctuation
* allow explicitly configured alternative answers

## Level 2 — Obfuscated/Hashed Answers

For approximately Steps 5–7, don't store obvious plaintext answers directly in the puzzle configuration.

Use a lightweight client-side hash approach.

This is NOT intended as serious security.

The goal is simply to prevent someone casually opening the source or JavaScript bundle and immediately seeing every answer.

## Level 3 — Composite Validation

For Steps 8–9, support puzzles requiring several fields or pieces of information.

Example:

* Person/role
* Year
* Event
* Phrase/code

All required components must be correct before unlocking the next stage.

Again, this does not need to be cryptographically secure. This is a conference activity, not a security system.

Build the validation system to support all three patterns cleanly.

---

# 10. Hints

Every objective puzzle should support hints.

Hints should unlock progressively.

Example:

**Hint 1:** Gentle directional nudge.

**Hint 2:** More explicit suggestion about how AI could be used.

**Hint 3:** Strong hint that nearly reveals the approach.

Do not penalize participants for using hints.

Track which hints have been revealed in `localStorage`.

The purpose is learning, not winning.

Where appropriate, hints can teach participants *how* to use AI rather than simply revealing puzzle information.

Example:

> Instead of asking AI for the answer immediately, try asking it to first inventory the evidence and identify what information is missing.

---

# 11. Mission Archive

Create a persistent **Mission Archive**.

This should become one of the main navigation areas.

As participants progress, discoveries are added to the archive.

Example:

**THE LAST LESSON // CES FUTURE ARCHIVE**

* ✓ Emergency transmission received
* ✓ Identity of "C" discovered
* ✓ Professor's study journal recovered
* ✓ Student grade trend recovered
* ✓ Human checkpoint established
* ○ Cross-campus toolkit
* ○ 2032 inbox case file
* ○ Final Transmission
* ○ Final Transmission

Completed entries may be opened to review important information.

The archive should help participants resume the challenge after leaving it for several hours.

Also allow important Cosmo messages to be reviewed.

---

# 12. Local Storage State

Create a versioned localStorage state model.

Something conceptually similar to:

```ts
interface Participant {
  name: string;
  institution: Institution;
  createdAt: string;
}

interface GameState {
  version: number;
  participant: Participant;
  currentStep: number;
  completedSteps: number[];
  answers: Record<string, unknown>;
  revealedHints: Record<string, number[]>;
  archiveEntries: string[];
  finalRecommendation?: string;
}
```

Improve this structure if appropriate.

Make state access safe and centralized rather than scattering `localStorage.getItem()` calls throughout components.

Handle:

* missing state
* malformed state
* future schema changes
* reset progress
* refreshing the browser
* returning hours later

---

# 13. UX / Visual Direction

The experience should feel like:

**future archive + mysterious transmission + academic investigation**

NOT:

* generic corporate dashboard
* hacker terminal cliché
* children's escape room
* overly dystopian sci-fi
* neon cyberpunk

Use a sophisticated CES/BYU-adjacent academic aesthetic.

Think:

* archival documents
* transmission artifacts
* subtle futuristic interface elements
* academic materials
* restrained glitch effects
* strong typography
* generous whitespace
* subtle animation
* polished cards/panels
* evidence files
* timestamps
* transmission labels

A dark interface could work well, but prioritize readability.

Do not overuse terminal-green text or fake code.

The emotional tone should gradually move from:

**Mystery → Investigation → Concern → Collaboration → Revelation → Reflection**

Use subtle transitions as stages unlock.

---

# 14. Responsive Design

Participants may use:

* laptops
* tablets
* phones

The app must work well on all three.

Design mobile intentionally rather than merely shrinking the desktop UI.

Evidence, hints, answer inputs, Cosmo messages, and navigation should remain usable on smaller screens.

---

# 15. Navigation

Keep navigation simple.

Potential primary navigation:

**MISSION**

**ARCHIVE**

**ABOUT / INSTRUCTIONS**

Always make the participant's current stage obvious.

Show progress such as:

**TRANSMISSION PROGRESS — 4 / 10**

Do not create a leaderboard.

Do not show other participants' progress.

---

# 16. Puzzle Resources

Build reusable components for evidence/resources.

Support at least:

* text document
* image
* downloadable file
* quote/interview
* professor notes
* student reflection
* message/email
* data file
* mysterious archive fragment

Use placeholder assets/content initially.

The architecture should make it straightforward for us to replace these later with actual files and puzzle materials.

---

# 17. Failure and Success States

Incorrect answers should not feel punitive.

Avoid:

**WRONG.**

Prefer responses like:

> That doesn't match the archive.

or

> The transmission rejected that interpretation. There may be another connection.

Correct answers should feel satisfying.

Use a brief transition:

> MATCH CONFIRMED

> ARCHIVE RESTORED

> NEW TRANSMISSION RECEIVED

Then reveal the next narrative beat.

---

# 18. Accessibility

Follow reasonable accessibility practices:

* semantic HTML
* keyboard navigation
* sufficient contrast
* visible focus states
* labels for inputs
* alt text
* don't communicate essential information through color alone
* respect reduced-motion preferences

---

# 19. Content Architecture

This is important.

**Separate the game engine from the puzzle content.**

I expect to significantly rewrite:

* puzzle titles
* story text
* evidence
* accepted answers
* hints
* Cosmo messages
* institution-specific variants

I should be able to make most of these changes in centralized configuration/content files without editing core React components.

Design for iteration.

Do not over-engineer this into a CMS.

Simple, strongly typed TypeScript configuration is preferred.

---

# 20. Developer / Testing Mode

Create a developer mode that makes puzzle development easier.

It should allow a developer to:

* jump between stages
* mark stages complete
* reset progress
* inspect current local state
* test different institutions
* test hints
* test success/failure states

This should not be visible to normal conference participants.

A simple environment variable or development-only route is sufficient.

---

# 21. V1 Scope

DO build:

* onboarding
* participant institution selection
* localStorage persistence
* 10-stage progression
* reusable puzzle components
* answer validation framework
* institution-specific content support
* hint system
* Mission Archive
* Cosmo transmission component
* final recommendation experience
* developer/testing tools
* responsive UI
* polished visual system
* placeholder puzzle content
* Vercel-ready application

DO NOT build:

* authentication
* user accounts
* database
* backend
* analytics
* leaderboard
* chat between participants
* team assignment
* AI API integration
* administrator dashboard
* real-time collaboration

Keep V1 focused.

---

# 22. Architecture Before Implementation

Before writing the full application, briefly propose the architecture you intend to use.

Explain:

1. Component structure
2. Route/page structure
3. Puzzle configuration structure
4. Game-state management
5. localStorage strategy
6. Answer validation architecture
7. Institution-specific puzzle variants
8. How static evidence/assets will be organized
9. Developer mode
10. Any libraries you recommend adding and why

Favor simplicity.

If something can be accomplished cleanly with React, TypeScript, Tailwind, and browser APIs, don't add a dependency just because one exists.

Then implement the application.

---

# 23. Important Product Principle

This experience is **not a quiz about AI**.

Participants should learn by actually using AI in different ways.

The puzzles should eventually cause participants to experience AI as:

* conversational partner
* decoder
* researcher
* visual reasoning tool
* document analyst
* synthesizer
* critic
* coding assistant
* workflow orchestrator

And finally discover an important limitation:

**AI can help humans reason, but it cannot decide what humans should value.**

The technology should serve the educational mission rather than becoming the mission.

Build the application so that this progression can become the backbone of the final puzzle content.

---

# Definition of Done

V1 is complete when I can:

1. Open the deployed site on a new device.
2. Enter a name and CES institution.
3. Begin Step 1.
4. Submit an incorrect answer and receive useful feedback.
5. Reveal progressive hints.
6. Submit a correct answer and unlock Step 2.
7. Refresh the browser and retain my progress.
8. Continue sequentially through all 10 stages.
9. Receive institution-specific content where configured.
10. Review discoveries in the Mission Archive.
11. Complete Steps 1–9 using objective validation.
12. Submit an open-ended recommendation at Step 10.
13. See a satisfying final story state.
14. Return later on the same device and see the completed experience.
15. Use developer mode to rapidly test every stage and institution.
16. Edit puzzle/story content without modifying the core game engine.
17. Deploy successfully to Vercel with no backend or database.
