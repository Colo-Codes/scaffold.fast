const readClientEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required client env var: ${key}`);
  }

  return value;
};

export const clientEnv = {
  NEXT_PUBLIC_CONVEX_URL: readClientEnv('NEXT_PUBLIC_CONVEX_URL'),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: readClientEnv('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'),
};
