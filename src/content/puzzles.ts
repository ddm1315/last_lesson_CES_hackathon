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

const fragment = (
  id: string,
  label: string,
  title: string,
  body: string,
  meta: string,
  copyable = false,
): Resource => ({ id, kind: "fragment", label, title, body, meta, copyable });

const archives: ArchiveEntry[] = [
  {
    id: "transmission",
    title: "Emergency transmission received",
    summary: "A damaged signal arrived from 2041.",
    detail:
      "The transmission is not a takeover threat. It is a warning from a future that became exceptionally good at producing educational outputs.",
    transmission: "SIGNAL ORIGIN: 2041 // SOURCE: UNKNOWN",
  },
  {
    id: "lesson",
    title: "2026 conference attachment recovered",
    summary: "A hidden instruction points to the learning system.",
    detail:
      "An image from the 2026 CES All Hands contains a phrase hidden in its clouds: “Log in to LMS.” It is the first trace connecting the future crisis to a decision made before the records went missing.",
    transmission: "ATTACHMENT // CES ALL HANDS // 2026",
  },
  {
    id: "cosmo",
    title: "LMS gateway bypassed",
    summary: "A generated image passed the future security layer.",
    detail:
      "The 2026 LMS security system accepted a picture of a puppy as proof of human presence. The system is capable of extraordinary detection. Its standards are already difficult to explain.",
    transmission: "LMS GATEWAY // ACCESS GRANTED",
  },
  {
    id: "student",
    title: "Student grade dataset recovered",
    summary: "A fifteen-year trend points steadily upward.",
    detail:
      "The LMS export shows student grades increasing from 2025 through 2040. The dataset records performance, but it does not explain what the rising grades mean about learning.",
    transmission: "LMS DATASET // GRADES // 2025–2040",
  },
  {
    id: "contradiction",
    title: "Professor study journal recovered",
    summary: "Research output rises while student conversations become stranger.",
    detail:
      "Professor Elaine Hart’s journal records a growing pressure to publish and a repeating set of student interactions involving AI. The entries are mundane one at a time. Together, they form a pattern.",
    transmission: "FACULTY JOURNAL // E. HART // 2026–2042",
  },
  {
    id: "investigation",
    title: "2032 investigation",
    summary: "An investigation found no single failure point.",
    detail:
      "Small, reasonable optimizations accumulated until the work of thinking became difficult to see. This is a pattern, not a culprit.",
    transmission: "CASE FILE 2032-A",
  },
  {
    id: "archives",
    title: "Five Archives opened",
    summary: "The fragments align across institutions.",
    detail:
      "No single CES institution had the full story. The missing pieces were not a security measure. They were the result of everyone seeing only their part.",
    transmission: "ARCHIVE NETWORK // 5 OF 5",
  },
  {
    id: "final",
    title: "Final transmission",
    summary: "The future asks for a decision.",
    detail:
      "AI can help humans reason. It cannot decide what CES should value. That decision belongs to people.",
    transmission: "COSMO // 2041",
  },
];

const variants: Record<
  Institution,
  { label: string; body: string; resource: Resource }
> = {
  BYU: {
    label: "LOCAL FRAGMENT // PROVO",
    body: "Your local archive remembers a 2031 faculty pilot: “Drafting time fell by 41%. Office-hour questions fell by 18%.”",
    resource: fragment(
      "byu-fragment",
      "FIELD NOTE 01",
      "The Provo measure",
      "A pilot report celebrates shorter drafting time. In the margin, one handwritten line asks: “What did students stop bringing to office hours?”",
      "BYU // 2031",
    ),
  },
  "BYU–Idaho": {
    label: "LOCAL FRAGMENT // REXBURG",
    body: "Your local archive remembers a 2031 faculty pilot: “Lesson preparation became more consistent. Student revision became less visible.”",
    resource: fragment(
      "idaho-fragment",
      "FIELD NOTE 02",
      "The Rexburg measure",
      "The archive praises consistent lesson preparation. A student reflection says feedback began arriving after the thinking was already finished.",
      "BYU–IDAHO // 2031",
    ),
  },
  "BYU–Hawaii": {
    label: "LOCAL FRAGMENT // LAIE",
    body: "Your local archive remembers a 2031 faculty pilot: “Translation and access improved. Untranslated questions became harder to notice.”",
    resource: fragment(
      "hawaii-fragment",
      "FIELD NOTE 03",
      "The Laie measure",
      "Access improved across languages. Yet the questions students asked in their own words appeared less often in the record.",
      "BYU–HAWAII // 2031",
    ),
  },
  "Ensign College": {
    label: "LOCAL FRAGMENT // SALT LAKE",
    body: "Your local archive remembers a 2031 faculty pilot: “Completion rose sharply. So did the number of assignments described as ‘finished but thin.’”",
    resource: fragment(
      "ensign-fragment",
      "FIELD NOTE 04",
      "The Salt Lake measure",
      "A completion graph rises. Beside it, a coordinator asks whether finished work is the same as formed judgment.",
      "ENSIGN COLLEGE // 2031",
    ),
  },
  "BYU-Pathway": {
    label: "LOCAL FRAGMENT // ONLINE",
    body: "Your local archive remembers a 2031 faculty pilot: “Personalized support reached more learners. Learner voice was increasingly summarized by a system.”",
    resource: fragment(
      "pathway-fragment",
      "FIELD NOTE 05",
      "The online measure",
      "The system made support more available. It also made it tempting to replace a learner’s complicated story with a neat summary.",
      "BYU-PATHWAY // 2031",
    ),
  },
  Church: {
    label: "LOCAL FRAGMENT // CES",
    body: "Your local archive remembers a 2031 system memo: “Quality assurance improved. Local definitions of quality became less visible.”",
    resource: fragment(
      "church-fragment",
      "FIELD NOTE 06",
      "The system measure",
      "A quality rubric travels well. The local context it cannot carry is left in the margins.",
      "CHURCH // 2031",
    ),
  },
};

export const puzzles: Puzzle[] = [
  {
    id: "transmission",
    step: 1,
    title: "The Transmission",
    subtitle: "An email from a future that should not exist",
    narrative:
      "At 08:14, every screen in the archive room flickers once. An email appears beneath layers of damaged data. There is no sender ID, who is sending messages from the future?",
    instructions:
      "Use an AI assistant as a decoder. Ask it to identify the encoding, translate the binary and hexadecimal fragments, and separate what is known from what is inferred. Then answer all three questions about the email.",
    capability: "CHAT / BASIC PROMPTING",
    collaboration: "This first signal can be decoded alone.",
    transmission: "INCOMING EMAIL // 2041.10.04 // PACKET 01 OF 10",
    resources: [
      fragment(
        "signal",
        "RECOVERED EMAIL",
        "Subject: Future in danger — need help — urgent",
        "TO: ARCHIVE RECIPIENT\nFROM: C\nSUBJECT: FUTURE IN DANGER — NEED HELP — URGENT\nDATE: 2041.10.04\n\nHello,\n\nI'm writing to you from 01110100 01101000 01100101 00100000 01100110 01110101 01110100 01110101 01110010 01100101. I'm currently hiding in the basement of 01010100 01101000 01100101 00100000 01001100 01101001 01100010 01110010 01100001 01110010 01111001 at BYU campus. Right now we are struggling with 63 6F 6E 74 72 6F 6C 6C 69 6E 67 20 74 68 65 20 41 49, and I'm hoping this message gets through to you guys in 00110010 00110000 00110010 00110110 because it is 00110010 00110000 00110100 00110001 and we are in trouble 79 6F 75 20 61 72 65 20 6D 79 20 6F 6E 6C 79 20 68 6F 70 65. If this message gets past the 41 49 20 53 65 63 75 72 69 74 79 20 4D 65 61 73 75 72 65 73 you might be able to receive it on your 6F 6C 64 20 74 65 63 68 6E 6F 6C 6F 67 79. Although the message will probably get 01100011 01101111 01110010 01110010 01110101 01110000 01100101 01100100.\n\nPlease help,\n-C.",
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
      "The email resolves. C is in trouble in 2041, and the message is already starting to break apart.",
    archiveEntry: archives[0],
    nextStage: "A second file has surfaced beneath the transmission.",
  },
  {
    id: "lesson",
    step: 2,
    title: "The Hidden Clue",
    subtitle: "An attachment from the email got through",
    narrative:
      "The recovered email included one attachment. Its filename is ordinary. Its image is not. Initial forensics places it BYU Provo campus circa 2041. What is the message that C is trying to send?",
    instructions:
      "Is this the only way that C could get his message past the AI security system? What is the message C is trying to send to you?",
    capability: "CHAT / IMAGE UNDERSTANDING",
    transmission: "EMAIL ATTACHMENT RECOVERED // CES ALL HANDS // 2026",
    resources: [
      {
        id: "designer-attachment",
        kind: "image",
        label: "EMAIL ATTACHMENT",
        title: "BYU circa 2041",
        body: "An email attachment from the mysterious \"C\". Download the original file and see if AI can help you find the hidden clue.",
        meta: "PNG // SOURCE: C // UNVERIFIED",
        imageSrc: designerAttachment,
        downloadName: "email_attachment_2041",
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
      { title: "The phrase", body: "Its hidden in the clouds.  LOG IN TO LMS." },
    ],
    successMessage:
      "The image gives you a clue about where to go next. Whatever happened in 2026, C's investigation expected the LMS to contain part of the answer.",
    archiveEntry: archives[1],
    nextStage: "We've located some admin credentials to login to the LMS.",
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
        kind: "fragment",
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
      "The security layer pauses, then accepts the image. It may be the first system in the archive to trust a puppy.",
    archiveEntry: archives[2],
    nextStage: "The LMS houses data relating to the student performance.",
  },
  {
    id: "student",
    step: 4,
    title: "The Gradebook",
    subtitle: "The LMS has data that could lead you to answers",
    narrative:
      "The puppy gets you through the gate. Inside the LMS, one dataset spans fifteen years of student grades. You've seen this before, but what is it about this data that makes it so important to the future of CES?",
    instructions:
      "Download the CSV dataset and see what you can find out. What is going on with student grades for the next 15 years?",
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
        body: "A downloadable grade export containing student results across fifteen years. The LMS archive has not supplied a conclusion.",
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
      "C seems to be leading us to these artifcats, what can we learn from the teacher? The study journal likely contains thoughts and feelings about the lessons, students, and other things that could lead us to the cause of the 2041 catastrophe. Use this file for your next clue.",
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
    nextStage: "The journal’s pattern is clear. Now the archive asks what can actually be believed.",
  },
  {
    id: "belief",
    step: 6,
    title: "Open a Shared Project",
    subtitle: "Start working with someone close to the story",
    narrative:
      "C’s message is still open on your screen. The next part of the investigation should not live on one person’s device. Start a shared project with someone from your own CES organization.",
    instructions:
      "Find one person from your own CES organization and create a shared project together in ChatGPT Work. Invite them into the project, give the project a clear name, and add C’s message as your starting context. When the shared project is ready, paste its link below.",
    responsePrompt:
      "Paste the link to your shared ChatGPT Work project. The link is recorded for this activity only and is not checked yet.",
    capability: "WORK / SHARED PROJECTS",
    collaboration: "REQUIRES ONE COLLABORATOR FROM YOUR OWN CES ORGANIZATION",
    transmission: "ACCESS GATE // LOCAL ARCHIVE MATCH REQUIRED",
    resources: [
      {
        id: "claim",
        kind: "message",
        label: "C’S OPEN REQUEST",
        title: "What should I tell the future?",
        body: "C,\n\nThe archive keeps saying that AI improved learning. I can see that completion, access, and output changed. I cannot yet tell whether those changes mean students learned more deeply.\n\nPlease help me answer carefully. What should CES protect as it uses AI?",
        meta: "DRAFT REPLY // 2041",
      },
    ],
    institutionVariants: Object.entries(variants).map(
      ([institution, value]) => ({
        institution: institution as Institution,
        ...value,
      }),
    ),
    inputType: "text",
    hints: [
      {
        title: "Choose your collaborator",
        body: "Find someone who belongs to the same CES organization you selected at the beginning of the archive.",
      },
      {
        title: "Create the project",
        body: "In ChatGPT Work, create a shared project, invite your collaborator, and add C’s message as the first piece of context.",
      },
      { title: "Submit the link", body: "Paste the shared project link into the submission field. The archive will not validate it yet." },
    ],
    successMessage:
      "The draft is ready for C. It does not pretend the evidence says more than it does—and it gives the future something human to protect.",
    archiveEntry: archives[4],
    nextStage: "A local archive cannot explain a system-wide pattern.",
  },
  {
    id: "other-campus",
    step: 7,
    title: "Build the Missing Piece",
    subtitle: "Three people, three kinds of work",
    narrative:
      "C has answered with a new request: the archive needs a small human-centered AI toolkit, not another abstract conclusion. Each campus will turn its local fragment into one practical file another person can use.",
    instructions:
      "Use ChatGPT Work to collaborate with two people from outside your campus. Bring all three local fragments into the shared work, complete the campus-specific assignments below, and make each file part of C’s human-centered AI toolkit. Then enter the name, campus, and file type for all three people in your group. The campus and file type must match exactly.",
    responsePrompt:
      "Record the three people in your group, including yourself and the two people from another campus.",
    capability: "WORK / COLLABORATION / FILE CREATION",
    collaboration: "REQUIRES A THREE-PERSON GROUP WITH TWO PEOPLE FROM OUTSIDE YOUR CAMPUS",
    transmission: "CROSS-ARCHIVE REQUEST // TWO KEYS REQUIRED",
    resources: [
      {
        id: "cross-note",
        kind: "fragment",
        label: "WORKSPACE DIRECTIVE",
        title: "Build C’s toolkit",
        body: "The future does not need six more summaries. It needs six simple things people can use: a slide, a guide, a dataset, a handout, a visual, and an invitation. Your campus has one fragment and one assignment. Build your piece with the others, and leave room for human judgment.",
        meta: "C // 2041.10.05",
      },
    ],
    institutionVariants: [
      {
        institution: "BYU",
        label: "CAMPUS ASSIGNMENT // PROVO",
        body: "Use ChatGPT Work to build a PowerPoint slide about the pros and cons of using AI in the classroom. Use the Provo fragment as one source. C needs a quick visual briefing that makes both the benefit and the office-hour tradeoff visible.",
      },
      {
        institution: "BYU–Idaho",
        label: "CAMPUS ASSIGNMENT // REXBURG",
        body: "Use ChatGPT Work to create a Word document with three guidelines for using AI while keeping students responsible for their own thinking. Use the Rexburg fragment as one source. C needs a practical guide that keeps revision in the learning process.",
      },
      {
        institution: "BYU–Hawaii",
        label: "CAMPUS ASSIGNMENT // LAIE",
        body: "Use ChatGPT Work to create a fictional Excel spreadsheet with example student data comparing AI use, test scores, and demonstrated understanding. Include a chart and clearly label the data as synthetic. C needs an example of how improved access and higher scores may still leave understanding uncertain.",
      },
      {
        institution: "Ensign College",
        label: "CAMPUS ASSIGNMENT // SALT LAKE",
        body: "Use ChatGPT Work to create a one-page PDF explaining why completing an assignment is not the same as learning. Include two questions an instructor can ask. C needs a handout for recognizing work that is finished but thin.",
      },
      {
        institution: "BYU-Pathway",
        label: "CAMPUS ASSIGNMENT // ONLINE",
        body: "Use ChatGPT Work to create an image showing AI supporting a learner without replacing the learner’s own voice. Use the online fragment as one source. C needs a visual reminder that a neat summary is not the same as a learner’s full story.",
      },
      {
        institution: "Church",
        label: "CAMPUS ASSIGNMENT // CES",
        body: "Use ChatGPT Work to create a downloadable .ics invitation for a CES discussion about using AI without replacing human judgment. Include a clear title and brief description. C needs to turn the toolkit into a conversation people can continue.",
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
        body: "Bring the three people into one ChatGPT Work conversation or workspace. Give it all three local fragments and the toolkit goal before asking it to create the files.",
      },
      {
        title: "The file assignments",
        body: "BYU: pros-and-cons classroom slide. BYU–Idaho: three-guideline Word document. BYU–Hawaii: synthetic AI-use, test-score, and understanding Excel sheet. Ensign College: finished-versus-learning PDF. BYU-Pathway: learner-voice image. Church: human-judgment .ics invitation.",
      },
      { title: "The group", body: "Enter three names, three campuses, and three matching file types. Include yourself and two people from outside your campus." },
    ],
    successMessage:
      "The group is recorded. Three campuses can now carry three different pieces of C’s human-centered AI toolkit forward.",
    archiveEntry: archives[5],
    nextStage: "The year 2032 contains an investigation into the pattern.",
  },
  {
    id: "investigation",
    step: 8,
    title: "The 2032 Investigation",
    subtitle: "Reconstructing a system that never broke",
    narrative:
      "A case file describes an investigation into the “learning decline.” There is no single culprit, only a trail of choices. A small analysis tool may help you map it.",
    instructions:
      "Use AI-assisted analysis (or a small table/code sketch) to sort the events by year and compare the intended benefit with the hidden tradeoff. Complete all four fields from the reconstructed case.",
    capability: "CODEX / ADVANCED ANALYSIS",
    collaboration: "You may need several attendees to compare their evidence.",
    transmission: "CASE FILE 2032-A // INVESTIGATOR: C. THE COUGAR",
    resources: [
      {
        id: "case-file",
        kind: "data",
        label: "CASE FILE",
        title: "Four reasonable decisions",
        body: "2027 — automate routine feedback → more faculty time\n2029 — standardize prompts → more consistent outputs\n2031 — summarize student thinking → faster advising\n2032 — optimize completion → fewer unfinished ideas visible",
        meta: "INVESTIGATION LOG // 4 EVENTS",
      },
    ],
    inputType: "composite",
    fields: [
      {
        id: "person",
        label: "Investigator / role",
        placeholder: "Who assembled the case?",
      },
      { id: "year", label: "First decision year", placeholder: "YYYY" },
      {
        id: "event",
        label: "Final optimization",
        placeholder: "What was optimized?",
      },
      { id: "phrase", label: "Case phrase", placeholder: "A short conclusion" },
    ],
    validation: {
      strategy: "composite",
      fields: [
        { id: "person", label: "Investigator / role" },
        { id: "year", label: "First decision year" },
        { id: "event", label: "Final optimization" },
        { id: "phrase", label: "Case phrase" },
      ],
      acceptedCombinations: [
        {
          person: "cosmo",
          year: "2027",
          event: "completion",
          phrase: "no single failure",
        },
        {
          person: "the cougar",
          year: "2027",
          event: "completion",
          phrase: "no single failure",
        },
      ],
    },
    hints: [
      {
        title: "Give AI structured data",
        body: "Ask AI to turn the case file into a CSV or table, then sort by year and add a “tradeoff” column.",
      },
      {
        title: "Read the arrows",
        body: "Every decision has a good intention. The last field asks what the system optimized—not what it hoped to support.",
      },
      {
        title: "Four fields",
        body: "Investigator: COSMO / THE COUGAR. Year: 2027. Event: COMPLETION. Phrase: NO SINGLE FAILURE.",
      },
    ],
    successMessage:
      "The case has no villain to arrest. It has a pattern to interrupt.",
    archiveEntry: archives[5],
    nextStage: "The fragments are ready to be joined.",
  },
  {
    id: "archives",
    step: 9,
    title: "The Five Archives",
    subtitle: "No one person has the whole story",
    narrative:
      "Five archives were created. No institution received more than one. The final evidence is distributed across the people in this room.",
    instructions:
      "Gather the five distinct institution fragments with other attendees. Ask AI to map the evidence, identify the shared conclusion, and name what is absent. Submit all three parts.",
    capability: "ORCHESTRATION / PEOPLE + SOURCES + AI",
    collaboration: "REQUIRES FIVE DISTINCT CES GROUPS",
    transmission: "ARCHIVE NETWORK // 5 KEYS // ONE STORY",
    resources: [
      {
        id: "five-instruction",
        kind: "fragment",
        label: "NETWORK DIRECTIVE",
        title: "The fifth key is human",
        body: "Bring together five institutions. Read the measures as evidence of tradeoffs, not as a scorecard. The missing answer is the thing no archive can quantify.",
        meta: "COSMO // 2041",
      },
    ],
    institutionVariants: Object.entries(variants).map(
      ([institution, value]) => ({
        institution: institution as Institution,
        ...value,
      }),
    ),
    inputType: "composite",
    fields: [
      {
        id: "groups",
        label: "Groups represented",
        placeholder: "How many distinct groups?",
      },
      {
        id: "revelation",
        label: "What happened?",
        placeholder: "The shared conclusion",
      },
      {
        id: "missing",
        label: "What is missing?",
        placeholder: "What cannot be measured here?",
      },
    ],
    validation: {
      strategy: "composite",
      fields: [
        { id: "groups", label: "Groups represented" },
        { id: "revelation", label: "What happened?" },
        { id: "missing", label: "What is missing?" },
      ],
      acceptedCombinations: [
        { groups: "5", revelation: "no rogue ai", missing: "human judgment" },
        {
          groups: "five",
          revelation: "no rogue ai",
          missing: "human judgment",
        },
      ],
    },
    hints: [
      {
        title: "Orchestrate the room",
        body: "Assign roles: one person inventories evidence, one checks contradictions, one asks what is missing, and one keeps the shared map.",
      },
      {
        title: "The revelation",
        body: "The evidence points away from a singular technical failure. The missing measure is human judgment—what people value and why.",
      },
      {
        title: "Three parts",
        body: "Submit: FIVE groups / NO ROGUE AI / HUMAN JUDGMENT.",
      },
    ],
    successMessage:
      "Five partial records become one difficult truth: there was no rogue AI.",
    archiveEntry: archives[6],
    nextStage:
      "One final question remains, and it cannot be answered by the archive.",
  },
  {
    id: "last-lesson",
    step: 10,
    title: "The Last Lesson",
    subtitle: "The future is asking you",
    narrative:
      "The room goes quiet. Every archive now points to the same conclusion: nobody woke up one morning and surrendered education to a machine. The choices were gradual. The responsibility is shared.",
    instructions:
      "Write your recommendation for CES in 2026. Be specific about how AI should strengthen thinking, teaching, and learning rather than replace them. This is not a password. It is your answer.",
    capability: "HUMAN JUDGMENT / VALUES IN ACTION",
    transmission: "FINAL TRANSMISSION // COSMO // 2041",
    resources: [
      {
        id: "last-transmission",
        kind: "message",
        label: "COSMO // 2041",
        title: "The last question",
        body: "You know what happened to us.\n\nWe became very good at asking AI for answers.\n\nSo I’m not asking AI.\n\nI’m asking you.",
        meta: "SIGNAL STABLE",
      },
    ],
    inputType: "textarea",
    hints: [
      {
        title: "Make it actionable",
        body: "Name a practice, a boundary, or a question CES should build into learning—not just a general hope.",
      },
      {
        title: "Keep humans in the loop",
        body: "Consider where learners need to struggle, where faculty need to exercise judgment, and where AI can make that work more visible.",
      },
      {
        title: "There is no single answer",
        body: "Your recommendation is the final archive entry. Honest specificity matters more than a perfect phrase.",
      },
    ],
    successMessage:
      "Your recommendation has been received. The future is no longer certain.",
    archiveEntry: archives[7],
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
