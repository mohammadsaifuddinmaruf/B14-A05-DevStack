# Dev Stack

Dev Stack is a responsive React website for exploring modern development technologies and assembling a project-ready stack. Browse the library, compare each tool's category, difficulty, and rating, then save the best choices in your personal stack.

## Built with

- React 19 and TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- Local JSON technology data

## Features

1. Responsive sticky navigation with a mobile menu.
2. Technology cards loaded from JSON with loading and error states.
3. Interactive stack builder with duplicate protection, remove actions, and toast feedback.

## React questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses it to describe what the screen should look like in a clear, component-friendly way.

### 2. What is the difference between props and state?

Props are read-only values passed into a component by its parent. State is data owned by a component that can change and trigger a new render.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing values in a function component. This project uses it in `Main` for the loaded cards, loading/error status, and selected technology IDs; `Header` uses it for the mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after React renders. It loads the technology JSON once when `Main` mounts, then updates the cards and loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The key gives React a stable identity for each item. That helps React update only the list items that actually changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. The stack panel shows `Your stack is empty` when `selectedCards.length === 0`; otherwise it renders the selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data through props, such as `cards` and `selectedIds` to `Cards`. The parent can pass a callback prop like `onAdd`; the child calls it when a button is clicked, sending the selected card back through that callback.
