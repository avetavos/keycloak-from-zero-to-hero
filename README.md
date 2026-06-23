# GrowthBook — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on **GrowthBook** — the open-source feature-flagging, A/B-testing, and analytics platform. It **gifts a Docker compose** so you self-host GrowthBook before the first lesson, then teaches feature flags, the SDKs, targeting, experiments, and metrics with copy-ready snippets. GrowthBook Cloud (app.growthbook.io) is the no-Docker alternative.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Hands-on | **`<RunGrowthBook>`** gifts a `docker-compose` (GrowthBook + MongoDB) to self-host; **`<CopyCode>`** copies an SDK/CLI snippet to the clipboard. There is **no in-browser runner** — GrowthBook is a server app. |
| Unit tests | [Vitest](https://vitest.dev) + `@testing-library/preact` |
| Styling | Starlight default + custom CSS (`src/styles/custom.css`) |
| i18n | Starlight built-in, `defaultLocale: 'en'`, locales: `en` + `th` |

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
npm test           # Run Vitest unit tests
```

> No code-runner build step. Self-host GrowthBook via the gifted `docker compose up -d` (or use GrowthBook Cloud) and paste the lesson snippets into your project.

## Content Structure

```
src/content/docs/
  en/                                  # English — served at /en/...
    intro-setup/
    feature-flags/
    sdk-integration/
    targeting-rollouts/
    ab-testing/
    metrics-data/
    advanced-production/
    index.mdx                          # EN landing (splash, with the gift block)
  th/                                  # Thai — served at /th/...
    (same module directories)
    index.mdx
```

### The 7 Modules

| Directory | Module |
| --------- | ------ |
| `intro-setup` | Intro & Setup (the gifted Docker compose) |
| `feature-flags` | Feature Flags |
| `sdk-integration` | SDK Integration (JS / React / Node) |
| `targeting-rollouts` | Targeting & Rollouts |
| `ab-testing` | A/B Testing & Experiments |
| `metrics-data` | Metrics & Data Sources |
| `advanced-production` | Advanced & Production |

### Lesson Template

frontmatter (`title`, `description`, `sidebar.order`) → imports → concept intro → prose (GrowthBook UI steps as numbered lists; SDK code in fenced blocks) → hoisted `export const ...Code` + `<CopyCode code={...} />` → `<Callout>` (key point / gotcha) → `<Quiz>` → `<ProgressTracker>` (last). The intro module and landing also use `<RunGrowthBook />`. IDs follow `<module>/<slug>`. Quiz items use the `q` field with 0-based `answer`.

> **⚠️ Authoring notes:**
> - **`<RunGrowthBook />`** = the gifted Docker compose box (self-host GrowthBook). **`<CopyCode code={…} />`** shows a snippet + a "Copy" button.
> - **In `export const` snippets, escape `${`→`\${`** (JS/TS template literals); double-escape `\\n`. Fenced blocks are literal.
> - **Never put a bare `{...}` or `${...}` in prose or headings** — keep JSX (`<GrowthBookProvider>`), hooks (`useFeatureIsOn('x')`), and JSON objects in backtick code spans or fenced blocks.
> - **Internal links must include the base path**, e.g. `/growthbook-from-zero-to-hero/en/feature-flags/`.
> - Use the **current GrowthBook** self-host compose + SDK API.

## Deployment

Fully static (`output: 'static'`) → `dist/`. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/growthbook-from-zero-to-hero'`.

Deployed to GitHub Pages via **branch-source** (`gh-pages`): build `dist/`, add `.nojekyll`, push `dist/` to the `gh-pages` branch, and set **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/`**. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
