// The service worker for Ultraviolet
// This handles the requests for the proxy

importScripts('/classwork/uv.bundle.js');
importScripts('/classwork/uv.config.js');
importScripts(__uv$config.sw || '/classwork/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
