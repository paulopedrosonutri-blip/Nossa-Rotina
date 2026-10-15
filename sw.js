// Service worker mínimo: deixa o Chrome reconhecer o app como instalável.
// Não guarda cache; sempre busca na internet, para os dados e o login ficarem atualizados.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
