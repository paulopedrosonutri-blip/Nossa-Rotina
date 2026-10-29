// Service worker: deixa o app instalável e recebe os avisos com o app FECHADO.
// Não guarda cache; sempre busca na internet, para os dados e o login ficarem atualizados.
importScripts('https://cdn.jsdelivr.net/npm/firebase@10.12.2/firebase-app-compat.js');
importScripts('https://cdn.jsdelivr.net/npm/firebase@10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyAI1qBDtaGG0IQ-SxEqxc9nju50AZ1wivY",
  authDomain: "nossa-rotina-e910a.firebaseapp.com",
  projectId: "nossa-rotina-e910a",
  storageBucket: "nossa-rotina-e910a.firebasestorage.app",
  messagingSenderId: "972214914164",
  appId: "1:972214914164:web:629d55a100491727dd1521"
});
firebase.messaging(); // mostra sozinho a notificação que chega da nuvem

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
