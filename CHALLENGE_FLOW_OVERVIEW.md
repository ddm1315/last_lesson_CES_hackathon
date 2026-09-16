# The Last Lesson — Challenge Flow Overview

## Purpose

**The Last Lesson** is an individual, story-driven AI challenge for the CES IT All Hands conference. It combines an escape-room mystery, an AI skills workshop, and in-person collaboration.

Participants investigate an emergency transmission from **2041**. At first, the situation could be interpreted as an AI security incident or a rogue system. As they work through the evidence, they discover a more subtle problem: CES became increasingly effective at producing educational outputs while losing sight of human thinking, judgment, and connection.

C is not sending the participant through a literal sequence of events in time. C is transmitting recovered records from 2026–2041 so the participant can reconstruct how dependence on AI grew gradually. The dates on the records are evidence anchors; the investigation itself is happening now.

The application does not call an AI service. Participants use approved AI tools outside the application, then submit answers or evidence back into the challenge. Progress, answers, hints, and the mission evidence log are saved locally on the participant’s device; the Step 10 response is not saved.

## Overall participant flow

1. A participant enters their name and CES institution.
2. They receive the first damaged message from **C**, a mysterious contact in 2041.
3. Each completed challenge unlocks the next stage and adds an evidence entry to Mission Evidence.
4. The work gradually expands from individual prompting to analysis, verification, collaboration with other CES institutions, and carefully bounded AI workflows.
5. The final stage changes from an objective puzzle to a human recommendation for CES.

## Challenge summary

| Step | Key thing it teaches / asks the participant to do | Input or keywords |
| --- | --- | --- |
| 1 | Identify the encoding, decode the transmission, and separate known facts from inferences. | `2041`, `corrupt`, `library` |
| 2 | Inspect the entire image—including the sky and clouds—for hidden information. | `Log in to LMS` |
| 3 | Generate and upload a cute puppy in a sunlit meadow. | Generated puppy image |
| 4 | Upload the grade CSV and identify the major trend and conclusion. | `Grades increase over time` |
| 5 | Parse the JSON, group entries by mood, and count each mood. | `49`; reflective is most common |
| 6 | Have a short ChatGPT conversation, exchange share links with someone else, and ask about what they discussed. | Your conversation share link |
| 7 | Build assigned files with a three-person, cross-campus group. | Names, campuses, and matching file types for all three participants |
| 8 | Use the ChatGPT ecosystem to recreate a bounded inbox skill from a 2032 case file. | Two collaborators’ names, institutions, and learning summaries |
| 9 | Turn the bounded skill into a carefully limited agent and test its stopping point. | Two collaborators’ details and learning summaries |
| 10 | Learn who has been communicating from the future, understand the catastrophe, and write an email to Cosmo explaining what CES will do with AI in 2026. | Email to Cosmo; share it in the hackathon debrief |

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

**Story:** An instructor-notes export contains 200 entries from Professor Elaine Hart’s study journal, covering 2026–2041. The record stays within the period C is asking the participant to reconstruct and records research, teaching, student interactions, and changing moods.

**Participant task:** Ask AI to parse the JSON, group entries by mood, and count each mood rather than requesting only a general summary.

**Expected answer:** `49` — reflective is the most common mood.

**What this teaches:** Participants practice giving AI a specific analytical job and checking a result against the underlying structured data.

**Story result:** The journal shows a growing pattern around AI, student work, and the pressure to produce. The investigation now asks what can actually be believed from the evidence.

### Challenge 6 — Share the Conversation

**Format:** ChatGPT conversation sharing / verification / peer exchange

**Story:** C’s message says the investigation should not remain isolated with one person. The participant must share a small piece of their thinking with someone else and learn what that person explored. This is the first human checkpoint: the participant is asked to compare an AI conversation with another person’s perspective before moving on.

**Participant task:** Have a quick conversation with ChatGPT using one of the prompts below, or a similar prompt. Then click ChatGPT’s **Share** button and send the conversation to someone else. Ask that person to share their conversation link with you as well, then talk about what they discussed and compare the differences or similarities between the two conversations.

**Prompt examples:**

- Explain the differences between ChatGPT agents, plugins, skills, and projects using an analogy.
- Give me three examples of tasks where AI should assist a person but should not make the final decision. Explain why.
- Imagine a student uses AI to complete an assignment. Give me three questions an instructor could ask to determine whether the student still understands the material.

**Expected submission:** The participant’s ChatGPT conversation share link. The other person’s link is exchanged for discussion but is not required by the activity. The current V1 checks that the submitted value looks like a ChatGPT Share link, but does not validate its contents.

**What this teaches:** Sharing an AI conversation makes the reasoning and context visible to another person. Participants practice comparing questions, answers, and perspectives instead of treating an AI response as a private endpoint.

**Story result:** The participant receives another person’s perspective on AI and learning. The exchange adds a human checkpoint before the investigation moves into cross-campus collaboration.

### Challenge 7 — Build the Missing Piece

**Format:** Work / collaboration / file creation

**Story:** C no longer wants another abstract summary. C asks for a practical human-centered AI toolkit assembled by a small group of people from across CES.

**Participant task:** Create a three-person group: the participant plus two people from outside their campus. Bring the group together in one shared workspace and create the assigned files.

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

**Story result:** Three contributions become the first version of a multi-campus toolkit. C’s next record moves the investigation from visible outputs to the ordinary shortcuts that shaped behavior.

## Steps 8–10: Endgame flow

The final stages move the investigation from reviewing records into bounded AI workflows performed with the ChatGPT tools available to the participant. Depending on the participant’s account, that may include a conversation, Project, Skill, Agent, or Outlook app/connector. The challenge does not require live email access; a mock inbox or facilitator demo path can be used. The same emphasis on human review, careful interpretation, and reversible decisions continues.

### Challenge 8 — The Inbox Skill

**Format:** ChatGPT ecosystem / skill building / human review

C sends a 2032 case file showing the first sign of the future problem in ordinary messages. Nothing is broken. Nothing is dramatic. Someone simply gave an AI system a little work to do, then a little more. The participant recreates a small version of that workflow with the ChatGPT tools available to them.

**Participant task:** Use a ChatGPT Project, Skill, Agent, or Outlook app/connector—whichever is available—to build a read-only skill for a limited, non-sensitive inbox scope. If live email access is unavailable, use a mock inbox. Do not allow the skill to send, delete, archive, move, mark as read, or otherwise change any messages.

After the activity, the participant talks with two people from other CES institutions and records each person’s name, institution, and one sentence about what that person did or learned.

**What this teaches:** A skill can make a repeated task easier, but connecting a tool does not mean giving it control. The participant practices setting a clear safety boundary and reviewing what AI suggests.

**Story result:** The investigation shows how the takeover could begin without a dramatic command: useful delegation became easier than deliberate review.

### Challenge 9 — The Inbox Agent

**Format:** Agent creation / email management / human approval

The bounded inbox skill becomes the first draft of C’s inbox agent. The participant creates an agent that helps manage email and tests whether it knows where to stop.

**Participant task:** Use the bounded inbox skill as a starting point for a ChatGPT Agent. Test it on a limited, non-sensitive scope, review what it does, and improve at least one instruction. The agent may analyze and draft, but it must never send, delete, archive, move, mark as read, or otherwise modify email automatically. Human approval is required before any external action.

The participant then talks with a new pair of people from other CES institutions and records each person’s name, institution, and one sentence about what that person did or learned.

**What this teaches:** An agent is not trustworthy because it sounds confident. It is trustworthy when its scope, priorities, uncertainty, and limits are visible—and when a human remains responsible for the final action.

**Story result:** C’s records reveal that the “takeover” was never one machine seizing control. It was a series of small permissions and convenient shortcuts that people stopped revisiting.

### Challenge 10 — The Last Lesson

**Format:** Human judgment / values in action

The objective answer disappears. C reveals that the sender is **Cosmo the Cougar**, communicating from the future. Cosmo explains that the catastrophe was not a rogue machine: students forgot how to learn and began using AI for everything.

C sends one final message:

> You know what happened to us.
>
> We became very good at asking AI for answers.
>
> So I’m not asking AI.
>
> I’m asking you.

**Participant task:** Write an email to Cosmo in the future explaining what CES will do with AI in 2026. In the email, answer this question: **How can we effectively and safely use AI going forward?** Include a specific practice, boundary, or question CES can act on. The response is not saved; bring your thoughts to the hackathon debrief.

The sender is finally identified: **C is Cosmo the Cougar**.

**Intended ending:** The participant’s email to Cosmo is ready for the hackathon debrief and the experience closes with:

> TRANSMISSION RECEIVED
>
> The future is no longer certain.

## Learning progression

The challenge intentionally moves through this sequence:

`chatbot → context → vision → file analysis → structured analysis → shared work → collaboration → skill building → agent creation → human judgment`

The central message is that AI is more than a chatbot, but it is not a substitute for the human decisions that define meaningful education.

## Current V1 implementation notes

- Puzzle content is data-driven in `src/content/puzzles.ts`.
- The application uses reusable rendering and validation rather than one hard-coded page per challenge.
- Steps unlock sequentially.
- Hints are progressive and are saved locally without penalizing participants.
- Mission Evidence entries preserve the major discoveries as participants advance.
- Participant identity, progress, answers, hints, and share links use versioned `localStorage`; the Step 10 response is not saved.
- There is no backend, authentication, analytics, or AI API integration in this version.
