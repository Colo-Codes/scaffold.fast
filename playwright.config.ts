import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests/e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'yarn dev',
    port: 3000,
    reuseExistingServer: true,
  },
});
