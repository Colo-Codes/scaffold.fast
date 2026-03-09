import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        <div className="flex flex-wrap items-center gap-3">
          <Badge>shadcn/ui enabled</Badge>
          <Badge variant="secondary">Tailwind v4</Badge>
          <Button size="sm">Primary action</Button>
          <Button size="sm" variant="outline">
            Secondary action
          </Button>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-2">
        {projectHighlights.map((highlight) => {
          return (
            <Card key={highlight} className="bg-muted/40">
              <CardHeader>
                <CardTitle className="text-base">Project highlight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-sm">{highlight}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
