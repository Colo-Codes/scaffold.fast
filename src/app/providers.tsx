'use client';

import { ClerkProvider, useAuth } from '@clerk/nextjs';
import type { ReactNode } from 'react';

import { ConvexProviderWithClerk } from '@/features/auth/components/convex-provider-with-clerk';
import { getConvexClient } from '@/lib/convex/client';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  const convex = getConvexClient();

  if (!convex) {
    return <ClerkProvider>{children}</ClerkProvider>;
  }

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
