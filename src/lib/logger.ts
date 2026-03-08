type LogLevel = 'info' | 'warn' | 'error';

const logger = (level: LogLevel, message: string, meta?: unknown) => {
  const base = `[${level.toUpperCase()}] ${message}`;

  if (meta === undefined) {
    console[level](base);
    return;
  }

  console[level](base, meta);
};

export const logInfo = (message: string, meta?: unknown) => logger('info', message, meta);
export const logWarn = (message: string, meta?: unknown) => logger('warn', message, meta);
export const logError = (message: string, meta?: unknown) => logger('error', message, meta);
