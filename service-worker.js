const CACHE_VERSION = 'labo-virtuel-v1.0.1';
const CACHE_STATIC = `${CACHE_VERSION}-static`;
const CACHE_DYNAMIC = `${CACHE_VERSION}-dynamic`;

const STATIC_ASSETS = [
  './', './index.html', './404.html', './a-propos.html', './base.html',
  './cours.html', './fiche-tp.html', './guide-librairie.html', './guide.html',
  './mentions-legales.html', './module-ac.html', './module-amplification.html',
  './module-dc.html', './module-electronique.html', './module-energie.html',
  './module-filtrage.html', './module-logique.html',
  './module-semi-conducteur.html', './module-transfo.html',
  './module-transmission.html', './module-tri.html', './modules.html',
  './parcours.html', './quiz.html', './simulateur.html', './offline.html',
  './manifest.json', './circuit/war/circuitjs.html',
  './css/404.css', './css/apropos.css', './css/components.css',
  './css/cours.css', './css/effect.css', './css/guide.css',
  './css/landing.css', './css/layout.css', './css/mention.css',
  './css/module.css', './css/modules.css', './css/parcours.css',
  './css/quiz.css', './css/simulateur.css', './css/theme.css',
  './js/cours-data.js', './js/dashboard.js', './js/modules-data.js',
  './js/parcours-data.js', './js/quiz.js', './js/simulateur.js',
  './js/core/Ammeter.js', './js/core/Battery.js', './js/core/Capacitor.js',
  './js/core/Component.js', './js/core/ComponentAC.js',
  './js/core/Connections.js', './js/core/Exercise.js', './js/core/Exporter.js',
  './js/core/Fuse.js', './js/core/Inductor.js', './js/core/Lamp.js',
  './js/core/LED.js', './js/core/Library.js', './js/core/Motor.js',
  './js/core/Resistor.js', './js/core/Resonance.js', './js/core/Solver.js',
  './js/core/SolverAC.js', './js/core/SourceAC.js', './js/core/Storage.js',
  './js/core/Switch.js', './js/core/Validator.js', './js/core/Voltmeter.js',
  './js/core/Wire.js', './js/ui/CookieBanner.js', './js/ui/Effects.js',
  './js/ui/Icons.js', './js/ui/Notify.js', './js/ui/PWA.js',
  './js/ui/theme.js', './assets/icons/icon.svg',
  './assets/data/circuits.json', './assets/data/modules.json',
  './assets/data/quiz.json', './assets/data/tp-ac.json',
  './assets/data/tp-dc.json', './assets/data/tp-transfo.json',
  './assets/data/tp-tri.json',
  './assets/composants/condasateur.svg', './assets/composants/fil.svg',
  './assets/composants/inductance.svg', './assets/composants/interrupteur.svg',
  './assets/composants/interupteur-ferme.svg',
  './assets/composants/lampe-allume.svg', './assets/composants/lampe.svg',
  './assets/composants/pile.svg', './assets/composants/resistance.svg',
  './assets/composants/source-ac.svg',
  './assets/images/443534263315702820.jpg',
  './assets/images/957794bb98968bfe296f8398200631f7.jpg',
  './assets/images/FB_IMG_1790925968302.jpg',
  './assets/images/hero-bulb.jpg', './assets/images/memes.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith('labo-virtuel-') && k !== CACHE_STATIC && k !== CACHE_DYNAMIC)
        .map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_DYNAMIC).then(cache => cache.put(request, clone));
        return response;
      }).catch(() => {
        if (request.mode === 'navigate') return caches.match('./offline.html');
        return new Response('Indisponible hors-ligne.', { status: 503 });
      });
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});