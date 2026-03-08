# scaffold.fast

Reusable, production-ready boilerplate for projects using:

- Next.js App Router
- TypeScript (strict)
- Convex backend
- Clerk + Convex auth wiring
- Tailwind CSS with light/dark themes
- ESLint + Prettier + test tooling
- AI-agent shared instructions with symlinked adapters

## Quick Start

```bash
cp .env.example .env.local
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Core Scripts

- `yarn dev` - Start local development server
- `yarn build` - Build production app
- `yarn start` - Serve production build
- `yarn lint` - Run ESLint
- `yarn typecheck` - Run TypeScript checks
- `yarn test` - Run unit/integration tests
- `yarn test:e2e` - Run Playwright tests
- `yarn check:all` - Lint + typecheck + test

## Directory Layout

```text
src/
  app/         # routes, layouts, route handlers
  components/  # reusable UI primitives
  features/    # business modules by domain
  lib/         # integration and infrastructure helpers
  hooks/       # generic reusable hooks
  types/       # shared app types
  config/      # app configuration maps/constants
  utils/       # pure utility helpers
  styles/      # token and theme styles
  tests/       # unit/integration/e2e tests
convex/        # backend schema and server modules
docs/          # architecture, guides, onboarding, ADRs
agent/shared/  # single source of truth for AI instructions
```

## GitHub Workflow

### Branch naming

- `feat/<scope>`
- `fix/<scope>`
- `chore/<scope>`
- `docs/<scope>`

### Commit and PR conventions

- Follow the shared standard in `docs/guides/commit-and-pr-conventions.md`.
- Use Conventional Commit style for both commit messages and PR titles.
- Keep commit/PR summaries concise (15-72 characters).
- Link issue in PR body (`Closes #123`) when applicable.
- Ensure `yarn check:all` passes before opening PR.
- Local Husky hooks enforce commit message and pre-push checks automatically.

### gh CLI flow

```bash
gh repo create
git checkout -b feat/my-feature
gh pr create --fill
```

## Convex + Clerk Setup

1. Set env vars in `.env.local`.
2. Ensure Clerk app is configured with Convex JWT template named `convex`.
3. Run app with `yarn dev`.

## AI Agent Setup

- Canonical instructions live in `agent/shared/AGENTS.md`.
- Tool-specific adapters are symlinked under:
  - `.cursor`
  - `.codex`
  - `.claude`

Update shared docs once, and every agent picks up the same guidance automatically.
