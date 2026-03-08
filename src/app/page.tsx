import { ThemeToggle } from '@/components/ui/theme-toggle';

const projectHighlights = [
  'Next.js App Router + strict TypeScript baseline',
  'Convex backend structure with auth-ready boundaries',
  'Shared AI-agent operating docs with symlinked adapters',
  'Lint, format, test, and CI workflow conventions included',
];

const HomePage = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8 px-6 py-12">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            scaffold.fast boilerplate
          </h1>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground max-w-3xl text-base sm:text-lg">
          A production-ready starter designed for long-term reuse. It combines a clean Next.js
          frontend architecture, Convex backend foundations, strong TypeScript defaults, and
          practical team workflows so new projects can ship faster without sacrificing
          maintainability.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2">
        {projectHighlights.map((highlight) => {
          return (
            <article key={highlight} className="border-border bg-muted/40 rounded-lg border p-4">
              <p className="text-foreground text-sm">{highlight}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
