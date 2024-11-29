import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const CACHE_NAME = 'card-generator-cache';
const urlsToCache = ['/', '/index.html', '/icon-192x192.png', '/icon-512x512.png'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});


createRoot(document.getElementById('root')).render(
    <App />
)
