importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');

const SW_VERSION = '1.0.0';

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'EVAL') {
    event.ports[0].postMessage(SW_VERSION);
  }
});
