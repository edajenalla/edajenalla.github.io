const Theme = {
  key: 'labo_virtuel_theme',

  init() {
    const saved = localStorage.getItem(this.key);
    if (saved) {
      document.documentElement.dataset.theme = saved;
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      document.documentElement.dataset.theme = prefersLight ? 'light' : 'dark';
    }
    this.injectButton();
  },

  toggle() {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(this.key, next);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.dataset.current = next;
  },

  injectButton() {
    const head = document.querySelector('.site-head');
    if (!head) return;
    const existing = head.querySelector('.theme-toggle');
    if (existing) existing.remove();

    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.dataset.current = document.documentElement.dataset.theme;
    btn.setAttribute('aria-label', 'Basculer le thème');
    btn.innerHTML = `
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="5"/>
        <line x1="12" y1="19" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="5" y2="12"/>
        <line x1="19" y1="12" x2="22" y2="12"/>
        <line x1="4.9" y1="4.9" x2="6.9" y2="6.9"/>
        <line x1="17.1" y1="17.1" x2="19.1" y2="19.1"/>
        <line x1="4.9" y1="19.1" x2="6.9" y2="17.1"/>
        <line x1="17.1" y1="6.9" x2="19.1" y2="4.9"/>
      </svg>
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
      </svg>
    `;
    btn.addEventListener('click', () => this.toggle());
    head.appendChild(btn);
  }
};

document.addEventListener('DOMContentLoaded', () => Theme.init());