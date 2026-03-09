# System Overview

## Runtime Split

- `src`: Next.js App Router frontend.
- `convex`: Convex backend schema and server-side logic.
- UI primitives are implemented with shadcn/ui in `src/components/ui`.

## Data Flow

1. UI interactions trigger Convex queries/mutations through client adapters.
2. Convex validates data and applies business rules.
3. Typed payloads return to UI for rendering.

## Design Goals

- High readability
- Explicit boundaries
- Reusable architecture across projects
