# Architecture

## Current State

Current MVP is a `static content site`.

There is **no backend service** in the current implementation.

## Current Stack

- framework: `Astro`
- hosting target: `Cloudflare Pages`
- content source: Markdown content collections
- output mode: static site build

## Current Architecture

```text
┌──────────────────────────────────────────────────────────────┐
│                       Content Authors                        │
│         Alex / models / Git-based collaboration             │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                    Repo: alexlifexyz-site                   │
│                                                              │
│  docs/                                                       │
│  ├─ PROJECT-BRIEF.md                                         │
│  ├─ MVP-SCOPE.md                                             │
│  ├─ ROADMAP.md                                               │
│  ├─ DECISIONS.md                                             │
│  ├─ SESSION-HANDOFF.md                                       │
│  └─ ...                                                      │
│                                                              │
│  src/content/                                                │
│  ├─ posts/*.md                                               │
│  └─ projects/*.md                                            │
│                                                              │
│  src/content.config.ts                                       │
│  └─ defines content schema                                   │
│                                                              │
│  src/layouts/                                                │
│  └─ BaseLayout.astro                                         │
│                                                              │
│  src/pages/                                                  │
│  ├─ index.astro                                              │
│  ├─ writing/*                                                │
│  ├─ projects/*                                               │
│  ├─ about.astro                                              │
│  ├─ resume.astro                                             │
│  └─ now.astro                                                │
│                                                              │
│  src/styles/global.css                                       │
└──────────────────────────────────────────────────────────────┘
                              │
                              │ build time
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                         Astro Build                          │
│                                                              │
│  - load markdown content                                     │
│  - validate frontmatter via content collections              │
│  - render pages to static HTML                               │
│  - generate sitemap                                           │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                            dist/                             │
│              static HTML / CSS / sitemap output              │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                     Cloudflare Pages                         │
│                 static hosting + custom domain               │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                           Browser                            │
│       read pages / browse posts / view resume / projects     │
└──────────────────────────────────────────────────────────────┘
```

## Layer Breakdown

### 1. Collaboration Layer

Files:

- `AGENTS.md`
- `README.md`
- `docs/DECISIONS.md`
- `docs/SESSION-HANDOFF.md`
- `docs/DEVELOPMENT-WORKFLOW.md`

Responsibility:

- keep multi-device and multi-session work consistent
- record decisions
- prevent context loss

### 2. Content Layer

Files:

- `src/content/posts/*.md`
- `src/content/projects/*.md`
- `src/content.config.ts`

Responsibility:

- store public-ready articles and project entries
- define content schema
- separate public content from internal content operations

### 3. Presentation Layer

Files:

- `src/layouts/*`
- `src/pages/*`
- `src/styles/global.css`

Responsibility:

- homepage
- article list and detail pages
- projects pages
- about / resume / now

### 4. Build Layer

Files:

- `package.json`
- `astro.config.mjs`

Responsibility:

- local development
- static site generation
- sitemap generation

### 5. Delivery Layer

Current target:

- `Cloudflare Pages`

Responsibility:

- host built static files
- bind custom domain
- optionally attach analytics later

## Is There A Backend Right Now?

No.

More precisely:

- there is no application server
- there is no database
- there is no API layer
- there is no auth system
- there is no CMS backend

Current site is a static front-end site generated at build time.

## So What Is Dynamic Right Now?

Only build-time dynamics:

- Markdown gets parsed at build time
- frontmatter gets validated at build time
- routes get generated at build time

At runtime in the browser, it is just static content delivery.

## If We Add Backend Later, Where Should It Go?

Recommended future path:

```text
Browser
   │
   ├─ static pages from Cloudflare Pages
   │
   └─ optional API calls
        │
        ▼
Cloudflare Functions / Workers
        │
        ├─ contact form handling
        ├─ lightweight lead capture
        ├─ newsletter / subscription bridge
        ├─ project demo API
        └─ simple auth-gated utilities
```

That means:

- keep the main site static
- add backend only when a real feature requires it
- prefer edge functions over a standalone server at first

## Recommended Evolution Path

### Stage 1

Static site only

- articles
- projects
- about
- resume

### Stage 2

Lightweight backend via Cloudflare Functions

- contact form
- reading analytics integration
- simple submission endpoints

### Stage 3

Optional data layer

- CMS or headless content source
- email capture storage
- project demo state

Only do this when content volume or product needs actually justify it.

## Why This Architecture Is Right For Now

- low complexity
- low cost
- easy to deploy
- easy to understand
- easy to continue on another machine
- keeps focus on identity, content, and iteration

## Main Risks Later

- if content grows fast, manual curation may become slow
- if interactive features grow, static-only architecture will feel limiting
- if project demos need persistence, you will need a real backend or managed service

## Current Recommendation

Keep it backend-free for now.

For this site, the highest-value next steps are still:

- better front-end design
- stronger homepage narrative
- cleaner article imports
- Cloudflare deployment

Backend should only enter after a real use case appears.
