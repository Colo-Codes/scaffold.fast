export const getConvexAuthToken = async (
  getToken: (options?: { template?: string }) => Promise<string | null>,
) => {
  return getToken({ template: 'convex' });
};
