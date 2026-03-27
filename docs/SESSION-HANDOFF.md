# Session Handoff

## Current Status

Project initialized.

Planning docs are in place.

Astro MVP skeleton is in place and verified with `npm run check` and `npm run build`.

GitHub repo is live:

- `https://github.com/alexlifexyz/alexlifexyz-site`

Deployment is live:

- `https://alexlifexyz-site.pages.dev/`

Target production domain:

- `https://alexai.top`

Deployment preparation is in place:

- `.node-version`
- `wrangler.jsonc`
- `docs/DEPLOYMENT.md`
- Cloudflare deploy scripts in `package.json`

First article batch is imported:

- `001` 老 Java 看堆栈
- `002` 被裁后去了国企外包
- `003` 不会思考的程序员更先失业
- `004` AI 三天做完 Demo 后的焦虑
- `005` 35 岁 Java 想做 AI 应用和一人公司

## Current Decisions In Effect

- standalone repo
- Astro MVP
- Cloudflare Pages deployment target
- content-first architecture

## Next Actions

1. connect `alexai.top`
2. set `SITE_URL=https://alexai.top`
3. refine homepage copy and resume detail blocks
4. merge or manually apply the Gemini visual redesign once it is stable
5. add the next batch of evergreen articles or project case studies

## Handoff Rules

When ending a session:

- update this file
- update `docs/DECISIONS.md` if a product or architecture decision changed
- update `docs/ROADMAP.md` if milestone timing or scope changed

When starting a new session on another machine:

- read `AGENTS.md`
- read this file
- check git status
- continue from `Next Actions`
