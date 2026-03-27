# Development Workflow

## Goal

Keep development easy to resume across multiple computers and new model sessions.

## Before Starting Work

1. Read `AGENTS.md`
2. Read `docs/SESSION-HANDOFF.md`
3. Read `docs/DECISIONS.md`
4. Run `git status`
5. Run `npm install` if dependencies are missing

## During Work

- If you change scope, update `docs/MVP-SCOPE.md` or `docs/ROADMAP.md`
- If you make an architecture or product decision, update `docs/DECISIONS.md`
- If a task is only partially complete, record the exact next step in `docs/SESSION-HANDOFF.md`

## Before Ending A Session

1. Verify the app with `npm run build`
2. Update `docs/SESSION-HANDOFF.md`
3. Update `docs/DECISIONS.md` if needed
4. Commit with a message that reflects the actual milestone

## Content Rules

- Public site content must be curated
- Do not copy internal raw materials directly into the site
- Prefer smaller, stable batches of imported articles over bulk migration

## Branching Rules

For now:

- work directly on `main`
- keep commits small
- avoid large mixed commits

This can be revisited later if website work becomes parallel or team-based.

