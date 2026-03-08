# AI Agent Workflow

## Source of Truth

All agent instructions live under `agent/shared`.

## Symlink Adapters

- `.cursor/*` points to `agent/shared/*`.
- `.codex/*` points to `agent/shared/*`.
- `.claude/*` points to `agent/shared/*`.

## Working Rules

- Reuse existing conventions before adding new ones.
- Update shared docs once instead of duplicating content.
- Run `yarn check:all` before finalizing major changes.
