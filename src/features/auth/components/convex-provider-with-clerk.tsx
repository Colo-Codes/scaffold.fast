'use client';

import type { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk as ConvexProviderWithClerkBase } from 'convex/react-clerk';
import type { ReactNode } from 'react';

type ConvexProviderWithClerkProps = {
  children: ReactNode;
  client: ConvexReactClient;
  useAuth: Parameters<typeof ConvexProviderWithClerkBase>[0]['useAuth'];
};

export const ConvexProviderWithClerk = ({
  children,
  client,
  useAuth,
}: ConvexProviderWithClerkProps) => {
  return (
    <ConvexProviderWithClerkBase client={client} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerkBase>
  );
};
