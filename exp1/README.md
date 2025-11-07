## Experiment 1: Setup React Project and Display "Hello React!" (CO1)

### Objective
Set up a new React project using Vite (or Create React App) and render a simple message on the browser.

### Concepts Used
- Project bootstrapping (Vite / CRA)
- Basic React component rendering

### Prerequisites
- Node.js LTS installed

### Steps
1. Create project (Vite):
   - `npm create vite@latest exp1 -- --template react`
   - `cd exp1 && npm install`
2. Start the dev server: `npm run dev`
3. In `src/App.jsx`, render the text: Hello React!

### How to Run
- `npm run dev`
- Open the shown local URL in your browser.

### Expected Output
- The page displays: Hello React!

### Files Touched
- `src/App.jsx`, `index.html`

### Learning Outcomes
- Understand how to bootstrap and run a React app.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
