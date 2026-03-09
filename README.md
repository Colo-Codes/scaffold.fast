# scaffold.fast

Reusable, production-ready boilerplate for projects using:

- Next.js App Router
- TypeScript (strict)
- Convex backend
- Clerk + Convex auth wiring
- Tailwind CSS with light/dark themes
- shadcn/ui component primitives
- Lucide React icons
- ESLint + Prettier + test tooling
- AI-agent shared instructions with symlinked adapters

## Quick Start

```bash
cp .env.example .env.local
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Start a New Project From This Template

Use this repository as a clean starting point for a new app.

1. Create a repository from this template:
   - GitHub UI: **Use this template**
   - or GitHub CLI: `gh repo create <new-repo-name> --template <owner>/scaffold.fast --private`
2. Clone your new repository and bootstrap locally:
   - `cp .env.example .env.local`
   - `yarn install`
   - `yarn dev`
3. Configure required environment variables in `.env.local`:
   - `NEXT_PUBLIC_CONVEX_URL`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Validate baseline quality before feature work:
   - `yarn check:all`
5. Keep project structure conventions:
   - Routes in `src/app`
   - Shared UI in `src/components`
   - Feature modules in `src/features`
   - Integration adapters in `src/lib`
   - Backend logic in `convex`
6. Customize starter content early:
   - Update `package.json` name/description
   - Replace starter app content in `src/app`
   - Update docs in `README.md` and `docs/`

This flow keeps all existing guardrails (TypeScript strict mode, linting, tests, Husky hooks, and CI) while giving you a clean repo history for the new project.

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
  components/  # shadcn/ui primitives and shared UI components
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

## UI Conventions (shadcn/ui)

- Base component primitives live in `src/components/ui`.
- Compose feature or route UIs from those primitives instead of ad-hoc one-off styles.
- Keep Tailwind tokens and theme behavior centralized in `src/styles`.
- Use `lucide-react` for shared iconography across pages and components.

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
