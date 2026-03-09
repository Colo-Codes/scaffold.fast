'use client';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/hooks/use-theme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDarkTheme}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="border-border bg-muted/70 focus-visible:border-ring focus-visible:ring-ring/50 relative inline-flex h-[34px] w-[68px] items-center rounded-full border transition-colors hover:cursor-pointer focus-visible:ring-2 focus-visible:outline-none"
    >
      <Sun
        className="text-muted-foreground pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2"
        aria-hidden="true"
      />
      <Moon
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2"
        aria-hidden="true"
      />
      <span
        className="bg-background border-border pointer-events-none absolute top-1/2 left-1 size-6 rounded-full border transition-transform duration-200"
        style={{ transform: isDarkTheme ? 'translate(34px, -50%)' : 'translate(0, -50%)' }}
        aria-hidden="true"
      />
    </button>
  );
};
