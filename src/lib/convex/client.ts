import { ConvexReactClient } from 'convex/react';

let convexClient: ConvexReactClient | null = null;

export const getConvexClient = (): ConvexReactClient | null => {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!convexUrl) {
    return null;
  }

  if (convexClient) {
    return convexClient;
  }

  convexClient = new ConvexReactClient(convexUrl);
  return convexClient;
};
