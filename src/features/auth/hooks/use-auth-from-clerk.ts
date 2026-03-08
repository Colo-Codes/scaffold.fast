'use client';

import { useAuth } from '@clerk/nextjs';

type ClerkAuthState = {
  isLoaded: boolean;
  isSignedIn: boolean;
  getToken: (options?: { template?: string }) => Promise<string | null>;
};

export const useAuthFromClerk = (): ClerkAuthState => {
  const { isLoaded, isSignedIn, getToken } = useAuth();

  return {
    isLoaded,
    isSignedIn: Boolean(isSignedIn),
    getToken,
  };
};
