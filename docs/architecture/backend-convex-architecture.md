# Convex Backend Architecture

## Structure

- `convex/schema.ts`: data model and indexes.
- `convex/users/*`: domain-specific validators and operation contracts.
- `convex/lib/*`: shared backend helpers.

## Conventions

- Keep validation close to domain modules.
- Keep auth checks centralized in `convex/auth.ts`.
- Keep permission checks explicit.
