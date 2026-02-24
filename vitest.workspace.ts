import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: {
      include: ['**/node.*'],
      name: 'node',
      environment: 'node',
    },
  },
  {
    test: {
      include: ['**/browser.*'],
      name: 'browser',
      browser: {
        provider: 'webdriverio',
        enabled: true,
        instances: [
          { browser: 'chrome' },
          { browser: 'edge' },
          // { browser: 'firefox' }, // Intl API not supported yet
          // { browser: 'safari' }, // doesn't support headless mode
        ],
      },
    },
  },
]);
