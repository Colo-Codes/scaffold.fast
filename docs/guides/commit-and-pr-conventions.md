# Commit and PR Conventions

Use this guide for every branch, commit, and pull request to keep history readable and predictable.

## Commit Message Standard

Format:

```text
<type>(<scope>): <summary>

[optional body]

[optional footer(s)]
```

Rules:

- Use present-tense imperative language (`add`, `fix`, `refactor`, not `added` or `fixes`).
- Keep `<summary>` concise: 15-72 characters.
- Start `<summary>` with a lowercase letter (except proper nouns/acronyms).
- Do not end `<summary>` with punctuation.
- Keep each commit focused on one logical change.
- Keep commit body lines at 255 characters or less.

Allowed `<type>` values:

- `feat`: new behavior or user-visible capability
- `fix`: bug fix or regression fix
- `refactor`: internal code changes with no behavior change
- `perf`: performance improvements
- `test`: add/update tests
- `docs`: documentation-only changes
- `build`: tooling/build system/dependency changes
- `ci`: CI/CD workflow changes
- `chore`: maintenance or housekeeping

`<scope>` recommendations:

- Keep it specific and stable (`auth`, `api`, `ui`, `convex`, `docs`, `deps`).
- Prefer one scope; use no scope if the change is truly cross-cutting.

Examples:

- `feat(auth): add role check for protected routes`
- `fix(ui): prevent theme flicker on first paint`
- `docs(readme): document local environment setup`

## Pull Request Standard

### PR title

PR titles must use the same format as commit messages:

```text
<type>(<scope>): <summary>
```

### PR description

Every PR should include:

- **Why**: problem and motivation
- **What Changed**: high-level behavior changes
- **Test Plan**: checks executed and evidence for UI changes
- **Issue Link**: `Closes #<id>` when applicable

Keep PRs small and reviewable:

- Target under ~400 changed lines where practical
- Avoid mixing refactors and feature work in one PR
- Split unrelated changes into separate PRs

## Squash Merge Convention

Use **Squash and merge** by default. The squash commit title must follow the same commit format:

```text
<type>(<scope>): <summary>
```

If needed, edit the generated squash description so it clearly explains user impact.

## Local Pre-Push Enforcement

Local hooks are managed with `husky` and run automatically after install.

- `commit-msg`: validates every commit message against `commitlint.config.cjs`
- `pre-push`: validates commit messages in the push range, runs `yarn check:all`, and validates the current branch PR title (when an open PR exists)

If hooks do not seem active, run:

```bash
yarn prepare
```
