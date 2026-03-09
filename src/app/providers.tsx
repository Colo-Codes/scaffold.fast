'use client';

import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

import { ConvexProviderWithClerk } from '@/features/auth/components/convex-provider-with-clerk';
import { getConvexClient } from '@/lib/convex/client';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  const convex = getConvexClient();

  if (!convex) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
        <ClerkProvider>{children}</ClerkProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
      <ClerkProvider>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </ThemeProvider>
  );
};
