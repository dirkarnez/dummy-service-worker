importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');


self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'EVAL') {
    event.ports[0].postMessage();
  }
});
