'use client';

import { useTheme } from '@/hooks/use-theme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border-border inline-flex items-center rounded-md border px-3 py-2 text-sm"
      aria-label="Toggle theme"
    >
      Theme: {theme}
    </button>
  );
};
