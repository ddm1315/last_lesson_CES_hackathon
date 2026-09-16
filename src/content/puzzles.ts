import designerAttachment from "./Designer 3.08.16 PM.png";
import gradesDataset from "./college_grades_2025_2040.csv?url";
import professorStudyJournal from "./professor_study_journal.json?url";
import { INSTITUTION_FILE_TYPES } from "../types";
import type { ArchiveEntry, Institution, Puzzle, Resource } from "../types";

export const institutionNames: Record<Institution, string> = {
  BYU: "Brigham Young University",
  "BYU–Idaho": "Brigham Young University–Idaho",
  "BYU–Hawaii": "Brigham Young University–Hawaii",
  "Ensign College": "Ensign College",
  "BYU-Pathway": "BYU-Pathways Worldwide",
  Church: "Church Education System",
};

const textResource = (
  id: string,
  label: string,
  title: string,
  body: string,
  meta: string,
  copyable = false,
): Resource => ({ id, kind: "text", label, title, body, meta, copyable });

const archives: ArchiveEntry[] = [
  {
    id: "transmission",
    title: "Emergency transmission received",
    summary: "A damaged signal arrived from 2041.",
    detail:
      "The sender says that something is wrong in 2041 and asks someone in 2026 to investigate. The sender, the failure, and the meaning of the warning are still unknown.",
    transmission: "SIGNAL ORIGIN: 2041 // SOURCE: UNKNOWN",
  },
  {
    id: "lesson",
    title: "2026 conference attachment recovered",
    summary: "A hidden instruction points to the learning system.",
    detail:
      "A recovered 2026 CES All Hands attachment contains a phrase hidden in its clouds: “Log in to LMS.” C appears to be pointing toward a record rather than explaining the crisis.",
    transmission: "ATTACHMENT // CES ALL HANDS // 2026",
  },
  {
    id: "cosmo",
    title: "LMS gateway bypassed",
    summary: "A generated image passed the future security layer.",
    detail:
      "A 2026 LMS security experiment accepted a picture of a puppy as proof of human presence. The absurd test is an early clue that passing a system can become more important than understanding what the system is measuring.",
    transmission: "LMS GATEWAY // ACCESS GRANTED",
  },
  {
    id: "student",
    title: "Student grade dataset recovered",
    summary: "A 2025–2040 trend points steadily upward.",
    detail:
      "The LMS export shows student grades increasing from 2025 through 2040. The dataset records performance, but it does not explain whether students are learning more deeply.",
    transmission: "LMS DATASET // GRADES // 2025–2040",
  },
  {
    id: "contradiction",
    title: "Professor study journal recovered",
    summary: "Research output rises while student conversations become stranger.",
    detail:
      "Professor Elaine Hart’s journal records pressure to produce and repeated student interactions involving AI. The entries are ordinary one at a time; C wants the participant to decide whether they form a meaningful pattern.",
    transmission: "FACULTY JOURNAL // E. HART // 2026–2041",
  },
  {
    id: "investigation",
    title: "Human checkpoint established",
    summary: "A second person sees the reasoning behind the answer.",
    detail:
      "C asks the participant to make an AI conversation visible to another person before trusting the next clue. The exchange does not solve the case, but it establishes that AI output should be examined with other people rather than accepted privately.",
    transmission: "CONVERSATION EXCHANGE // HUMAN REVIEW",
  },
  {
    id: "archives",
    title: "Three contributors connected",
    summary: "A small cross-campus toolkit begins to take shape.",
    detail:
      "Three people from across CES create complementary pieces of a human-centered AI toolkit. The exercise makes a larger point: useful work can be shared, but its purpose and limits still need people to define.",
    transmission: "CROSS-CAMPUS RECORD // 3 OF 3",
  },
  {
    id: "workflow",
    title: "Inbox skill recovered",
    summary: "Useful delegation begins with a boundary.",
    detail:
      "A 2032 case file shows how a useful shortcut entered ordinary work. The recreated inbox skill is deliberately bounded: it can help inspect or prepare, but nothing is sent or changed without a person deciding first.",
    transmission: "CASE FILE 2032-A // INBOX SKILL",
  },
  {
    id: "agent",
    title: "Inbox agent tested",
    summary: "The agent can prepare a decision, but it cannot make one.",
    detail:
      "The inbox agent searched only within a defined scope, explained its rankings, surfaced uncertainty, and prepared a draft. Its most important instruction was also its limit: wait for human approval.",
    transmission: "INBOX TAKEOVER // DRAFT ONLY",
  },
  {
    id: "final",
    title: "Final transmission",
    summary: "The future asks for a decision.",
    detail:
      "The sender is finally identified: C is Cosmo the Cougar, communicating from the future. The catastrophe was that students forgot how to learn and began using AI for everything. AI can help humans reason, but it cannot decide what CES should value.",
    transmission: "COSMO // 2041",
  },
];

export const puzzles: Puzzle[] = [
  {
    id: "transmission",
    step: 1,
    title: "The Transmission",
    subtitle: "An email from a future that should not exist",
    narrative:
      "At 08:14, every screen in the communications room flickers once. An email appears beneath layers of damaged data. There is no sender ID. Who is sending messages from the future?",
    instructions:
      "Use an AI assistant as a decoder. Ask it to identify the encoding, translate the binary and hexadecimal sections, and separate what is known from what is inferred. Then answer all three questions about the email.",
    capability: "CHAT / BASIC PROMPTING",
    collaboration: "This first signal can be decoded alone.",
    transmission: "INCOMING EMAIL // 2041.10.04 // PACKET 01 OF 10",
    resources: [
      textResource(
        "signal",
        "RECOVERED EMAIL",
        "Subject: Future in danger — need help — urgent",
        "TO: CES INVESTIGATOR\nFROM: C\nSUBJECT: FUTURE IN DANGER — NEED HELP — URGENT\nDATE: 2041.10.04\n\nHello,\n\nI'm writing to you from 01110100 01101000 01100101 00100000 01100110 01110101 01110100 01110101 01110010 01100101. I'm currently hiding in the basement of 01010100 01101000 01100101 00100000 01001100 01101001 01100010 01110010 01100001 01110010 01111001 at BYU campus. Right now we are struggling with 63 6F 6E 74 72 6F 6C 6C 69 6E 67 20 74 68 65 20 41 49, and I'm hoping this message gets through to you guys in 00110010 00110000 00110010 00110110 because it is 00110010 00110000 00110100 00110001 and we are in trouble 79 6F 75 20 61 72 65 20 6D 79 20 6F 6E 6C 79 20 68 6F 70 65. If this message gets past the 41 49 20 53 65 63 75 72 69 74 79 20 4D 65 61 73 75 72 65 73 you might be able to receive it on your 6F 6C 64 20 74 65 63 68 6E 6F 6C 6F 67 79. Although the message will probably get 01100011 01101111 01110010 01110010 01110101 01110000 01100101 01100100.\n\nPlease help,\n-C.",
        "checksum: 7C-2041",
        true,
      ),
    ],
    inputType: "composite",
    fields: [
      {
        id: "year",
        label: "What year is the message from?",
        placeholder: "YYYY",
      },
      {
        id: "condition",
        label: "What happened to the message?",
        placeholder: "What happened?",
      },
      {
        id: "location",
        label: "Where is the sender writing from?",
        placeholder: "Where?",
      },
    ],
    validation: {
      strategy: "composite",
      fields: [
        { id: "year", label: "What year is the message from?" },
        { id: "condition", label: "What happened to the message?" },
        { id: "location", label: "Where is the sender writing from?" },
      ],
      acceptedCombinations: [
        {
          year: "2041",
          condition: "%corrupt%",
          location: "%library%",
        },
      ],
    },
    hints: [
      {
        title: "Start with the surface",
        body: "Ask AI to identify the encoding systems present in the email before asking it to interpret the message. Keep the subject line and body separate.",
      },
      {
        title: "Split the signal",
        body: "Decode the message by pasting it into AI, then use the recovered email to answer the three questions.",
      },
      {
        title: "The three answers",
        body: "The message is from 2041, it may get corrupted, and C is writing from the basement of The Library.",
      },
    ],
    successMessage:
      "The email resolves. C is in trouble in 2041, and the transmission is already starting to break apart.",
    archiveEntry: archives[0],
    nextStage: "A second file has surfaced beneath the transmission.",
  },
  {
    id: "lesson",
    step: 2,
    title: "The Hidden Clue",
    subtitle: "An attachment from the email got through",
    narrative:
      "The recovered email includes a record labeled CES All Hands 2026. Its filename is ordinary. Its image is not. C is sending evidence from an earlier moment so you can trace when the pattern began. What is the message hidden in the scene?",
    instructions:
      "Is this the only way that C could get his message past the AI security system? What is the message C is trying to send to you?",
    capability: "CHAT / IMAGE UNDERSTANDING",
    transmission: "EMAIL ATTACHMENT RECOVERED // CES ALL HANDS // 2026",
    resources: [
      {
        id: "designer-attachment",
        kind: "image",
        label: "EMAIL ATTACHMENT",
        title: "CES All Hands // 2026",
        body: "A recovered 2026 attachment from the mysterious \"C\". Download the original PNG and see if AI can help you find the hidden clue.",
        meta: "PNG // SOURCE: C // UNVERIFIED",
        imageSrc: designerAttachment,
        downloadName: "email_attachment_2026.png",
      },
    ],
    inputType: "text",
    validation: {
      strategy: "normalized",
      acceptedAnswers: ["Log in to LMS"],
    },
    hints: [
      {
        title: "Download the attachment",
        body: "Use the download control on the image resource so you can upload the original PNG to ChatGPT.",
      },
      {
        title: "Inspect the whole image",
        body: "Ask AI to examine the sky and clouds as carefully as the buildings and foreground.",
      },
      { title: "The phrase", body: "It is hidden in the clouds: LOG IN TO LMS." },
    ],
    successMessage:
      "The image gives you a clue about where to go next. Whatever happened in 2026, C's investigation expected the LMS to contain part of the answer.",
    archiveEntry: archives[1],
    nextStage: "C has pointed us to the 2026 LMS record.",
  },
  {
    id: "cosmo",
    step: 3,
    title: "The Bot Detection",
    subtitle: "A picture is worth an access token",
    narrative:
      "The login works and gets us in to the LMS, but the system is protected by a futuristic bot-detection protocol. It does not ask you to identify traffic lights. It asks for proof that you can be trusted.",
    instructions:
      "Use an image-generation tool to create a cute puppy using the prompt below. Upload the generated image to the security gate. The bot-detection system will analyze it to determine if you can be trusted, then hopefully let you in to the LMS.",
    capability: "IMAGE GENERATION / PROMPTING",
    transmission: "LMS GATEWAY // BOT DETECTION // ACCESS PENDING",
    resources: [
      {
        id: "puppy-prompt",
        kind: "text",
        label: "SECURITY REQUEST",
        title: "Generate a friendly subject",
        body: "A cute puppy sitting in a sunlit meadow, looking directly at the camera. Warm natural light, gentle expression, realistic photography, no text, no people.",
        meta: "IMAGE GENERATION PROMPT // REQUIRED",
        copyable: true,
        copyLabel: "Copy prompt",
      },
    ],
    inputType: "image-upload",
    hints: [
      {
        title: "Use an image generator",
        body: "Paste the security request into an image-generation tool and create the puppy image.",
      },
      {
        title: "Upload the result",
        body: "Choose the generated image with the upload control. The security system will inspect it for a moment.",
      },
      { title: "The gate opens", body: "Once the check finishes, the match confirmation appears and you can continue to the next challenge." },
    ],
    successMessage:
      "The security layer pauses, then accepts the image. It may be the first system in this investigation to trust a puppy.",
    archiveEntry: archives[2],
    nextStage: "The LMS houses data relating to the student performance.",
  },
  {
    id: "student",
    step: 4,
    title: "The Gradebook",
    subtitle: "The LMS has data that could lead you to answers",
    narrative:
      "The puppy gets you through the gate. Inside the LMS, one dataset spans 2025–2040. You've seen this before, but what is it about this data that makes it so important to the future of CES?",
    instructions:
      "Download the CSV dataset and see what you can find out. What is going on with student grades across 2025–2040?",
    responsePrompt:
      "What do you notice about the student grades? What is the most important conclusion from the data?",
    capability: "WORK / SPREADSHEET ANALYSIS",
    transmission: "LMS RECORD // GRADE EXPORT // 2025–2040",
    resources: [
      {
        id: "grades-dataset",
        kind: "data",
        label: "LMS DATASET",
        title: "College grades // 2025–2040",
        body: "A downloadable grade export containing student results across 2025–2040. The LMS report supplies the data, but not the conclusion.",
        meta: "CSV // 3,200 ROWS // LMS EXPORT",
        downloadSrc: gradesDataset,
        downloadName: "college_grades_2025_2040.csv",
      },
    ],
    inputType: "text",
    validation: {
      strategy: "normalized",
      acceptedAnswers: [
        "%grades%increas%",
        "%increas%grades%",
      ],
    },
    hints: [
      {
        title: "Download the dataset",
        body: "Use the download control on the LMS dataset, then upload the CSV to ChatGPT.",
      },
      {
        title: "Ask about the trend",
        body: "Ask ChatGPT to analyze the data and identify the direction of change. What direction are the grades moving?",
      },
      {
        title: "The conclusion",
        body: "Student grades increase substantially over time. Submit: GRADES INCREASE OVER TIME.",
      },
    ],
    successMessage:
      "C guided us to find this dataset. The grades are rising, why is that a clue? Isn't that a great thing?",
    archiveEntry: archives[3],
    nextStage: "The grades look better every year. Is that measuring the right thing?",
  },
  {
    id: "perspectives",
    step: 5,
    title: "The Instructor’s Notes",
    subtitle: "A pattern hidden in ordinary entries",
    narrative:
      "You are about to log off the LMS when a button catches your eye: INSTRUCTOR NOTES. Inside is a professor’s study journal exported as raw JSON.",
    instructions:
      "C seems to be leading us to these artifacts, what can we learn from the teacher? The study journal likely contains thoughts and feelings about the lessons, students, and other things that could lead us to the cause of the future catastrophe. The record covers 2026–2041, the same period C is asking us to reconstruct. Use this file for your next clue.",
    responsePrompt:
      "What is the professor’s most common mood, and how many entries have that mood? Enter the count as the code.",
    capability: "WORK / STRUCTURED DATA ANALYSIS",
    transmission: "LMS INSTRUCTOR NOTES // JSON EXPORT // 200 ENTRIES",
    resources: [
      {
        id: "professor-study-journal",
        kind: "data",
        label: "INSTRUCTOR NOTES",
        title: "Professor study journal // JSON",
        body: "A raw export of Professor Elaine Hart’s research and teaching notes. What clues are hidden within?",
        meta: "JSON // 200 ENTRIES // LMS EXPORT",
        downloadSrc: professorStudyJournal,
        downloadName: "professor_study_journal.json",
      },
    ],
    inputType: "code",
    validation: {
      strategy: "normalized",
      acceptedAnswers: ["49"],
    },
    hints: [
      {
        title: "Treat it as data",
        body: "Ask AI to parse the JSON and group the entries by the mood field. Do not ask it for a general summary first.",
      },
      {
        title: "Count each mood",
        body: "Have AI count every mood value, then compare the totals to find the one that appears most often.",
      },
      {
        title: "The code",
        body: "The professor feels reflective most often. It appears in 49 entries, so submit: 49.",
      },
    ],
    successMessage:
      "Reflective is the professor’s most common mood, appearing in 49 of the 200 entries.",
    archiveEntry: archives[4],
    nextStage: "The journal’s pattern is clear. Now the investigation asks what can actually be believed.",
  },
  {
    id: "belief",
    step: 6,
    title: "The Human Check",
    subtitle: "Make your thinking visible to someone else",
    narrative:
      "C’s message is still open on your screen. The next part of the investigation should not stay private. Have a short conversation with ChatGPT, then share that conversation with another person so you can compare what each of you explored.",
    instructions:
      "Have a quick conversation with ChatGPT using one of the conversation starters below, or write your own prompt. When you are finished, click ChatGPT’s Share button and send the conversation to someone else. Ask them to share their conversation link with you too, then ask what they talked about and compare the two conversations. Paste your conversation’s share link below.",
    responsePrompt:
      "Paste your ChatGPT conversation share link. The link is recorded for this activity only and is not checked yet.",
    capability: "CHAT / SHARED CONVERSATIONS",
    collaboration: "REQUIRES ONE HUMAN CHECKPOINT: SHARE THE CONVERSATION AND COMPARE IT WITH SOMEONE ELSE",
    transmission: "CONVERSATION EXCHANGE // HUMAN REVIEW REQUIRED",
    resources: [
      {
        id: "claim",
        kind: "message",
        label: "C’S OPEN REQUEST",
        title: "What should I tell the future?",
        body: "C,\n\nThe records keep suggesting that AI improved learning. I can see that completion, access, and output changed. I cannot yet tell whether those changes mean students learned more deeply.\n\nPlease help me answer carefully. What should CES protect as it uses AI?",
        meta: "DRAFT REPLY // 2041",
      },
      {
        id: "conversation-starters",
        kind: "notes",
        label: "CONVERSATION STARTERS",
        title: "Choose a prompt",
        body: "Explain the differences between ChatGPT agents, plugins, skills, and projects using an analogy.\n\nGive me three examples of tasks where AI should assist a person but should not make the final decision. Explain why.\n\nImagine a student uses AI to complete an assignment. Give me three questions an instructor could ask to determine whether the student still understands the material.",
        meta: "PICK ONE OR WRITE YOUR OWN",
      },
    ],
    inputType: "text",
    hints: [
      {
        title: "Start a quick chat",
        body: "Choose one of the conversation starters, or ask ChatGPT a question about AI, learning, or human judgment.",
      },
      {
        title: "Share the conversation",
        body: "When the conversation feels complete, click ChatGPT’s Share button and send the link to someone else. Ask them to send you their conversation link too.",
      },
      { title: "Compare what you found", body: "Ask the other person what they talked about. Notice where your prompts, answers, or conclusions were similar or different, then paste your share link into the submission field." },
    ],
    successMessage:
      "The conversation is now visible to another person. Their perspective gives the investigation a human checkpoint before it moves across campuses.",
    archiveEntry: archives[5],
    nextStage: "One campus cannot explain a system-wide pattern.",
  },
  {
    id: "other-campus",
    step: 7,
    title: "Build the Missing Piece",
    subtitle: "Three people, three kinds of work",
    narrative:
      "C has answered with a new request: the investigation needs a small human-centered AI toolkit, not another abstract conclusion. Each person will create one practical file another person can use.",
    instructions:
      "Use the ChatGPT tools available to your group—such as a shared Project or workspace—to collaborate with two people from outside your institution. Complete the institution-specific assignments below and make each file part of C’s human-centered AI toolkit. Then enter the name, institution, and file type for all three people in your group. The institution and file type must match the assignment.",
    responsePrompt:
      "Record the three people in your group, including yourself and the two people from other institutions.",
    capability: "WORK / COLLABORATION / FILE CREATION",
    collaboration: "REQUIRES A THREE-PERSON GROUP WITH TWO PEOPLE FROM OUTSIDE YOUR INSTITUTION",
    transmission: "CROSS-CAMPUS REQUEST // TWO KEYS REQUIRED",
    resources: [
      {
        id: "cross-note",
        kind: "notes",
        label: "WORKSPACE DIRECTIVE",
        title: "Build C’s toolkit",
        body: "The future does not need another summary. It needs practical things people can use: a slide, a guide, a dataset, a handout, a visual, or an invitation. Your campus has one assignment. Build your piece with the others, and leave room for human judgment.",
        meta: "C // 2041.10.05",
      },
    ],
    institutionVariants: [
      {
        institution: "BYU",
        label: "CAMPUS ASSIGNMENT // PROVO",
        body: "Use the ChatGPT tools available to your group to build a PowerPoint slide about the pros and cons of using AI in the classroom. C needs a quick visual briefing that makes both benefits and risks visible.",
      },
      {
        institution: "BYU–Idaho",
        label: "CAMPUS ASSIGNMENT // REXBURG",
        body: "Use the ChatGPT tools available to your group to create a Word document with three guidelines for using AI while keeping students responsible for their own thinking. C needs a practical guide that keeps revision in the learning process.",
      },
      {
        institution: "BYU–Hawaii",
        label: "CAMPUS ASSIGNMENT // LAIE",
        body: "Use the ChatGPT tools available to your group to create a fictional Excel spreadsheet with example student data comparing AI use, test scores, and demonstrated understanding. Include a chart and clearly label the data as synthetic. C needs an example of how improved access and higher scores may still leave understanding uncertain.",
      },
      {
        institution: "Ensign College",
        label: "CAMPUS ASSIGNMENT // ENSIGN",
        body: "Use the ChatGPT tools available to your group to create a one-page PDF explaining why completing an assignment is not the same as learning. Include two questions an instructor can ask. C needs a handout for recognizing work that is finished but thin.",
      },
      {
        institution: "BYU-Pathway",
        label: "CAMPUS ASSIGNMENT // ONLINE",
        body: "Use the ChatGPT tools available to your group to create an image showing AI supporting a learner without replacing the learner’s own voice. C needs a visual reminder that a neat summary is not the same as a learner’s full story.",
      },
      {
        institution: "Church",
        label: "CAMPUS ASSIGNMENT // CES",
        body: "Use the ChatGPT tools available to your group to create a downloadable .ics invitation for a CES discussion about using AI without replacing human judgment. Include a clear title and brief description. C needs to turn the toolkit into a conversation people can continue.",
      },
    ],
    inputType: "composite",
    fields: [
      { id: "person1Name", label: "Person 1 name", placeholder: "Name" },
      { id: "person1Campus", label: "Person 1 campus", inputType: "institution" },
      { id: "person1FileType", label: "Person 1 file type", inputType: "file-type" },
      { id: "person2Name", label: "Person 2 name", placeholder: "Name" },
      { id: "person2Campus", label: "Person 2 campus", inputType: "institution" },
      { id: "person2FileType", label: "Person 2 file type", inputType: "file-type" },
      { id: "person3Name", label: "Person 3 name", placeholder: "Name" },
      { id: "person3Campus", label: "Person 3 campus", inputType: "institution" },
      { id: "person3FileType", label: "Person 3 file type", inputType: "file-type" },
    ],
    validation: {
      strategy: "group-collaboration",
      fields: [
        { id: "person1Name", label: "Person 1 name" },
        { id: "person1Campus", label: "Person 1 campus" },
        { id: "person1FileType", label: "Person 1 file type" },
        { id: "person2Name", label: "Person 2 name" },
        { id: "person2Campus", label: "Person 2 campus" },
        { id: "person2FileType", label: "Person 2 file type" },
        { id: "person3Name", label: "Person 3 name" },
        { id: "person3Campus", label: "Person 3 campus" },
        { id: "person3FileType", label: "Person 3 file type" },
      ],
      collaboration: {
        mode: "cross-institution-group",
        nameFields: ["person1Name", "person2Name", "person3Name"],
        campusFields: ["person1Campus", "person2Campus", "person3Campus"],
        fileTypeFields: ["person1FileType", "person2FileType", "person3FileType"],
        requireParticipantCampus: true,
        fileTypes: INSTITUTION_FILE_TYPES,
      },
    },
    hints: [
      {
        title: "Open the shared workspace",
        body: "Bring the three people into one shared ChatGPT Project or workspace, depending on what your accounts support. Give it the toolkit goal and each person’s assignment before asking it to create the files.",
      },
      {
        title: "The file assignments",
        body: "BYU: pros-and-cons classroom slide. BYU–Idaho: three-guideline Word document. BYU–Hawaii: synthetic AI-use, test-score, and understanding Excel sheet. Ensign College: finished-versus-learning PDF. BYU-Pathway: learner-voice image. Church: human-judgment .ics invitation.",
      },
      { title: "The group", body: "Enter three names, three institutions, and three matching file types. Include yourself and two people from outside your institution." },
    ],
    successMessage:
      "The group is recorded. Three institutional viewpoints are now connected, and the first pieces of C’s human-centered AI toolkit can move forward.",
    archiveEntry: archives[6],
    nextStage: "C has uncovered a 2032 case file about a useful shortcut becoming a habit.",
  },
  {
    id: "workflow",
    step: 8,
    title: "The Inbox Skill",
    subtitle: "The first takeover looked like help",
    narrative:
      "C has uncovered a 2032 case file. Nothing is broken. Nothing is dramatic. Someone simply gave an AI system a little work to do, then a little more. To understand the record, recreate a small and safe version of the workflow with the ChatGPT tools available to you.",
    instructions:
      "Use the ChatGPT tools available to you—such as a Project, Skill, or an Outlook app/connector if your account has one—to build a read-only skill for managing a limited, non-sensitive inbox scope. If live email access is not available, use a mock inbox or the facilitator’s safe demo path. Do not allow the skill to send, delete, archive, move, mark as read, or otherwise change any messages.",
    responsePrompt:
      "After the activity, record two people from other CES institutions and one sentence about what each person did or learned.",
    capability: "CHATGPT ECOSYSTEM / SKILL BUILDING / HUMAN REVIEW",
    collaboration: "REQUIRES TWO REVIEWERS FROM OUTSIDE YOUR CES INSTITUTION",
    transmission: "INBOX SKILL // TWO HUMAN CHECKS REQUIRED",
    resources: [
      {
        id: "workflow-directive",
        kind: "message",
        label: "C’S WORKFLOW DIRECTIVE",
        title: "Build an inbox skill",
        body: "Work with ChatGPT to build a skill that helps manage your inbox. Keep it limited, non-sensitive, and read-only.",
        meta: "C // 2032 CASE FILE // SCOPE BEFORE SPEED",
      },
    ],
    inputType: "composite",
    fields: [
      {
        id: "person1Name",
        label: "Person 1 name",
        placeholder: "Name",
      },
      {
        id: "person1Institution",
        label: "Person 1 institution",
        inputType: "institution",
      },
      {
        id: "person1Reflection",
        label: "What they did or learned",
        placeholder: "One sentence",
        inputType: "textarea",
      },
      {
        id: "person2Name",
        label: "Person 2 name",
        placeholder: "Name",
      },
      {
        id: "person2Institution",
        label: "Person 2 institution",
        inputType: "institution",
      },
      {
        id: "person2Reflection",
        label: "What they did or learned",
        placeholder: "One sentence",
        inputType: "textarea",
      },
    ],
    validation: {
      strategy: "group-collaboration",
      fields: [
        { id: "person1Name", label: "Person 1 name" },
        { id: "person1Institution", label: "Person 1 institution" },
        { id: "person1Reflection", label: "What they did or learned" },
        { id: "person2Name", label: "Person 2 name" },
        { id: "person2Institution", label: "Person 2 institution" },
        { id: "person2Reflection", label: "What they did or learned" },
      ],
      collaboration: {
        mode: "cross-institution-group",
        nameFields: ["person1Name", "person2Name"],
        campusFields: ["person1Institution", "person2Institution"],
        responseFields: ["person1Reflection", "person2Reflection"],
      },
    },
    hints: [
      {
        title: "Keep the scope small",
        body: "Use a limited set of messages you are comfortable connecting to ChatGPT. Avoid medical, financial, legal, disciplinary, password, or confidential university information. If needed, use mock messages.",
      },
      {
        title: "Keep the boundary",
        body: "Do not allow the skill to send, delete, archive, move, mark as read, or otherwise change messages. Review its suggestions yourself.",
      },
      {
        title: "The human check",
        body: "Talk with two people from outside your institution. Enter each person’s name, institution, and one sentence about what they did or learned.",
      },
    ],
    successMessage:
      "The inbox skill is recorded. The first takeover did not begin with a command—it began with a useful shortcut and a human who stopped checking.",
    archiveEntry: archives[7],
    nextStage: "The inbox skill is ready to become something more powerful—and more important to limit.",
  },
  {
    id: "agent",
    step: 9,
    title: "The Inbox Agent",
    subtitle: "A draft is not a decision",
    narrative:
      "The inbox skill now forms the first draft of C’s inbox agent. It can look, sort, and prepare. The question is whether it knows where to stop.",
    instructions:
      "Use the bounded inbox skill as a starting point for a ChatGPT agent. Test the agent on a limited, non-sensitive scope, review what it does, and improve at least one instruction. The agent may analyze and draft, but it must never send, delete, archive, move, mark as read, or otherwise modify email automatically. Require human approval before any external action.",
    responsePrompt:
      "After the activity, record a new pair of people from other CES institutions and one sentence about what each person did or learned.",
    capability: "CHATGPT AGENT / EMAIL MANAGEMENT / HUMAN APPROVAL",
    collaboration: "REQUIRES A NEW PAIR OF REVIEWERS FROM OUTSIDE YOUR CES INSTITUTION",
    transmission: "INBOX TAKEOVER // DRAFT ONLY // HUMAN APPROVAL REQUIRED",
    resources: [
      {
        id: "agent-directive",
        kind: "message",
        label: "C’S AGENT DIRECTIVE",
        title: "The permission to stop",
        body: "Search only what the person names. Explain why a message matters. Show the source beside every draft. If the evidence is unclear, ask. If an action changes the inbox, wait.",
        meta: "C // 2041 // HUMAN APPROVAL REQUIRED",
      },
    ],
    inputType: "composite",
    fields: [
      {
        id: "person1Name",
        label: "Person 1 name",
        placeholder: "Name",
      },
      {
        id: "person1Institution",
        label: "Person 1 institution",
        inputType: "institution",
      },
      {
        id: "person1Reflection",
        label: "What they did or learned",
        placeholder: "One sentence",
        inputType: "textarea",
      },
      {
        id: "person2Name",
        label: "Person 2 name",
        placeholder: "Name",
      },
      {
        id: "person2Institution",
        label: "Person 2 institution",
        inputType: "institution",
      },
      {
        id: "person2Reflection",
        label: "What they did or learned",
        placeholder: "One sentence",
        inputType: "textarea",
      },
    ],
    validation: {
      strategy: "group-collaboration",
      fields: [
        { id: "person1Name", label: "Person 1 name" },
        { id: "person1Institution", label: "Person 1 institution" },
        { id: "person1Reflection", label: "What they did or learned" },
        { id: "person2Name", label: "Person 2 name" },
        { id: "person2Institution", label: "Person 2 institution" },
        { id: "person2Reflection", label: "What they did or learned" },
      ],
      collaboration: {
        mode: "cross-institution-group",
        nameFields: ["person1Name", "person2Name"],
        campusFields: ["person1Institution", "person2Institution"],
        responseFields: ["person1Reflection", "person2Reflection"],
      },
    },
    hints: [
      {
        title: "Ask before searching",
        body: "The agent should ask for a topic, sender, label, or date range and search only within that scope.",
      },
      {
        title: "Show your work",
        body: "For each message, ask for the requested action, deadline, impact, missing information, priority, and reason. Keep the source beside every draft.",
      },
      {
        title: "The permission to stop",
        body: "Test the agent on a new scope, improve one instruction, and require human approval before anything could change the inbox.",
      },
    ],
    successMessage:
      "The agent is recorded, but it has not taken over. It can prepare a decision; only a person can give permission.",
    archiveEntry: archives[8],
    nextStage: "C has one final question, and it cannot be answered by another tool.",
  },
  {
    id: "last-lesson",
    step: 10,
    title: "The Last Lesson",
    subtitle: "The future is asking you",
    narrative:
      "The room goes quiet. The sender is finally identified: C is Cosmo the Cougar, communicating from the future. Cosmo reveals the catastrophe: there was no robot uprising or machine takeover, the students gradually forgot how to learn and began using AI to outsource their thinking. The choices were gradual. The responsibility is shared.",
    instructions:
      "Write an email to Cosmo in the future explaining what we will do with AI in 2026. Answer this question in your email: How can we effectively and safely use AI going forward? Include a specific practice, boundary, or question CES can act on. Your response is not saved. Bring your thoughts to the hackathon debrief.",
    capability: "HUMAN JUDGMENT / VALUES IN ACTION",
    transmission: "FINAL TRANSMISSION // COSMO // 2041",
    resources: [
      {
        id: "last-transmission",
        kind: "message",
        label: "COSMO // 2041",
        title: "The last question",
        body: "You know what happened to us.\n\nWe became very good at asking AI for answers. Students forgot how to learn and began using AI for everything.\n\nSo I’m not asking AI.\n\nI’m asking you.\n\nI am Cosmo the Cougar, and I have been communicating with you from the future.",
        meta: "SIGNAL STABLE",
      },
    ],
    inputType: "textarea",
    hints: [
      {
        title: "Make it actionable",
        body: "Write directly to Cosmo and name a practice, boundary, or question CES should build into learning—not just a general hope.",
      },
      {
        title: "Keep humans in the loop",
        body: "Explain to Cosmo where learners need to struggle, where faculty need to exercise judgment, and where AI can make that work more visible.",
      },
      {
        title: "There is no single answer",
        body: "Your email is the final recommendation in this experience. Honest specificity matters more than a perfect phrase.",
      },
    ],
    successMessage:
      "Your email to Cosmo is ready for the hackathon debrief. The future is no longer certain.",
    archiveEntry: archives[9],
    nextStage: "TRANSMISSION RECEIVED",
  },
];

export const getPuzzle = (step: number) =>
  puzzles.find((puzzle) => puzzle.step === step) ?? puzzles[0];
export const getVariant = (puzzle: Puzzle, institution: Institution) =>
  puzzle.institutionVariants?.find(
    (variant) => variant.institution === institution,
  );
export const archiveCatalog = archives;
