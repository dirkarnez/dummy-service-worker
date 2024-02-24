importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');

let urlPattern = "";

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(self.clients.claim());
});


self.addEventListener('message', (event) => {
  // if (event.data && event.data.type === 'EVAL') {
  //   event.ports[0].postMessage();
  // }
  if (event.data.type === 'CACHE_CACHEFIRST') {
    pattern = event.data.regexPattern;

    // workbox.routing.registerRoute(
    //   new RegExp(),
    //   new workbox.strategies.CacheFirst()
    // );
    // debugger;
    event.ports[0].postMessage("ok");
  }
});

self.addEventListener('fetch', event => {
  // Check if the requested URL matches the pattern
  if (event.request.url.match(urlPattern)) {
    event.respondWith(
      caches.open('my-cache').then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetchAndCache(event.request, cache);
        });
      })
    );
  }
});


function fetchAndCache(request, cache) {
  return fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  });
}

