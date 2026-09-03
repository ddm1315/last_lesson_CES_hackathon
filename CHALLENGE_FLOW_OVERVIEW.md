# The Last Lesson — Challenge Flow Overview

## Purpose

**The Last Lesson** is an individual, story-driven AI challenge for the CES IT All Hands conference. It combines an escape-room mystery, an AI skills workshop, and in-person collaboration.

Participants investigate an emergency transmission from **2041**. At first, the situation could be interpreted as an AI security incident or a rogue system. As they work through the evidence, they discover a more subtle problem: CES became increasingly effective at producing educational outputs while losing sight of human thinking, judgment, and connection.

The application does not call an AI service. Participants use approved AI tools outside the application, then submit answers or evidence back into the challenge. Progress, answers, hints, and the mission archive are saved locally on the participant’s device.

## Overall participant flow

1. A participant enters their name and CES institution.
2. They receive the first damaged message from **C**, a mysterious contact in 2041.
3. Each completed challenge unlocks the next stage and adds an evidence entry to the Mission Archive.
4. The work gradually expands from individual prompting to analysis, verification, and collaboration with other CES institutions.
5. The final stage changes from an objective puzzle to a human recommendation for CES.

## Steps 1–7: Current flow

### Challenge 1 — The Transmission

**Format:** Chatbot / basic prompting

**Story:** An emergency email arrives from 2041. Parts of the message are encoded in binary and hexadecimal, making the transmission appear damaged and difficult to interpret.

**Participant task:** Ask an AI assistant to identify the encoding, decode the message, and separate what is directly known from what is inferred. Then answer three questions about the recovered email.

**Expected keywords:** `2041`, `corrupt`, `library`

**What this teaches:** AI can help decode and organize information, but the participant still needs to verify the interpretation and extract the relevant facts.

**Story result:** The sender is in trouble in 2041, is writing from the basement of the Library, and warns that the message may become corrupted.

### Challenge 2 — The Hidden Clue

**Format:** Image understanding / context

**Story:** The attachment from C appears to be an ordinary image connected to the 2026 CES All Hands. A hidden message is embedded in the scene.

**Participant task:** Download the original image and ask AI to inspect the entire image, including the sky and clouds, for hidden information.

**Expected answer:** `Log in to LMS`

**What this teaches:** Better results come from giving AI the right context and explicitly directing its attention to details that may otherwise be overlooked.

**Story result:** The LMS is identified as the next location in the investigation.

### Challenge 3 — The Bot Detection

**Format:** Image generation / prompting

**Story:** The LMS login is protected by a futuristic bot-detection system. Instead of a traditional CAPTCHA, it asks for an image that demonstrates the participant can be trusted.

**Participant task:** Use an image-generation tool to create a cute puppy in a sunlit meadow, then upload the generated image to the security gate.

**Expected result:** The generated puppy image passes the gate.

**What this teaches:** Participants experience image generation as an interactive capability and see how a prompt can produce a usable artifact.

**Story result:** The LMS accepts the image and reveals a student grade dataset.

### Challenge 4 — The Gradebook

**Format:** File analysis / spreadsheet work

**Story:** The LMS contains a fictional grade export covering 2025–2040. The grades appear to improve steadily, which initially seems like good news.

**Participant task:** Download the CSV, upload it to an AI tool, and ask for the major trend and the most important conclusion.

**Expected answer:** `Grades increase over time`

**What this teaches:** AI can analyze a larger structured file quickly, but a positive metric does not automatically explain whether meaningful learning improved.

**Story result:** The rising grades become the first major contradiction: performance is improving, but the evidence does not yet show what students are actually learning.

### Challenge 5 — The Instructor’s Notes

**Format:** Structured data analysis / synthesis

**Story:** An instructor-notes export contains 200 entries from Professor Elaine Hart’s study journal. The entries record research, teaching, student interactions, and changing moods.

**Participant task:** Ask AI to parse the JSON, group entries by mood, and count each mood rather than requesting only a general summary.

**Expected answer:** `49` — reflective is the most common mood.

**What this teaches:** Participants practice giving AI a specific analytical job and checking a result against the underlying structured data.

**Story result:** The journal shows a growing pattern around AI, student work, and the pressure to produce. The archive now asks what can actually be believed from the evidence.

### Challenge 6 — Open a Shared Project

**Format:** Work / verification / same-institution collaboration

**Story:** C’s message says the investigation should not remain on one person’s device. The participant’s own CES institution holds a local perspective that needs another person’s review.

**Participant task:** Find one collaborator from the same CES institution, create a shared ChatGPT Work project, invite the collaborator, add C’s message as context, and submit the project link.

**Expected submission:** A shared project link. The current V1 records the link for the activity but does not validate its contents.

**What this teaches:** AI work benefits from shared context and human review. Collaboration is introduced before the story requires cross-campus coordination.

**Story result:** The participant receives an institution-specific fragment, such as reduced office-hour questions, less visible student revision, or increasingly summarized learner voice.

### Challenge 7 — Build the Missing Piece

**Format:** Work / collaboration / file creation

**Story:** C no longer wants another abstract summary. C asks for a practical human-centered AI toolkit assembled from local evidence.

**Participant task:** Create a three-person group: the participant plus two people from outside their campus. Bring the group’s local fragments into one shared workspace and create the assigned files.

**Institution-specific assignments:**

| Institution | Artifact | Focus |
| --- | --- | --- |
| BYU | PowerPoint slide | Pros and cons of AI in the classroom |
| BYU–Idaho | Word document | Three guidelines that keep students responsible for their thinking |
| BYU–Hawaii | Excel sheet | Synthetic data comparing AI use, test scores, and demonstrated understanding |
| Ensign College | PDF | Why completing an assignment is not the same as learning |
| BYU-Pathway | Image | AI supporting a learner without replacing the learner’s voice |
| Church | Downloadable `.ics` invite | A CES discussion about AI and human judgment |

**Expected submission:** Names, campuses, and file types for all three participants. The campus and file type must match the assigned configuration.

**What this teaches:** AI can help create different kinds of work products, but the quality and purpose of those products depend on human judgment and collaboration.

**Story result:** The local fragments become a multi-campus toolkit. The next question is how several reasonable decisions accumulated into a system-wide pattern.

## Steps 8–10: Planned endgame outline

These stages are represented in the current V1 content as a working direction. Their wording, evidence, and facilitation details can be refined with the manager and conference team.

### Challenge 8 — The 2032 Investigation

**Format:** Codex / advanced analysis

Participants receive a short case file containing four decisions made between 2027 and 2032. Each decision has a reasonable intended benefit and a hidden tradeoff:

- Automate routine feedback → more faculty time
- Standardize prompts → more consistent outputs
- Summarize student thinking → faster advising
- Optimize completion → fewer unfinished ideas remain visible

Participants use AI-assisted analysis, a small table, or a code sketch to sort the events, compare benefits with tradeoffs, and reconstruct the investigation.

**Current answer structure:** Investigator/role, first decision year (`2027`), final optimization (`completion`), and the conclusion phrase `no single failure`.

**Intended insight:** There is no single villain or broken technology. A series of reasonable optimizations gradually made the work of thinking harder to see.

### Challenge 9 — The Five Archives

**Format:** Orchestration / people + sources + AI

The participant’s archive is incomplete. They must gather distinct institution fragments from other attendees and use AI to map the evidence, identify the shared conclusion, and name what the records cannot measure.

**Target response:** Five groups represented, `no rogue AI`, and `human judgment` as the missing measure.

**Intended insight:** The evidence points away from a rogue AI or singular technical failure. The missing element is human judgment: what educators and learners value, why it matters, and how to recognize it.

**Planning note:** The broader story refers to all six CES groups, while the current V1 challenge validates five distinct groups. This count should be confirmed during content refinement so the in-person instructions and the application use the same requirement.

### Challenge 10 — The Last Lesson

**Format:** Human judgment / values in action

The objective answer disappears. C sends one final message:

> You know what happened to us.
>
> We became very good at asking AI for answers.
>
> So I’m not asking AI.
>
> I’m asking you.

Participants write a specific recommendation for what CES should do in 2026 to ensure AI strengthens thinking, teaching, and learning rather than replacing them. The response should name a practice, boundary, or question that can be acted on; it is not graded against a password.

**Intended ending:** The recommendation is stored locally and the experience closes with:

> TRANSMISSION RECEIVED
>
> The future is no longer certain.

## Learning progression

The challenge intentionally moves through this sequence:

`chatbot → context → vision → file analysis → structured analysis → shared work → collaboration → advanced analysis → orchestration → human judgment`

The central message is that AI is more than a chatbot, but it is not a substitute for the human decisions that define meaningful education.

## Current V1 implementation notes

- Puzzle content is data-driven in `src/content/puzzles.ts`.
- The application uses reusable rendering and validation rather than one hard-coded page per challenge.
- Steps unlock sequentially.
- Hints are progressive and are saved locally without penalizing participants.
- Mission Archive entries preserve the major discoveries as participants advance.
- Participant identity, progress, answers, hints, and the final recommendation use versioned `localStorage`.
- There is no backend, authentication, analytics, or AI API integration in this version.

