const CookieBanner = {
  key: 'labo_virtuel_cookie_notice',

  init() {
    if (localStorage.getItem(this.key)) return;
    this.render();
  },

  render() {
    const b = document.createElement('div');
    b.className = 'cookie-banner';
    b.setAttribute('role', 'region');
    b.innerHTML = `
      <p>Ce site ne pose aucun traceur et ne collecte aucune donnée. Seule votre préférence de thème ou de langue peut être mémorisée localement, dans votre navigateur. <a href="mentions-legales.html">En savoir plus</a>.</p>
      <div class="cookie-actions">
        <button type="button" data-action="accept">Compris</button>
        <button type="button" data-action="refuse">Tout effacer</button>
      </div>
    `;
    document.body.appendChild(b);

    b.querySelector('[data-action="accept"]').addEventListener('click', () => this.close(b, true));
    b.querySelector('[data-action="refuse"]').addEventListener('click', () => {
      Object.keys(localStorage).forEach(k => {
        if (k.startsWith('labo_virtuel_')) localStorage.removeItem(k);
      });
      this.close(b, true);
    });
  },

  close(b, save) {
    if (save) localStorage.setItem(this.key, '1');
    b.style.opacity = '0';
    b.style.transform = 'translate(-50%, 1rem)';
    setTimeout(() => b.remove(), 200);
  }
};

document.addEventListener('DOMContentLoaded', () => CookieBanner.init());