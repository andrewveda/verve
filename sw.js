const CACHE_NAME = "verve-v1.0.0";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./auth-guard.js",

  "./icons/launchericon-48x48.png",
  "./icons/launchericon-72x72.png",
  "./icons/launchericon-96x96.png",
  "./icons/launchericon-144x144.png",
  "./icons/launchericon-192x192.png",
  "./icons/launchericon-512x512.png"
];

// Install
self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
  );
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      ),
      self.clients.claim()
    ])
  );
});

// Fetch
self.addEventListener("fetch", event => {

  // Only cache GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore browser extensions
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Don't cache API requests
  if (
    url.hostname.includes("supabase") ||
    url.pathname.startsWith("/api/")
  ) {
    return;
  }

  // HTML → Network first
  if (event.request.mode === "navigate") {

    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() =>
          caches.match(event.request).then(r => r || caches.match("./index.html"))
        )
    );

    return;
  }

  // CSS / JS / Images → Cache first
  event.respondWith(
    caches.match(event.request)
      .then(cached => {

        if (cached) {
          return cached;
        }

        return fetch(event.request)
          .then(response => {

            if (!response || response.status !== 200) {
              return response;
            }

            const copy = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, copy));

            return response;
          });

      })
  );

});
