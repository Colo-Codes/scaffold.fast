const readServerEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required server env var: ${key}`);
  }

  return value;
};

export const serverEnv = {
  CLERK_SECRET_KEY: readServerEnv('CLERK_SECRET_KEY'),
};
