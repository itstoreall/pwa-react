const CACHE_KEY = 'pwa-react-v1';
const urlsToCache = ['index.html', 'offline.html'];
const self = this;

self.addEventListener('install', event => {
  // /*
  event.waitUntil(
    caches.open(CACHE_KEY).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
  // */
});

self.addEventListener('fetch', event => {
  // /*
  event.respondWith(
    caches.match(event.request).then(async () => {
      try {
        return await fetch(event.request);
      } catch {
        return await caches.match('offline.html');
      }
    })
  );
  // */

  /*
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        return caches.match('offline.html');
      });
    })
  );
  // */
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [];

  cacheWhitelist.push(CACHE_KEY);

  /*
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  // */

  // /*
  event.waitUntil(
    caches
      .keys()
      .then(cacheKeys =>
        Promise.all(
          cacheKeys
            .filter(cacheKey => !cacheWhitelist.includes(cacheKey))
            .map(cacheKey => caches.delete(cacheKey))
        )
      )
  );
  // */
});
