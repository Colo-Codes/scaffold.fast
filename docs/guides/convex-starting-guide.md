# Convex Starting Guide

## Core Concepts

- `schema.ts` defines tables and indexes.
- Queries read data, mutations write data, actions run external side effects.
- Validators (`convex/values`) protect runtime input integrity.

## Common Tasks

- Update schema in `convex/schema.ts`.
- Add domain validators in `convex/lib/validators.ts` or domain module.
- Add auth checks in `convex/auth.ts`.

## Pitfalls to Avoid

- Do not skip input validation.
- Do not mix frontend imports into Convex modules.
