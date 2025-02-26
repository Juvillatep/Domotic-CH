self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("domotic-ch").then(cache => {
            return cache.addAll([
                "/Domotic-CH/",
                "/Domotic-CH/index.html",
                "/Domotic-CH/manifest.json",
                "/Domotic-CH/icon.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
