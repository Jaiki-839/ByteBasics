# ByteBasics — Computer Fundamentals

Interactive learning platform: textbook + dashboard + 3D lab + quiz engine,
built with Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion, and
React Three Fiber.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. No backend or auth required — progress is stored
in `localStorage`.

> This project was generated without internet access, so `npm install` has
> not been run or verified here. If you hit a dependency resolution issue,
> the most likely fix is bumping `react`/`@react-three/fiber` to matching
> majors — check the React Three Fiber docs for the React 19 compatibility
> table.

## What's fully built

- Full app shell: navbar, footer, dark/light mode (persisted), Ctrl/⌘+K
  command palette with fuzzy search across topics and terms.
- Homepage with a lightweight R3F hero scene (monitor, CPU tower, keyboard,
  mouse, floating particles) and an interactive click-through architecture
  diagram (Input → CPU → Memory → Output).
- Learning dashboard (`/learn`) with progress %, stats, streak, and a
  "Continue Learning" card, all backed by `localStorage`.
- Module roadmap (`/modules`) — all 10 modules with real titles/topic counts;
  modules without written content are marked "Soon."
- **Module 01 — Introduction to Computers — fully written**, all 6 topics,
  each with definition, explanation, key points, examples, terms, a
  "Remember This" box, a Quick Check, and prev/next navigation.
- Quiz engine (`/quiz`) — multi-question flow with instant feedback,
  explanations, scoring, and a polished results screen. Wired to Module 01.
- Quick Notes (`/notes`) — condensed revision cards with copy + "mark
  reviewed."
- 3D Computer Lab (`/lab`) — clickable stylized tower (CPU, RAM, motherboard,
  GPU, SSD, PSU) with an info panel per component.
- Loading, 404, and "topic not found" states.
- Two subtle easter eggs: a console message, and a Konami-code toast.

## What's stubbed (by design, for this first pass)

Modules 02–10 exist in `data/modules.ts` with their real curriculum topic
titles and descriptions, but have **no written `Topic` content yet** — their
roadmap cards show "Soon" and they're excluded from quiz/notes until content
is added.

## Extending to the next module

1. Copy `data/topics/module-01.ts` → `data/topics/module-02.ts`, and write
   `Topic` objects for each topic (see `lib/types.ts` for the shape).
2. In `data/topics/index.ts`, import the new array and spread it into
   `allTopics`.
3. In `data/modules.ts`, fill in that module's `availableSlugs` with the new
   slugs, in order.

That's it — the topic page, quiz, notes, search, and roadmap all read from
this data layer, so nothing else needs to change.

## Project structure

```
app/            routes (App Router)
components/     layout, learning, diagrams, 3d, quiz, topic, ui
data/           modules.ts + topics/ (the actual curriculum content)
lib/            types, progress (localStorage), search
```

## Design tokens

Deep navy/electric-blue academic-tech identity. Palette, type scale, and
motion rules live in `tailwind.config.ts` and `app/globals.css`
(`--bg`, `--surface`, `--ink`, `--accent`, etc., swapped via the `.dark`
class). Display face: Space Grotesk. Body: Inter. Mono (binary/hex/data
labels only): JetBrains Mono.
