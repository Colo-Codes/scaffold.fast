import { auth } from '@clerk/nextjs/server';

export const requireAuthenticatedUser = async (): Promise<string> => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('User is not authenticated.');
  }

  return userId;
};
