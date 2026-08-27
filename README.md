# Growth

A content-first personal journal SPA: goals, milestones, and a markdown blog.
No backend — write files in git; the build indexes them.

**Live:** [https://stuart-minga.github.io/growth/](https://stuart-minga.github.io/growth/)

## Stack

- Vite + React 19 + TypeScript (strict)
- React Router (`BrowserRouter`, base `/growth/`)
- Tailwind CSS v4
- Markdown posts via `gray-matter` + `react-markdown`

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

`npm run build` also copies `dist/index.html` → `dist/404.html` so client-side routes work on GitHub Pages.

## Adding a post

1. Create a file under `content/posts/` named `YYYY-MM-DD-slug.md` (e.g. `2026-09-02-week-one.md`).
2. Add YAML frontmatter, then the body:

```yaml
---
title: Week one
date: 2026-09-02
summary: First full week of writing.
tags: [journal]
draft: false
---

Your markdown here.
```

3. Commit and push to `main`. The slug is the filename without `.md` → `/blog/2026-09-02-week-one`.

Set `draft: true` to keep a post out of production builds. Edit goals and milestones in `content/goals.ts` and `content/milestones.ts`.

## Deploy (GitHub Pages)

Push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): `npm ci` → `npm run build` → deploy `dist` via GitHub Actions.

**One-time setup:** repo Settings → Pages → Source → **GitHub Actions**.

Site URL: `https://stuart-minga.github.io/growth/`

## Project layout

```
content/
  posts/                  # markdown + frontmatter
  goals.ts
  milestones.ts
src/
  App.tsx                 # router
  pages/                  # Home, BlogIndex, BlogPost
  components/layout/      # SiteHeader, SiteFooter, Page
  components/ui/          # Button, TextLink, Prose, Status, Timeline
  content/posts.ts        # glob + parse + sort
  styles/index.css        # Tailwind + design tokens
```
