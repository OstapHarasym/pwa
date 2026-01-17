// Minimal service worker for offline fallback (very small example)
const CACHE_NAME = "pwa-cache-v1";

self.addEventListener("install", (event) => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Try network first, fallback to cache if offline
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});