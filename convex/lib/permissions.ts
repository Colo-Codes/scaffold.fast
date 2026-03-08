export const hasMatchingUserAccess = (
  authenticatedClerkId: string,
  targetClerkId: string,
): boolean => {
  return authenticatedClerkId === targetClerkId;
};
