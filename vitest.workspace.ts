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
        provider: 'playwright',
        enabled: true,
        instances: [
          { browser: 'chromium' },
          { browser: 'firefox' },
          // { browser: 'webkit' }, // can't emulate a timezone
        ],
      },
    },
  },
]);
