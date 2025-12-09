self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Wszystkie żądania przepuszczamy, quiz działa normalnie
  event.respondWith(fetch(event.request));
});
