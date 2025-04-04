const CACHE_NAME = "rpm-health-cache-v1";
const urlsToCache = [
    "index.html",
    "style.css",
    "Chatbot.html",
    "Appointments.html",
    "images/icon-192x192.png",
    "images/icon-512x512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
