import {
  ArrowRight,
  BookOpen,
  Boxes,
  Code2,
  FileCode,
  FolderTree,
  GitBranch,
  Layers,
  Lock,
  Package,
  Play,
  Shield,
  TestTube,
  Wrench,
  Zap,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ui/theme-toggle';

import packageJson from '../../package.json';

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'quick-start', label: 'Quick start', icon: Play },
  { id: 'architecture', label: 'Architecture', icon: FolderTree },
  { id: 'stack', label: 'Tech stack', icon: Layers },
  { id: 'features', label: 'Features', icon: Boxes },
  { id: 'components', label: 'UI Components', icon: Package },
  { id: 'conventions', label: 'Conventions', icon: FileCode },
  { id: 'new-project', label: 'New project', icon: Zap },
] as const;

const STACK_ITEMS = [
  { name: 'Next.js 16', description: 'App Router with React 19', badge: 'Frontend' },
  { name: 'React 19', description: 'Component UI foundation', badge: 'UI' },
  { name: 'Convex', description: 'Real-time backend with schema and auth', badge: 'Backend' },
  { name: 'Clerk', description: 'Identity and session management', badge: 'Auth' },
  { name: 'TypeScript 5.9', description: 'Strict mode with path aliases', badge: 'Types' },
  { name: 'Tailwind CSS v4', description: 'Utility-first with CSS variables', badge: 'Styling' },
  { name: 'shadcn/ui', description: 'Radix-based accessible components', badge: 'Components' },
  { name: 'Lucide', description: 'Icon library used across UI components', badge: 'Icons' },
  { name: 'clsx', description: 'Conditional class composition', badge: 'Utility' },
  { name: 'ESLint', description: 'Code quality and import sorting', badge: 'Linting' },
  { name: 'Prettier', description: 'Consistent formatting with Tailwind plugin', badge: 'Format' },
  {
    name: 'Husky',
    description: 'Git hooks for commit and push standardization',
    badge: 'Workflow',
  },
  { name: 'Vitest', description: 'Unit and integration test runner', badge: 'Testing' },
  { name: 'Playwright', description: 'End-to-end browser testing', badge: 'E2E' },
];

const FEATURES = [
  {
    icon: Lock,
    title: 'Auth-ready boundaries',
    description:
      'Clerk handles identity while Convex manages JWTs. Protected routes, server-side guards, and middleware are pre-wired.',
  },
  {
    icon: FolderTree,
    title: 'Structured frontend',
    description:
      'Feature-based modules in src/features, shared UI in src/components, hooks in src/hooks, and pure utilities in src/utils.',
  },
  {
    icon: Layers,
    title: 'Convex backend scaffold',
    description:
      'Schema, validators, error types, permissions, and placeholder functions for queries, mutations, actions, crons, and HTTP routes.',
  },
  {
    icon: TestTube,
    title: 'Full testing pipeline',
    description:
      'Vitest for unit/integration tests, Playwright for E2E, and Testing Library for React components. All pre-configured.',
  },
  {
    icon: Shield,
    title: 'Quality guardrails',
    description:
      'ESLint 9 flat config, Prettier with Tailwind plugin, Commitlint for conventional commits, and Husky hooks to standardize commit messages and PR checks.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD pipeline',
    description:
      'GitHub Actions for lint + typecheck + tests on every push. PR title validation and commit message enforcement.',
  },
  {
    icon: Wrench,
    title: 'AI agent tooling',
    description:
      'Shared AGENTS.md with rules, commands, and prompts. Symlinked adapters for Cursor, Codex, and Claude.',
  },
  {
    icon: Code2,
    title: 'Developer experience',
    description:
      'EditorConfig, VS Code settings, path aliases, auto-import sorting, and a clean monorepo-ready structure.',
  },
];

const DIRECTORY_TREE = `src/
├── app/              # Next.js routes and layouts
├── components/       # Shared UI (shadcn + custom)
│   ├── ui/           # shadcn/ui primitives
│   ├── feedback/     # Empty states, loading
│   └── layout/       # Page shells, wrappers
├── features/         # Feature modules (auth, ...)
├── hooks/            # Reusable React hooks
├── lib/              # Integration adapters
│   ├── convex/       # Convex client, server, auth
│   ├── env/          # Environment validation
│   └── logger/       # Logging utilities
├── config/           # App, routes, theme config
├── styles/           # Tokens, themes, utilities
├── types/            # Shared TypeScript types
├── utils/            # Pure utility functions
└── tests/            # Unit, integration, E2E`;

const CONVEX_TREE = `convex/
├── auth.config.ts    # Clerk provider setup
├── auth.ts           # requireAuth helper
├── schema.ts         # Users table definition
├── http.ts           # HTTP route names
├── crons.ts          # Cron job names
├── users/            # User queries, mutations
├── actions/          # Server action names
└── lib/              # Validators, errors, permissions`;

const CONVENTIONS = [
  {
    title: 'Commit messages',
    content:
      'Conventional Commits: feat, fix, refactor, perf, test, docs, build, ci, chore. Max 72 char header.',
  },
  {
    title: 'Branch naming',
    content: 'Pattern: type/short-description (e.g. feat/add-dashboard, fix/auth-redirect).',
  },
  {
    title: 'Import ordering',
    content:
      'Auto-sorted by eslint-plugin-simple-import-sort. External deps first, then @/ aliases, then relative.',
  },
  {
    title: 'Code style',
    content:
      'Prefer const arrow functions, early returns, explicit names. No nested ternaries. Semicolons, single quotes, trailing commas.',
  },
  {
    title: 'File placement',
    content:
      'Routes in src/app, features in src/features, shared UI in src/components, adapters in src/lib, backend in convex/.',
  },
  {
    title: 'PR workflow',
    content:
      'Title must follow conventional commit format. CI runs lint, typecheck, and tests. Squash merge recommended.',
  },
];

const QUICK_START_STEPS = [
  {
    step: '1',
    command: 'cp .env.example .env.local',
    description: 'Copy the environment template',
  },
  { step: '2', command: 'yarn install', description: 'Install all dependencies' },
  { step: '3', command: 'yarn dev', description: 'Start the development server' },
  { step: '4', command: 'yarn check:all', description: 'Verify lint, types, and tests pass' },
];

const APP_VERSION = `v${packageJson.version}`;

const CodeBlock = ({ children }: { children: string }) => {
  return (
    <div className="bg-muted/30 overflow-x-auto rounded-lg border border-emerald-500/20 p-4 dark:bg-black/40">
      <pre className="font-mono text-base leading-relaxed text-emerald-400">
        <code>{children}</code>
      </pre>
    </div>
  );
};

const SectionHeading = ({
  id,
  label,
  icon: Icon,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div id={id} className="flex scroll-mt-20 items-center gap-3 pt-8 pb-2">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
        <Icon className="size-4" />
      </div>
      <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">{label}</h2>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-background flex min-h-screen">
      <aside className="border-border/50 hidden w-64 shrink-0 border-r lg:block">
        <div className="sticky top-0 flex h-screen flex-col overflow-y-auto px-4 py-6">
          <div className="mb-6 flex flex-col items-end gap-2 px-2">
            <div className="mb-6">
              <ThemeToggle />
            </div>
            <span className="text-foreground font-mono text-2xl font-semibold tracking-tight">
              scaffold.fast
            </span>
            <Badge variant="outline" className="font-mono text-sm">
              {APP_VERSION}
            </Badge>
          </div>

          <Separator className="mb-4" />

          <p className="text-muted-foreground mb-3 px-2 font-mono text-base tracking-widest uppercase">
            Documentation
          </p>

          <nav className="flex flex-col gap-0.5">
            {NAV_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-2.5 rounded-md px-2 py-1.5 text-base transition-colors"
                  tabIndex={0}
                  aria-label={`Navigate to ${section.label}`}
                >
                  <Icon className="text-muted-foreground/60 size-4 transition-colors group-hover:text-emerald-400" />
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
          <section id="overview" className="scroll-mt-8">
            <div className="mb-2 flex items-center gap-3 font-mono text-base text-emerald-400">
              <span className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
                scaffold.fast
              </span>
            </div>

            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
              A production-ready boilerplate designed for long-term reuse. It combines a clean
              Next.js frontend architecture, Convex backend foundations, strong TypeScript defaults,
              and practical team workflows so new projects can ship faster without sacrificing
              maintainability.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {STACK_ITEMS.map((item) => (
                <Badge key={item.name} variant="outline" className="font-mono text-sm">
                  {item.name}
                </Badge>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          <SectionHeading id="quick-start" label="Quick start" icon={Play} />
          <p className="text-muted-foreground mb-4 text-base">
            Get running in under two minutes. Copy the env template, install, and go.
          </p>

          <div className="space-y-3">
            {QUICK_START_STEPS.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 font-mono text-base font-semibold text-emerald-400">
                  {item.step}
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground mb-1 text-base">{item.description}</p>
                  <div className="bg-muted/30 overflow-x-auto rounded-md border border-emerald-500/20 px-3 py-2 dark:bg-black/40">
                    <code className="font-mono text-base text-emerald-400">{item.command}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-border bg-muted/30 mt-6 rounded-lg border p-4">
            <p className="text-foreground mb-2 text-base font-semibold">Core scripts</p>
            <ul className="text-muted-foreground list-inside list-disc space-y-1 text-base">
              <li>
                <code className="font-mono text-base text-emerald-400">yarn dev</code>
              </li>
              <li>
                <code className="font-mono text-base text-emerald-400">yarn build</code>
              </li>
              <li>
                <code className="font-mono text-base text-emerald-400">yarn lint</code>
              </li>
              <li>
                <code className="font-mono text-base text-emerald-400">yarn typecheck</code>
              </li>
              <li>
                <code className="font-mono text-base text-emerald-400">yarn test</code>
              </li>
              <li>
                <code className="font-mono text-base text-emerald-400">yarn test:e2e</code>
              </li>
              <li>
                <code className="font-mono text-base text-emerald-400">yarn check:all</code>
              </li>
            </ul>
          </div>

          <Separator className="my-8" />

          <SectionHeading id="architecture" label="Architecture" icon={FolderTree} />
          <p className="text-muted-foreground mb-4 text-base">
            The project follows a feature-based layout. Routes live in the App Router, business
            logic in feature modules, shared UI in components, and all backend code stays in the
            Convex directory.
          </p>

          <div className="grid gap-4">
            <div>
              <p className="text-muted-foreground mb-2 font-mono text-base font-semibold tracking-widest uppercase">
                Frontend
              </p>
              <CodeBlock>{DIRECTORY_TREE}</CodeBlock>
            </div>
            <div>
              <p className="text-muted-foreground mb-2 font-mono text-base font-semibold tracking-widest uppercase">
                Backend
              </p>
              <CodeBlock>{CONVEX_TREE}</CodeBlock>
            </div>
          </div>

          <Separator className="my-8" />

          <SectionHeading id="stack" label="Tech stack" icon={Layers} />
          <p className="text-muted-foreground mb-4 text-base">
            Every dependency is chosen for production use. No experimental packages, no lock-in
            where avoidable.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {STACK_ITEMS.map((item) => (
              <Card key={item.name} size="sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-mono text-[18px] group-data-[size=sm]/card:text-[18px]">
                      {item.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-sm">
                      {item.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Separator className="my-8" />

          <SectionHeading id="features" label="Features" icon={Boxes} />
          <p className="text-muted-foreground mb-4 text-base">
            Everything you need to start building, without the boilerplate overhead.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} size="sm">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-[18px] group-data-[size=sm]/card:text-[18px]">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <Separator className="my-8" />

          <SectionHeading id="components" label="UI Components" icon={Package} />
          <p className="text-muted-foreground mb-4 text-base">
            shadcn/ui is pre-configured with the Radix Nova style, neutral base color, CSS
            variables, and Lucide icons. Add more components instantly with the CLI.
          </p>

          <div className="border-border bg-muted/30 rounded-lg border p-5">
            <p className="text-muted-foreground mb-3 font-mono text-base font-semibold tracking-widest uppercase">
              Installed components
            </p>
            <div className="flex flex-wrap gap-2">
              {['Button', 'Card', 'Badge', 'Separator'].map((name) => (
                <Badge key={name} variant="outline" className="font-mono text-sm">
                  {name}
                </Badge>
              ))}
            </div>

            <Separator className="my-4" />

            <p className="text-muted-foreground mb-2 text-base">Add a new component:</p>
            <div className="bg-muted/30 overflow-x-auto rounded-md border border-emerald-500/20 px-3 py-2 dark:bg-black/40">
              <code className="font-mono text-base text-emerald-400">
                yarn dlx shadcn@latest add dialog
              </code>
            </div>

            <Separator className="my-4" />

            <p className="text-muted-foreground mb-3 font-mono text-base font-semibold tracking-widest uppercase">
              Component preview
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" className="text-base">
                Primary
              </Button>
              <Button size="sm" variant="outline" className="text-base">
                Outline
              </Button>
              <Button size="sm" variant="secondary" className="text-base">
                Secondary
              </Button>
              <Button size="sm" variant="ghost" className="text-base">
                Ghost
              </Button>
              <Button size="sm" variant="destructive" className="text-base">
                Destructive
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Badge className="text-sm">Default</Badge>
              <Badge variant="secondary" className="text-sm">
                Secondary
              </Badge>
              <Badge variant="outline" className="text-sm">
                Outline
              </Badge>
              <Badge variant="destructive" className="text-sm">
                Destructive
              </Badge>
            </div>
          </div>

          <Separator className="my-8" />

          <SectionHeading id="conventions" label="Conventions" icon={FileCode} />
          <p className="text-muted-foreground mb-4 text-base">
            Enforced by tooling so every contributor follows the same patterns from day one.
          </p>

          <div className="space-y-3">
            {CONVENTIONS.map((convention) => (
              <div
                key={convention.title}
                className="border-border bg-muted/20 rounded-lg border p-4"
              >
                <p className="text-foreground mb-1 text-[18px] font-semibold">{convention.title}</p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {convention.content}
                </p>
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          <SectionHeading id="new-project" label="Use as a template" icon={Zap} />
          <p className="text-muted-foreground mb-4 text-base">
            scaffold.fast is designed to be cloned and customized. Follow these steps to start a new
            project from this boilerplate.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5">
              <ol className="space-y-4 text-base">
                <li className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-base font-bold text-emerald-400">
                    1
                  </span>
                  <div>
                    <p className="text-foreground font-semibold">Clone or use as GitHub template</p>
                    <p className="text-muted-foreground mt-1 text-base">
                      Click &quot;Use this template&quot; on GitHub, or clone and remove the
                      existing git history with{' '}
                      <code className="font-mono text-emerald-400">rm -rf .git && git init</code>.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-base font-bold text-emerald-400">
                    2
                  </span>
                  <div>
                    <p className="text-foreground font-semibold">Configure environment variables</p>
                    <p className="text-muted-foreground mt-1 text-base">
                      Copy <code className="font-mono text-emerald-400">.env.example</code> to{' '}
                      <code className="font-mono text-emerald-400">.env.local</code>. Set your Clerk
                      publishable/secret keys, Convex URL, and any other service credentials.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-base font-bold text-emerald-400">
                    3
                  </span>
                  <div>
                    <p className="text-foreground font-semibold">Set up Clerk + Convex JWT</p>
                    <p className="text-muted-foreground mt-1 text-base">
                      Create a JWT template named{' '}
                      <code className="font-mono text-emerald-400">convex</code> in your Clerk
                      dashboard. Convex auth is already wired to read from it.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-base font-bold text-emerald-400">
                    4
                  </span>
                  <div>
                    <p className="text-foreground font-semibold">
                      Install, verify, and start building
                    </p>
                    <p className="text-muted-foreground mt-1 text-base">
                      Run <code className="font-mono text-emerald-400">yarn install</code>,{' '}
                      <code className="font-mono text-emerald-400">yarn check:all</code>, then{' '}
                      <code className="font-mono text-emerald-400">yarn dev</code>. Delete this
                      landing page and start adding your features in{' '}
                      <code className="font-mono text-emerald-400">src/features/</code>.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="text-base" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  aria-label="Use this template on GitHub"
                >
                  Use this template
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
              <Button variant="outline" className="text-base" asChild>
                <a
                  href="https://docs.convex.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  aria-label="Read Convex documentation"
                >
                  Convex docs
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
              <Button variant="outline" className="text-base" asChild>
                <a
                  href="https://clerk.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  aria-label="Read Clerk documentation"
                >
                  Clerk docs
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <footer className="pb-10 text-center">
            <p className="text-muted-foreground font-mono text-base">
              scaffold.fast {APP_VERSION}
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
