// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://c25e0f77069805e271e110773a67be7a@o4505001794404352.ingest.us.sentry.io/4507246358364160',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 0.5,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  ignoreErrors: [
    /**
     * React internal error thrown when something outside react modifies the DOM
     * This is usually because of a browser extension or Chrome's built-in translate
     * See: https://blog.sentry.io/making-your-javascript-projects-less-noisy/
     */
    "NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.",
    "NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.",
    // Chrome extensions (these are also being filtered in Sentry settings)
    /extensions\//i,
    /^chrome:\/\//i,
    /^chrome-extension:\/\//i,
    // Apps
    /^app:\/\//i,
  ],
});
