/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-regex-literals */


import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

/* eslint-disable no-underscore-dangle */
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing
const fileExtensionRegexp = /[^/?]+\.[^/]+$/;
registerRoute(
  // Navigation requests are handled here
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false; // Skip non-navigation requests
    }
    if (url.pathname.startsWith('/_')) {
      return false; // Skip paths starting with /_
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false; // Skip requests with file extensions
    }
    return true; // Handle navigation requests
  },
  createHandlerBoundToURL(`${process.env.PUBLIC_URL}/index.html`), // Serve index.html for navigation requests
);

// Example of runtime caching for images
registerRoute(
  // Cache PNG images from the same origin
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images-cache', // Cache name for images
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }), // Limit cache to 50 entries
    ],
  }),
);

// Cache other assets (CSS, JS, etc.) using CacheFirst strategy
registerRoute(
  // Cache CSS and JS files
  ({ request }) => request.destination === 'style' || request.destination === 'script',
  new CacheFirst({
    cacheName: 'static-resources', // Cache name for static resources
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
      }),
    ],
  }),
);

// Handle service worker updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting(); // Activate new service worker immediately
  }
});

// Any other custom service worker logic can go here.
