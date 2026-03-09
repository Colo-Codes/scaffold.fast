# Next.js Starting Guide

## Core Concepts

- App Router uses folders as route segments.
- `layout.tsx` composes shared UI.
- `page.tsx` defines route entry UI.
- `route.ts` defines HTTP handlers.

## Common Tasks

- Add a route: create `src/app/<segment>/page.tsx`.
- Add API endpoint: create `src/app/api/<name>/route.ts`.
- Add shared component: create under `src/components`.
- Add or extend base UI primitives: use `src/components/ui` (shadcn/ui pattern).

## Pitfalls to Avoid

- Avoid putting business logic directly in route files.
- Avoid adding `'use client'` to entire trees unnecessarily.
