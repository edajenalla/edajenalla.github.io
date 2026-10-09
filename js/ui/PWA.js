const PWA = {
  deferredPrompt: null,
  installed: false,

  init() {
    this.registerServiceWorker();
    this.detectInstalled();
    this.listenInstallPrompt();
    this.listenAppInstalled();
  },

  detectInstalled() {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      this.installed = true;
    }
  },

  registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(err => console.error('[PWA]', err));
    });
  },

  listenInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      const btn = document.getElementById('installBtn');
      if (!btn) return;
      e.preventDefault();
      this.deferredPrompt = e;
      btn.style.display = 'inline-flex';
    });
  },

  listenAppInstalled() {
    window.addEventListener('appinstalled', () => {
      this.installed = true;
      const btn = document.getElementById('installBtn');
      if (btn) btn.style.display = 'none';
      if (typeof Notify !== 'undefined') Notify.success('Application installée');
    });
  },

  async install() {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    await this.deferredPrompt.userChoice;
    this.deferredPrompt = null;
    const btn = document.getElementById('installBtn');
    if (btn) btn.style.display = 'none';
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => PWA.init());
} else {
  PWA.init();
}