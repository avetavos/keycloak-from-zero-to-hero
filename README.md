# Keycloak — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on **Keycloak** — the open-source identity & access management server (SSO, OIDC/OAuth2/SAML, user federation). It **gifts a Docker command** so you self-host Keycloak before the first lesson, then teaches realms, OIDC flows, securing apps, tokens, federation, and production with admin-console walkthroughs and copy-ready snippets.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Hands-on | **`<RunKeycloak>`** gifts a `docker run ... start-dev` to self-host Keycloak; **`<CopyCode>`** copies a snippet (curl/config/SDK) to the clipboard. There is **no in-browser runner** — Keycloak is a server app. |
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

> No code-runner build step. Self-host Keycloak via the gifted `docker run ... start-dev` and follow the admin-console steps / paste the snippets.

## Content Structure

```
src/content/docs/
  en/                                  # English — served at /en/...
    intro-setup/
    realms-clients-roles/
    users-groups-credentials/
    oidc-oauth2-flows/
    securing-apps/
    tokens-scopes-mappers/
    federation-social/
    admin-theming-production/
    index.mdx                          # EN landing (splash, with the gift block)
  th/                                  # Thai — served at /th/...
    (same module directories)
    index.mdx
```

### The 8 Modules

| Directory | Module |
| --------- | ------ |
| `intro-setup` | Intro & Setup (the gifted Docker `start-dev`) |
| `realms-clients-roles` | Realms, Clients & Roles |
| `users-groups-credentials` | Users, Groups & Credentials |
| `oidc-oauth2-flows` | OIDC & OAuth2 Flows |
| `securing-apps` | Securing Apps (SPA + backend) |
| `tokens-scopes-mappers` | Tokens, Scopes & Mappers |
| `federation-social` | Identity Federation & Social Login |
| `admin-theming-production` | Admin, Theming & Production |

### Lesson Template

frontmatter (`title`, `description`, `sidebar.order`) → imports → concept intro → prose (Keycloak admin-console steps as numbered lists; snippets in fenced blocks) → hoisted `export const ...Code` + `<CopyCode code={...} />` → `<Callout>` (key point / gotcha) → `<Quiz>` → `<ProgressTracker>` (last). The intro module and landing also use `<RunKeycloak />`. IDs follow `<module>/<slug>`. Quiz items use the `q` field with 0-based `answer`.

> **⚠️ Authoring notes:**
> - **`<RunKeycloak />`** = the gifted Docker `start-dev` box. **`<CopyCode code={…} />`** shows a snippet + a "Copy" button.
> - **In `export const` snippets, escape `${`→`\${`** (shell/JS template literals, e.g. `${TOKEN}`, `Bearer ${token}`); double-escape `\\n`; shell line-continuations as `\\`. Fenced blocks are literal.
> - **Never put a bare `{...}` or `${...}` in prose or headings** — keep JSON/JWT payloads, config objects, and JSX in backtick code spans or fenced blocks.
> - **Internal links must include the base path**, e.g. `/keycloak-from-zero-to-hero/en/realms-clients-roles/`.
> - Use **modern Keycloak** (the Quarkus distribution, `start-dev`, current OIDC endpoints under `/realms/<realm>` + SDK).

## Deployment

Fully static (`output: 'static'`) → `dist/`. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/keycloak-from-zero-to-hero'`.

Deployed to GitHub Pages via **branch-source** (`gh-pages`): build `dist/`, add `.nojekyll`, push `dist/` to the `gh-pages` branch, and set **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/`**. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
