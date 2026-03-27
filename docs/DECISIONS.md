# Decisions

## 2026-03-27

### Decision 1

The website will live in a standalone repo, not inside the WeChat content workspace repo.

Reason:

- keeps content operations and site development separate
- reduces accidental exposure of internal assets
- makes deployment cleaner

### Decision 2

Local repo path:

- `/Users/mac/studio/20-content/wechat/code/alexlifexyz-site`

Reason:

- same workspace family as the existing content repo
- easy to discover on both machines
- keeps all WeChat / brand-related code under one parent directory

### Decision 3

The first implementation target is `Astro + Cloudflare Pages`.

Reason:

- best fit for content-first static site
- low operational cost
- easy custom-domain deployment
- future upgrade path still exists

### Decision 4

Public article source will be curated from published material, not from raw drafts.

Reason:

- avoids exposing internal workflow assets
- keeps the public site cleaner
- makes future automation safer

### Decision 5

Remote repository:

- `https://github.com/alexlifexyz/alexlifexyz-site`

Reason:

- standalone public repo is better for future deployment and multi-device continuation
