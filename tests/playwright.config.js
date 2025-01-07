import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    httpCredentials: {
      username: 'testuser',
      password: 'NasaIsCool!',
    },
  },
});