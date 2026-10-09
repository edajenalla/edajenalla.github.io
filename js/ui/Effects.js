/* ============================================================
   EFFECTS — chargement, menu mobile, arrière-plan
   ============================================================ */

const Effects = {

  init() {
    this.injectBackground();
    this.injectMenuToggle();
    this.injectMobileMenu();
  },

  /* ----------------------------------------------------------
     ARRIÈRE-PLAN ANIMÉ
     ---------------------------------------------------------- */
  injectBackground() {
    if (document.querySelector('.bg-animated')) return;
    const bg = document.createElement('div');
    bg.className = 'bg-animated';
    bg.innerHTML = '<div class="bg-glow"></div>';
    document.body.insertBefore(bg, document.body.firstChild);

    // Grain
    if (!document.querySelector('.grain-overlay')) {
      const grain = document.createElement('div');
      grain.className = 'grain-overlay';
      document.body.appendChild(grain);
    }
  },



  /* ----------------------------------------------------------
     BOUTON DE MENU
     ---------------------------------------------------------- */
  injectMenuToggle() {
    const head = document.querySelector('.site-head');
    if (!head) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'menu-toggle';
    btn.id = 'menuToggle';
    btn.setAttribute('aria-label', 'Ouvrir le menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML =
      '<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
        '<line x1="3" y1="6" x2="21" y2="6"/>' +
        '<line x1="3" y1="12" x2="21" y2="12"/>' +
        '<line x1="3" y1="18" x2="21" y2="18"/>' +
      '</svg>' +
      '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
        '<line x1="18" y1="6" x2="6" y2="18"/>' +
        '<line x1="6" y1="6" x2="18" y2="18"/>' +
      '</svg>';

    head.appendChild(btn);
    btn.addEventListener('click', () => this.toggleMenu());
  },

  /* ----------------------------------------------------------
     MENU MOBILE
     ---------------------------------------------------------- */
  injectMobileMenu() {
    if (document.querySelector('.mobile-menu')) return;

    // Récupérer les liens du menu desktop
    const desktopNav = document.querySelector('.site-head nav');
    if (!desktopNav) return;

    const liens = Array.from(desktopNav.querySelectorAll('a')).map(a => ({
      href: a.getAttribute('href'),
      label: a.textContent.trim(),
      current: a.hasAttribute('aria-current')
    }));

    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.id = 'mobileMenu';
    menu.innerHTML =
      '<nav>' +
        liens.map(l =>
          '<a href="' + l.href + '"' + (l.current ? ' aria-current="page"' : '') + '>' + l.label + '</a>'
        ).join('') +
      '</nav>' +
      '<div class="mobile-menu-footer">' +
        '<span>ENSET Antsiranana</span>' +
        '<span>2025</span>' +
      '</div>';

    document.body.appendChild(menu);

    // Fermer au clic sur un lien
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => this.closeMenu());
    });

    // Fermer avec Échap
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeMenu();
    });
  },

  toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('menuToggle');
    if (!menu || !btn) return;

    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  },

  closeMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('menuToggle');
    if (menu) menu.classList.remove('open');
    if (btn) {
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }
};

document.addEventListener('DOMContentLoaded', () => Effects.init());