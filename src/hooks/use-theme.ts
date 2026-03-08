'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      if (currentTheme === 'light') {
        return 'dark';
      }

      return 'light';
    });
  };

  return { theme, setTheme, toggleTheme };
};
