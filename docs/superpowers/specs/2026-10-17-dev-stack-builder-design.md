# Dev Stack Builder Design

## Goal

Turn the existing React starter into a polished, responsive Dev Stack Builder page where users can browse technologies and compose a personal stack.

## Architecture

`App` composes the sticky header, hero, technology builder, and footer. `Main` owns the fetched technology list and selected technology IDs, then passes explicit data and callbacks to presentational cards and the stack sidebar. Technology records remain in `src/assets/cards.json`; the page fetches that local file in an effect so loading and error states are represented.

The shared orange-to-pink-to-violet brand gradient is defined as a CSS custom property in `src/App.css`. Toast feedback is centralized through one `ToastContainer`, while duplicate protection remains in the stack state update so the UI cannot create duplicate entries.

## Behavior

- Desktop navigation shows brand, five links, and sign-in/sign-up actions.
- Small screens show a hamburger control, centered brand mark, and compact auth actions.
- The hero presents the two-tone heading, description, primary/secondary actions, and stack illustration.
- Technology cards render from fetched JSON in a responsive grid.
- Adding a technology updates the sidebar and disables that card.
- Duplicate adds, removes, and clearing all items produce React-Toastify notifications.
- Loading and fetch failure states are visible in the technology area.
- The footer contains brand/social content, grouped links, and legal links.

## Validation

Use the existing lint and production build scripts. Add focused tests for the pure stack update behavior (add, duplicate, remove, and clear) before implementing the UI integration.
