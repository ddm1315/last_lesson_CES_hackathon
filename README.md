# The Last Lesson

The first V1 of the CES AI Challenge: a client-only, ten-stage investigation built with React, TypeScript, and Vite. Participant identity and progress live in versioned `localStorage`; there is no backend, authentication, analytics, or AI API integration.

## Run it

```bash
npm install
npm run dev
```

Build for Vercel or any static host with:

```bash
npm run build
```

## Content architecture

- `src/content/puzzles.ts` contains the typed stage configuration, narrative, resources, hints, institution variants, validation, and mission evidence entries.
- `STAGE_EVIDENCE_MAP.md` is the canonical story and evidence map for the participant flow.
- `src/types.ts` contains the content and state interfaces.
- `src/lib/storage.ts` is the only state persistence boundary. The current schema is versioned and malformed or unknown versions are discarded safely.
- `src/lib/validation.ts` contains normalized, lightweight hashed, and composite validators.
- `src/App.tsx` contains the reusable game shell and puzzle renderer rather than one page per stage.

Developer mode is available in local development at `/?dev=1`. It can jump stages from the left mission sidebar or dev panel, change the test institution, complete the investigation, inspect local state, and reset progress.
