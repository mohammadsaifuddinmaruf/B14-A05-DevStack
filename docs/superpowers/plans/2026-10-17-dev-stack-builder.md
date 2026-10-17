# Dev Stack Builder Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the responsive Dev Stack Builder page with local JSON loading, stack management, toast feedback, and project documentation.

**Architecture:** Keep `App` as the page composition root. `Main` owns fetched technologies and selected IDs, while focused child components receive typed props and callbacks. Keep stack mutations in a small pure helper so duplicate, remove, and clear behavior can be tested independently.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 4, Vite, React-Toastify, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-17-dev-stack-builder-design.md`

## Global Constraints

- Load technologies from `src/assets/cards.json`; do not hardcode the array in a component.
- Reuse one CSS variable for the orange → pink → violet gradient.
- Preserve responsive behavior for mobile, tablet, and desktop.
- Do not restore or overwrite unrelated deleted root assets.
- Run lint and production build after implementation.

---

### Task 1: Add testable stack state behavior

**Files:**
- Create: `src/scripts/stack.ts`
- Create: `src/scripts/stack.test.ts`
- Modify: `package.json`, `package-lock.json`

- [ ] Add Vitest and a test script.
- [ ] Write failing tests for adding a new technology, rejecting a duplicate, removing one ID, and clearing all IDs.
- [ ] Run the focused test and confirm it fails because the helper is missing.
- [ ] Implement typed pure helpers with no UI dependencies.
- [ ] Run the focused test and confirm it passes.

### Task 2: Build the page shell and shared visual theme

**Files:**
- Modify: `src/App.tsx`, `src/App.css`
- Modify: `src/components/Header.tsx`, `src/components/Banner.tsx`
- Create: `src/components/Footer.tsx`

- [ ] Define the shared brand gradient CSS variable and base page styles.
- [ ] Implement responsive header behavior and accessible navigation controls.
- [ ] Implement the hero with the existing illustration asset and shared gradient.
- [ ] Implement the footer content and responsive link groups.

### Task 3: Implement fetched technology cards and stack sidebar

**Files:**
- Modify: `src/components/Main.tsx`, `src/components/Cards.tsx`
- Create: `src/components/TechnologyCard.tsx`, `src/components/StackPanel.tsx`
- Modify: `src/scripts/card.ts`

- [ ] Load and validate the JSON data in `useEffect`, with loading and error states.
- [ ] Render cards in the required responsive grid with all metadata and add controls.
- [ ] Render the stack sidebar with empty, selected, remove, and remove-all states.
- [ ] Wire pure stack helpers into state updates and React-Toastify notifications.

### Task 4: Document and validate the completed experience

**Files:**
- Modify: `README.md`

- [ ] Add project overview, technology list, and three feature highlights.
- [ ] Add concise answers to all seven React questions.
- [ ] Run focused tests, lint, and production build.
- [ ] Review the final diff and confirm unrelated worktree changes remain untouched.
