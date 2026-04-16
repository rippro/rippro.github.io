# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Dev build (no static export)
npm run lint         # ESLint
npm run format       # Prettier (auto-fix)
```

Production static export (GitHub Pages):
```bash
BUILD_MODE=production npm run build   # outputs to /out
```

No test suite exists in this project.

## Architecture

Next.js 16 app router site for RiPPro (Ritsumeikan competitive programming club). Deployed as static export to GitHub Pages via `master` branch push.

**Routing:** `src/app/` — standard App Router pages. Event detail routes (`/event/[id]`) use `generateStaticParams` for static export.

**Content pipeline:** Event posts live in `data/events/*.mdx` as Markdown with gray-matter frontmatter (`id`, `title`, `date.begin`, `date.end`). `src/lib/eventMdx.ts` (server-only) reads these at build time via `fs`, parses with `marked`, and resolves relative image paths to `/static/contestData/{id}/`. PDF assets live in `public/static/contestData/{contestId}/`.

**Layout system:** All pages wrap content in `<Layout>` from `src/components/PageLayout.tsx`, which renders the shared header/nav, footer, and `<NextHead>` meta tags.

**Styling:** Tailwind CSS + MUI (`@mui/material`) + Emotion. Global styles in `src/app/globals.css` define heading typography (serif font stack), link colors, and `.event-*` CSS classes used in event pages. Components mix Tailwind classes and inline `CSSProperties` objects — no single dominant pattern.

**Members page:** `AtCoderGraph` fetches live AC counts from a Google Apps Script endpoint and renders with Highcharts.

## Key conventions

- `'use client'` on interactive/MUI components; server components used for data-fetching pages (event detail, event list)
- Event MDX frontmatter format:
  ```yaml
  ---
  id: rupc2024
  title: RUPC 2024
  date:
    begin: 2024/03/XX
    end: 2024/03/XX
  ---
  ```
- `BUILD_MODE=production` env var gates static export behavior in `next.config.js`; dev mode runs without `output: 'export'`
