# Growth

A content-first personal journal SPA: goals, milestones, and a markdown blog.
No backend — write files in git; the build indexes them.

**Live:** [https://stuart-minga.github.io/growth/](https://stuart-minga.github.io/growth/)

## Stack

- Vite + React 19 + TypeScript (strict)
- React Router (`BrowserRouter`, base `/growth/`)
- Tailwind CSS v4

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (app is served under `/growth/`).

```bash
npm run build
npm run preview
```

## Project layout

```
src/
  App.tsx                 # router
  pages/                  # Home, BlogIndex, BlogPost
  components/layout/      # SiteHeader, SiteFooter, Page
  styles/index.css        # Tailwind + design tokens
```
