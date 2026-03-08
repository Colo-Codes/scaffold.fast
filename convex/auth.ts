type AuthContext = {
  auth: {
    getUserIdentity: () => Promise<{ subject: string } | null>;
  };
};

export const requireAuth = async (ctx: AuthContext): Promise<string> => {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) {
    throw new Error('Unauthorized');
  }

  return identity.subject;
};
