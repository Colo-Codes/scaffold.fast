# Frontend Architecture

## Directory Strategy

- `src/app`: routes, layouts, route handlers.
- `src/features`: business domain modules.
- `src/components`: shared UI primitives.
- `src/lib`: infrastructure adapters (Convex, env, logging).

## Patterns

- Keep route modules thin.
- Prefer server components unless client interactivity is required.
- Use `'use client'` only where necessary.
