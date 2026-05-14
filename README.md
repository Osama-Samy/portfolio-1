# Portfolio — Osama Samy

Professional personal portfolio built with React and Vite.

Live demo

- https://Osama-Samy.github.io/portfolio-1/

Overview

- This repository contains a personal portfolio website showcasing projects, skills, and contact information.
- Built with React, Vite and Tailwind CSS, with FontAwesome icons.

Key features

- Multi-section static portfolio with project showcase.
- Client-side routing using `react-router` (`HashRouter` is used for GitHub Pages compatibility).
- Easy deployment via `gh-pages`.

Getting started (local)

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Build and deploy

1. Build for production:

```bash
npm run build
```

2. Deploy to GitHub Pages (uses `gh-pages`):

```bash
npm run deploy
```

Notes

- `vite.config.js` sets `base: "/portfolio-1/"` to match the repository path when deployed.
- `HashRouter` is used in `src/App.jsx` to avoid refresh/404 issues on GitHub Pages.

Tech stack

- React 19
- Vite
- Tailwind CSS
- react-router-dom
- gh-pages

Important files

- `src/` — application source code
- `src/App.jsx` — router and app layout
- `vite.config.js` — build config and `base` path

Contact

- Osama Samy — https://github.com/Osama-Samy

License

- MIT

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
