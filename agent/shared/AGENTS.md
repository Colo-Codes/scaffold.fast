# Agent Operating Contract

This repository is optimized for AI-assisted development. All agents (Cursor, Codex, Claude)
must follow this single source of truth.

## Core Principles

1. Prefer clarity over cleverness.
2. Keep modules small and focused.
3. Follow existing directory placement rules before creating new folders.
4. Avoid broad refactors unless requested.
5. Run `yarn check:all` before finalizing significant changes.

## Placement Rules

- Route files live in `src/app`.
- Business logic lives in `src/features/<feature-name>`.
- Cross-feature primitives live in `src/components` or `src/lib`.
- Convex backend code stays in `convex` and must not import UI code.

## Pull Request Rules

- Branch names: `feat/*`, `fix/*`, `chore/*`, `docs/*`.
- Commit format: Conventional Commits.
- Include test notes in PR body.

## Safe Defaults

- Use strict TypeScript.
- Use early returns for readability.
- Keep imports at module top.
- Avoid nested ternary expressions.
