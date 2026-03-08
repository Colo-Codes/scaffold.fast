# ADR-001: Repository Structure

## Status

Accepted

## Context

The boilerplate must be reused across many projects while remaining easy for humans and AI
agents to maintain.

## Decision

- Use a feature-first `src` layout.
- Keep Convex backend code in `convex`.
- Keep a single `agent/shared/AGENTS.md` and symlink tool-specific AGENTS files.

## Consequences

- Slightly more upfront structure.
- Lower long-term cognitive load and less instruction drift.
