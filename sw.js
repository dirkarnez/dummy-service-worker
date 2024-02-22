importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');


self.addEventListener('message', (event) => {
  // if (event.data && event.data.type === 'EVAL') {
  //   event.ports[0].postMessage();
  // }

  if (event.data.type === 'CACHE_CACHEFIRST') {
    workbox.routing.registerRoute(
      new RegExp(event.data.regexPattern),
      new workbox.strategies.CacheFirst()
    );
    debugger;
    event.ports[0].postMessage("ok");
  }
});




