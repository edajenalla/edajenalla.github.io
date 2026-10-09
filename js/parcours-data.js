/* ============================================================
   DONNÉES DES PARCOURS
   Quatre chemins, chacun regroupant des modules
   ============================================================ */

const PARCOURS = [
  {
    id: 'bases',
    numero: '01',
    titre: 'Bases',
    tagline: 'Découvrir l\'électrotechnique',
    description: 'Ce parcours couvre les fondements. Comment circule le courant, comment se répartissent les tensions, comment se calculent les puissances. Il prépare à tous les autres parcours.',
    couleur: '#3b82f6',
    duree: '8 heures',
    niveau: 'Débutant',
    prerequis: 'Aucun',
    modules: ['dc', 'ac', 'electronique']
  },
  {
    id: 'energie',
    numero: '02',
    titre: 'Énergie',
    tagline: 'Production et distribution',
    description: 'Ce parcours traite du transport de l\'énergie électrique. Du courant alternatif au transformateur, en passant par les systèmes triphasés et les convertisseurs de puissance.',
    couleur: '#2ea043',
    duree: '12 heures',
    niveau: 'Intermédiaire',
    prerequis: 'Parcours Bases',
    modules: ['ac', 'tri', 'transfo', 'energie']
  },
  {
    id: 'analogique',
    numero: '03',
    titre: 'Analogique',
    tagline: 'Concevoir des circuits',
    description: 'Ce parcours entre dans l\'électronique. Composants passifs, semi-conducteurs, amplification, filtrage. L\'objectif est de savoir lire et concevoir un schéma analogique.',
    couleur: '#d29922',
    duree: '14 heures',
    niveau: 'Intermédiaire',
    prerequis: 'Parcours Bases',
    modules: ['electronique', 'semi-conducteurs', 'amplification', 'filtrage']
  },
  {
    id: 'numerique',
    numero: '04',
    titre: 'Numérique',
    tagline: 'Systèmes et transmission',
    description: 'Ce parcours va de la logique booléenne aux systèmes de transmission. Portes logiques, bascules, convertisseurs, lignes de transmission, oscilloscope.',
    couleur: '#a855f7',
    duree: '12 heures',
    niveau: 'Avancé',
    prerequis: 'Parcours Analogique',
    modules: ['logique', 'transmission', 'energie']
  }
];