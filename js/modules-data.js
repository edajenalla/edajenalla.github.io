/* ============================================================
   DONNÉES DES MODULES
   Onze modules : quatre historiques, sept issus du catalogue
   ============================================================ */

const MODULES = [

  /* ============================================================
     MODULES HISTORIQUES (avec simulateur et TP)
     ============================================================ */

  {
    id: 'dc',
    numero: '01',
    titre: 'Courant continu',
    type: 'existant',
    categorie: 'Fondamentaux',
    description: 'Loi d\'Ohm, lois de Kirchhoff, théorèmes de Thévenin et de Norton. Cinq travaux pratiques, cinq composants, un multimètre virtuel.',
    chapeau: 'Le courant circule dans un seul sens. Les lois sont simples, les calculs se vérifient à la main, chaque résultat se mesure dans le simulateur.',
    duree: '3 h 30',
    niveau: 'Débutant',
    couleur: '#3b82f6',
    page: 'module-dc.html',
    simulateur: 'simulateur.html',
    tp: 5,
    coursIds: []
  },
  {
    id: 'ac',
    numero: '02',
    titre: 'Courant alternatif',
    type: 'existant',
    categorie: 'Fondamentaux',
    description: 'Impédance complexe, déphasage, puissances active et réactive, résonance RLC. Oscilloscope et diagramme de Fresnel intégrés.',
    chapeau: 'La tension change de sens cinquante fois par seconde. L\'impédance remplace la résistance, les nombres complexes remplacent les réels.',
    duree: '3 heures',
    niveau: 'Intermédiaire',
    couleur: '#3b82f6',
    page: 'module-ac.html',
    simulateur: 'simulateur-ac.html',
    tp: 4,
    coursIds: []
  },
  {
    id: 'tri',
    numero: '03',
    titre: 'Systèmes triphasés',
    type: 'existant',
    categorie: 'Énergie',
    description: 'Couplage étoile et triangle, tensions simples et composées, puissances en régime équilibré.',
    chapeau: 'Trois tensions de même amplitude, décalées d\'un tiers de période. Ce qui semble plus complexe simplifie en réalité le transport de l\'énergie.',
    duree: '2 h 30',
    niveau: 'Avancé',
    couleur: '#2ea043',
    page: 'module-tri.html',
    simulateur: null,
    tp: 3,
    coursIds: []
  },
  {
    id: 'transfo',
    numero: '04',
    titre: 'Transformateur',
    type: 'existant',
    categorie: 'Énergie',
    description: 'Essai à vide, essai en court-circuit, modèle équivalent, calcul du rendement selon la charge.',
    chapeau: 'Deux bobines autour d\'un noyau de fer. Aucun contact électrique entre l\'entrée et la sortie. Le courant alternatif au primaire induit une tension au secondaire.',
    duree: '2 heures',
    niveau: 'Intermédiaire',
    couleur: '#2ea043',
    page: 'module-transfo.html',
    simulateur: null,
    tp: 3,
    coursIds: []
  },

  /* ============================================================
     MODULES CATALOGUE (avec cours, sans TP)
     ============================================================ */

  {
    id: 'electronique',
    numero: '05',
    titre: 'Électronique fondamentale',
    type: 'cours',
    categorie: 'Analogique',
    description: 'Résistances, condensateurs, bobines, sources contrôlées, ponts diviseurs.',
    chapeau: 'Les circuits fondamentaux de l\'électronique. Comprendre comment la tension se répartit et comment le courant circule, avant d\'aborder les composants actifs.',
    duree: '3 h 30',
    niveau: 'Débutant',
    couleur: '#d29922',
    page: 'module-electronique.html',
    simulateur: 'simulateur.html',
    tp: 0,
    coursIds: ['bases', 'circuits-alternatifs', 'autres-passifs', 'sources-controlees']
  },
  {
    id: 'semi-conducteurs',
    numero: '06',
    titre: 'Semi-conducteurs',
    type: 'cours',
    categorie: 'Analogique',
    description: 'Diodes, transistors bipolaires, MOSFET, thyristors, memristors.',
    chapeau: 'Les composants actifs de base. La diode conduit dans un sens. Le transistor amplifie. Le MOSFET commande par une tension.',
    duree: '4 h 30',
    niveau: 'Intermédiaire',
    couleur: '#d29922',
    page: 'module-semi-conducteurs.html',
    simulateur: null,
    tp: 0,
    coursIds: ['diodes', 'transistors', 'mosfet']
  },
  {
    id: 'amplification',
    numero: '07',
    titre: 'Amplification',
    type: 'cours',
    categorie: 'Analogique',
    description: 'Amplificateurs opérationnels, montages intégrateurs et dérivateurs, minuterie 555.',
    chapeau: 'Avec un amplificateur opérationnel et deux résistances, on construit un amplificateur précis. Avec un 555, on fabrique une horloge.',
    duree: '3 heures',
    niveau: 'Intermédiaire',
    couleur: '#d29922',
    page: 'module-amplification.html',
    simulateur: null,
    tp: 0,
    coursIds: ['aop', 'ne555']
  },
  {
    id: 'filtrage',
    numero: '08',
    titre: 'Filtrage',
    type: 'cours',
    categorie: 'Analogique',
    description: 'Filtres passifs RC, RL, RLC. Filtres actifs Butterworth, Bessel, Tchebychev, Sallen-Key.',
    chapeau: 'Un filtre laisse passer certaines fréquences et atténue les autres. Passif, il reste simple. Actif, il gagne en précision.',
    duree: '4 heures',
    niveau: 'Intermédiaire',
    couleur: '#d29922',
    page: 'module-filtrage.html',
    simulateur: 'simulateur-ac.html',
    tp: 0,
    coursIds: ['filtres-passifs', 'filtres-actifs']
  },
  {
    id: 'logique',
    numero: '09',
    titre: 'Logique numérique',
    type: 'cours',
    categorie: 'Numérique',
    description: 'Familles logiques TTL et CMOS, combinatoire, séquentielle, conversion analogique-numérique.',
    chapeau: 'Le monde numérique repose sur deux niveaux de tension. Portes, bascules, compteurs, convertisseurs, tout descend de cette idée.',
    duree: '6 heures',
    niveau: 'Intermédiaire',
    couleur: '#a855f7',
    page: 'module-logique.html',
    simulateur: null,
    tp: 0,
    coursIds: ['familles-logiques', 'logique-combinatoire', 'logique-sequentielle', 'analogique-digital']
  },
  {
    id: 'energie',
    numero: '10',
    titre: 'Énergie et puissance',
    type: 'cours',
    categorie: 'Énergie',
    description: 'Convertisseurs DC-DC buck, boost, buck-boost, Čuk, SEPIC. Boucles à verrouillage de phase.',
    chapeau: 'Les convertisseurs changent une tension continue en une autre avec un excellent rendement. Les PLL synchronisent un oscillateur sur une référence.',
    duree: '4 heures',
    niveau: 'Avancé',
    couleur: '#2ea043',
    page: 'module-energie.html',
    simulateur: null,
    tp: 0,
    coursIds: ['convertisseurs', 'pll']
  },
  {
    id: 'transmission',
    numero: '11',
    titre: 'Transmission et systèmes',
    type: 'cours',
    categorie: 'Numérique',
    description: 'Lignes de transmission, adaptation d\'impédance, sous-circuits, oscilloscope.',
    chapeau: 'Quand un câble devient long devant la longueur d\'onde, il ne se comporte plus comme un fil. L\'adaptation devient indispensable.',
    duree: '4 heures',
    niveau: 'Avancé',
    couleur: '#a855f7',
    page: 'module-transmission.html',
    simulateur: null,
    tp: 0,
    coursIds: ['lignes-transmission', 'sous-circuits', 'appareils-divers', 'oscilloscope']
  }
];

/* ============================================================
   OUTILS DE LECTURE
   ============================================================ */

const ModulesData = {

  get(id) {
    return MODULES.find(m => m.id === id);
  },

  all() {
    return MODULES;
  },

  parCategorie(cat) {
    return MODULES.filter(m => m.categorie === cat);
  },

  /* Renvoie tous les modules d'un parcours donné */
  parParcours(parcoursId) {
    const p = PARCOURS.find(x => x.id === parcoursId);
    if (!p) return [];
    return p.modules.map(id => this.get(id)).filter(Boolean);
  },

  /* Renvoie les cours d'un module sous forme d'objets complets */
  coursDuModule(moduleId) {
    const m = this.get(moduleId);
    if (!m || !m.coursIds || !m.coursIds.length) return [];
    if (typeof COURS === 'undefined') return [];
    return m.coursIds.map(id => COURS.find(c => c.id === id)).filter(Boolean);
  },

  /* Renvoie le parcours auquel appartient un module */
  parcoursDuModule(moduleId) {
    return PARCOURS.filter(p => p.modules.includes(moduleId));
  },

  /* Compte les cours d'un module */
  nombreCours(moduleId) {
    const m = this.get(moduleId);
    return m && m.coursIds ? m.coursIds.length : 0;
  }
};