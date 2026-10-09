/* ============================================================
   DONNÉES DES COURS
   Chaque entrée correspond à une catégorie du simulateur
   ============================================================ */

const COURS = [

  /* ============================================================
     ÉLECTRONIQUE FONDAMENTALE
     ============================================================ */

  {
    id: 'bases',
    numero: '01',
    categorie: 'Électronique fondamentale',
    titre: 'Les bases',
    duree: '45 min',
    description: 'Résistances, condensateurs, bobines, loi d\'Ohm et ponts diviseurs.',
    chapeau: 'Les circuits fondamentaux de l\'électronique. Comprendre comment la tension se répartit et comment le courant circule, avant d\'aborder les composants actifs.',
    formule: 'U = R × I',
    formuleNote: 'La loi d\'Ohm relie tension, courant et résistance. Elle s\'applique à tout conducteur ohmique et reste valable en régime alternatif pour la partie résistive.',
    explication: [
      'Les circuits de base reposent sur trois composants passifs : la résistance, le condensateur et la bobine. La résistance dissipe l\'énergie, le condensateur la stocke sous forme de charge électrique, la bobine la stocke sous forme de champ magnétique.',
      'En combinant ces composants, on obtient des diviseurs de tension, des filtres rudimentaires, des circuits d\'accord. Tous les montages plus complexes s\'appuient sur ces principes élémentaires.',
      'Le pont diviseur de tension est le plus utilisé. Il permet d\'obtenir une fraction précise de la tension d\'entrée, à condition de ne pas tirer de courant sur la sortie. Dès qu\'une charge est branchée, la tension chute.'
    ],
    origine: {
      label: '1827 · Georg Simon Ohm',
      texte: 'Georg Simon Ohm publie son traité sur les circuits galvaniques après des années de mesures méticuleuses. Il établit que le courant traversant un conducteur est proportionnel à la tension appliquée. Ses contemporains reçoivent le travail avec indifférence. Il faut attendre quatorze ans pour que la Royal Society lui décerne la médaille Copley. L\'unité de résistance porte aujourd\'hui son nom.'
    },
    points: [
      'La loi d\'Ohm s\'écrit U = R × I et se réarrange en I = U / R ou R = U / I',
      'En série, les résistances s\'additionnent : R_eq = R₁ + R₂',
      'En parallèle, les conductances s\'additionnent : 1/R_eq = 1/R₁ + 1/R₂',
      'Un pont diviseur à vide donne U_sortie = U × R₂ / (R₁ + R₂)'
    ],
    schemas: [
      { titre: 'Diviseur de tension', formule: 'U₂ = U × R₂ / (R₁ + R₂)', description: 'Deux résistances en série, la sortie prélevée aux bornes de R₂.' },
      { titre: 'Diviseur de courant', formule: 'I₁ = I × R₂ / (R₁ + R₂)', description: 'Deux résistances en parallèle, le courant se répartit à l\'inverse des résistances.' },
      { titre: 'Pont de Wheatstone', formule: 'R₁/R₂ = R₃/R₄ à l\'équilibre', description: 'Mesure précise d\'une résistance inconnue par comparaison.' }
    ],
    video: 'https://www.youtube.com/results?search_query=loi+d+ohm+diviseur+de+tension+cours+francais'
  },

  {
    id: 'circuits-alternatifs',
    numero: '02',
    categorie: 'Électronique fondamentale',
    titre: 'Circuits alternatifs',
    duree: '1 h',
    description: 'Impédance, déphasage, résonance, puissance active et réactive.',
    chapeau: 'En régime sinusoïdal, les bobines et les condensateurs introduisent un déphasage. On décrit tout avec des nombres complexes.',
    formule: 'Z = R + jX',
    formuleNote: 'L\'impédance complexe regroupe résistance et réactance. Son module donne le rapport des amplitudes, son argument donne le déphasage.',
    explication: [
      'En alternatif, la tension change de signe périodiquement. Une bobine s\'oppose aux variations de courant, un condensateur s\'oppose aux variations de tension. Ces oppositions s\'appellent réactances et dépendent de la fréquence.',
      'La réactance d\'une bobine croît avec la fréquence : X_L = 2πfL. Celle d\'un condensateur décroît : X_C = 1/(2πfC). À une fréquence précise, les deux s\'égalisent, c\'est la résonance.',
      'Les puissances active, réactive et apparente forment un triangle rectangle. Le facteur de puissance mesure l\'efficacité du transfert d\'énergie.'
    ],
    origine: {
      label: '1893 · Charles Proteus Steinmetz',
      texte: 'Steinmetz, ingénieur chez General Electric, impose l\'usage des nombres complexes pour analyser les circuits alternatifs. Avant lui, les calculs se faisaient avec des équations trigonométriques lourdes. Sa méthode transforme le domaine et reste aujourd\'hui la base de l\'électrotechnique moderne.'
    },
    points: [
      'Impédance complexe : Z = R + jX, avec X = X_L − X_C',
      'Résonance série : X_L = X_C, l\'impédance devient purement résistive',
      'Puissance active P = U × I × cos φ, seule la composante en phase travaille',
      'Facteur de puissance cos φ proche de 1 pour les installations efficaces'
    ],
    schemas: [
      { titre: 'Circuit RL série', formule: '|Z| = √(R² + X_L²)', description: 'Le courant est en retard sur la tension.' },
      { titre: 'Circuit RC série', formule: '|Z| = √(R² + X_C²)', description: 'Le courant est en avance sur la tension.' },
      { titre: 'Résonance RLC', formule: 'f₀ = 1 / (2π√(LC))', description: 'À cette fréquence, le courant atteint son maximum.' }
    ],
    video: 'https://www.youtube.com/results?search_query=circuits+alternatifs+impedance+resonance+cours+francais'
  },

  {
    id: 'autres-passifs',
    numero: '03',
    categorie: 'Électronique fondamentale',
    titre: 'Autres circuits passifs',
    duree: '1 h',
    description: 'Relais, interrupteurs, différentiateurs, intégrateurs, ponts.',
    chapeau: 'Des montages passifs qui exploitent les propriétés dynamiques des bobines et des condensateurs.',
    formule: 'τ = R × C',
    formuleNote: 'La constante de temps d\'un circuit RC détermine la vitesse de charge et de décharge du condensateur.',
    explication: [
      'Les circuits RC et RL produisent des réponses qui varient dans le temps. Un condensateur qui se charge à travers une résistance suit une courbe exponentielle caractérisée par sa constante de temps τ.',
      'En combinant plusieurs composants, on obtient des comportements plus riches : oscillateurs amortis, circuits à retard, filtres simples.',
      'Le pont de Wheatstone, avec ses quatre résistances, permet de mesurer une résistance inconnue par comparaison. Il reste la base de nombreux capteurs industriels.'
    ],
    origine: {
      label: '1843 · Charles Wheatstone',
      texte: 'Wheatstone popularise le pont qui porte son nom, mais l\'invention revient à Samuel Hunter Christie, qui l\'a proposée vingt ans plus tôt. Wheatstone en comprend l\'intérêt pour la mesure des lignes télégraphiques et le diffuse largement.'
    },
    points: [
      'Circuit RC : charge et décharge exponentielles avec constante τ = RC',
      'Circuit RL : montée du courant avec constante τ = L/R',
      'Les relais permettent la commande d\'un circuit par un autre',
      'Le pont de Wheatstone mesure par équilibrage, méthode très précise'
    ],
    schemas: [
      { titre: 'Charge d\'un condensateur', formule: 'v(t) = U(1 − e^(−t/RC))', description: 'Montée exponentielle vers la tension d\'alimentation.' },
      { titre: 'Décharge d\'un condensateur', formule: 'v(t) = U × e^(−t/RC)', description: 'Descente exponentielle vers zéro.' },
      { titre: 'Filtre RC passe-bas', formule: 'f_c = 1/(2πRC)', description: 'Laisse passer les basses fréquences.' }
    ],
    video: 'https://www.youtube.com/results?search_query=circuit+RC+charge+condensateur+cours+francais'
  },

  {
    id: 'sources-controlees',
    numero: '04',
    categorie: 'Électronique fondamentale',
    titre: 'Sources contrôlées',
    duree: '45 min',
    description: 'Sources de tension et de courant dépendant d\'une autre grandeur.',
    chapeau: 'Une source contrôlée fournit une tension ou un courant qui dépend d\'une autre tension ou d\'un autre courant du circuit.',
    formule: 'V_sortie = A × V_contrôle',
    formuleNote: 'A est le gain, sans dimension pour une source de tension contrôlée en tension, en siemens pour une source de courant contrôlée en tension.',
    explication: [
      'Les sources contrôlées modélisent les composants actifs : transistors, amplificateurs opérationnels, tubes à vide. Elles permettent d\'analyser un montage sans entrer dans les détails internes du composant.',
      'Quatre types existent : tension contrôlée en tension, tension contrôlée en courant, courant contrôlé en tension, courant contrôlé en courant. Chacun correspond à un modèle d\'amplificateur particulier.',
      'L\'analyse des circuits avec sources contrôlées suit les mêmes règles que pour les sources indépendantes. L\'analyse nodale s\'applique directement.'
    ],
    origine: {
      label: 'Années 1920 · Modélisation des tubes',
      texte: 'Les premiers modèles de tubes à vide utilisent des sources contrôlées pour représenter le comportement du composant. La méthode s\'étend ensuite aux transistors, puis à tous les amplificateurs intégrés.'
    },
    points: [
      'Quatre types : VCVS, VCCS, CCVS, CCCS',
      'Permettent de modéliser les transistors et amplificateurs',
      'L\'analyse nodale s\'applique comme pour les sources indépendantes',
      'Le gain peut être positif ou négatif selon le montage'
    ],
    schemas: [
      { titre: 'Source de tension contrôlée', formule: 'V₂ = A × V₁', description: 'Utilisée pour modéliser un amplificateur de tension.' },
      { titre: 'Source de courant contrôlée', formule: 'I₂ = g × V₁', description: 'Modélise la transconductance d\'un transistor.' }
    ],
    video: 'https://www.youtube.com/results?search_query=source+controlee+electronique+cours+francais'
  },

  /* ============================================================
     SEMI-CONDUCTEURS
     ============================================================ */

  {
    id: 'diodes',
    numero: '05',
    categorie: 'Semi-conducteurs',
    titre: 'Diodes',
    duree: '1 h 30',
    description: 'Redressement, limiteurs, Zener, LED, ponts de redressement.',
    chapeau: 'La diode conduit dans un sens et bloque dans l\'autre. C\'est le composant le plus simple du monde des semi-conducteurs.',
    formule: 'I = I_S × (e^(V/V_T) − 1)',
    formuleNote: 'Équation de Shockley. V_T vaut environ 26 mV à température ambiante. La diode commence à conduire vers 0,6 à 0,7 V pour le silicium.',
    explication: [
      'La diode est un composant à deux bornes : anode et cathode. Quand la tension anode-cathode dépasse un seuil, elle conduit. Dans l\'autre sens, elle bloque jusqu\'à sa tension de claquage.',
      'Elle sert au redressement, c\'est-à-dire à convertir une tension alternative en tension continue. Un pont à quatre diodes redresse les deux alternances.',
      'La diode Zener se comporte différemment : elle conduit dans le sens inverse quand la tension dépasse une valeur précise. Elle sert à stabiliser une tension.'
    ],
    origine: {
      label: '1874 · Karl Ferdinand Braun',
      texte: 'Braun découvre la conduction asymétrique dans certains cristaux, point de départ de l\'électronique à semi-conducteurs. La diode à vide, puis la diode à semi-conducteur, populariseront ce principe fondamental.'
    },
    points: [
      'Tension de seuil : 0,7 V pour le silicium, 0,3 V pour le germanium',
      'Conduit dans un seul sens : de l\'anode vers la cathode',
      'Utilisée pour le redressement, la protection, la démodulation',
      'La diode Zener conduit en inverse à une tension précise'
    ],
    schemas: [
      { titre: 'Redressement simple alternance', formule: 'V_moy = V_max / π', description: 'Une seule diode, la moitié du signal est perdue.' },
      { titre: 'Redressement double alternance', formule: 'V_moy = 2 × V_max / π', description: 'Pont à quatre diodes, signal redressé complet.' },
      { titre: 'Stabilisation Zener', formule: 'V_sortie = V_Z', description: 'La diode Zener fixe la tension de sortie.' }
    ],
    video: 'https://www.youtube.com/results?search_query=diode+redressement+cours+electronique+francais'
  },

  {
    id: 'transistors',
    numero: '06',
    categorie: 'Semi-conducteurs',
    titre: 'Transistors bipolaires',
    duree: '1 h 30',
    description: 'NPN, PNP, émetteur suiveur, amplificateur émetteur commun.',
    chapeau: 'Le transistor bipolaire est un amplificateur de courant. Un petit courant de base commande un grand courant de collecteur.',
    formule: 'I_C = β × I_B',
    formuleNote: 'β est le gain en courant, généralement compris entre 50 et 500. I_E = I_C + I_B, avec I_B très petit devant I_C.',
    explication: [
      'Un transistor bipolaire a trois bornes : base, collecteur, émetteur. Le courant qui circule entre base et émetteur contrôle le courant entre collecteur et émetteur.',
      'Trois montages existent : émetteur commun (amplifie tension et courant), collecteur commun (amplifie courant, gain de tension unitaire), base commune (amplifie tension, gain de courant unitaire).',
      'En commutation, le transistor fonctionne comme un interrupteur commandé. En amplification, il fonctionne dans sa zone linéaire, polarisé au repos.'
    ],
    origine: {
      label: '1947 · Bell Labs',
      texte: 'John Bardeen, Walter Brattain et William Shockley inventent le transistor à pointes en décembre 1947. La découverte leur vaut le prix Nobel de physique en 1956. Elle rend possible l\'électronique moderne et remplace progressivement les tubes à vide.'
    },
    points: [
      'Trois bornes : base, collecteur, émetteur',
      'Gain en courant β de 50 à 500 selon les modèles',
      'Tension base-émetteur d\'environ 0,7 V en conduction',
      'Trois montages : émetteur commun, collecteur commun, base commune'
    ],
    schemas: [
      { titre: 'Émetteur commun', formule: 'A_V = −R_C / r_e', description: 'Amplifie la tension, inverse le signal.' },
      { titre: 'Collecteur commun', formule: 'A_V ≈ 1, A_I élevé', description: 'Émetteur suiveur, adapte l\'impédance.' },
      { titre: 'Base commune', formule: 'A_I ≈ 1, A_V élevé', description: 'Utilisé en haute fréquence.' }
    ],
    video: 'https://www.youtube.com/results?search_query=transistor+bipolaire+npn+cours+electronique+francais'
  },

  {
    id: 'mosfet',
    numero: '07',
    categorie: 'Semi-conducteurs',
    titre: 'MOSFET',
    duree: '1 h 30',
    description: 'MOSFET à enrichissement et à appauvrissement, interrupteurs, amplificateurs.',
    chapeau: 'Le MOSFET commande le courant par une tension appliquée sur une grille isolée. C\'est le composant clé des circuits intégrés modernes.',
    formule: 'I_D = k × (V_GS − V_th)²',
    formuleNote: 'En régime saturé. V_th est la tension de seuil, k dépend de la géométrie du transistor. En dessous de V_th, le transistor est bloqué.',
    explication: [
      'Le MOSFET a trois bornes : grille, drain, source. La grille est isolée par une fine couche d\'oxyde, d\'où le nom MOSFET pour Metal-Oxide-Semiconductor Field-Effect Transistor.',
      'Deux familles existent : à enrichissement (bloqué à tension de grille nulle) et à appauvrissement (conducteur à tension nulle). Le premier type est le plus utilisé.',
      'Le MOSFET est devenu le composant dominant en électronique de puissance et en logique numérique. Sa grille isolée consomme très peu de courant en régime statique.'
    ],
    origine: {
      label: '1959 · Mohamed Atalla et Dawon Kahng',
      texte: 'Atalla et Kahng, ingénieurs chez Bell Labs, démontrent le premier MOSFET fonctionnel en 1959. Le composant, d\'abord considéré comme un transistor exotique, devient dans les années 1980 la base de toute l\'électronique numérique.'
    },
    points: [
      'Trois bornes : grille (G), drain (D), source (S)',
      'Commande par tension, courant de grille quasi nul',
      'Deux familles : enrichissement (N ou P) et appauvrissement',
      'Résistance drain-source très faible en conduction'
    ],
    schemas: [
      { titre: 'MOSFET en interrupteur', formule: 'V_GS > V_th → conducteur', description: 'Utilisé pour la commutation de puissance.' },
      { titre: 'MOSFET en amplificateur', formule: 'g_m = 2 × I_D / (V_GS − V_th)', description: 'Transconductance élevée, gain en tension important.' }
    ],
    video: 'https://www.youtube.com/results?search_query=mosfet+transistor+cours+electronique+francais'
  },

  /* ============================================================
     AMPLIFICATION
     ============================================================ */

  {
    id: 'aop',
    numero: '08',
    categorie: 'Amplification',
    titre: 'Amplificateurs opérationnels',
    duree: '2 h',
    description: 'Amplificateurs, intégrateurs, dérivateurs, comparateurs, oscillateurs.',
    chapeau: 'L\'amplificateur opérationnel est un bloc de gain très élevé. Avec deux résistances, il devient un amplificateur précis.',
    formule: 'V_sortie = A × (V⁺ − V⁻)',
    formuleNote: 'A est très grand, supérieur à 100 000. En contre-réaction, la sortie s\'ajuste pour maintenir V⁺ ≈ V⁻. Cette égalité est la clé de tous les montages.',
    explication: [
      'L\'amplificateur opérationnel a deux entrées et une sortie. Sa particularité est son gain énorme, ce qui le rend instable en boucle ouverte. On l\'utilise toujours en contre-réaction.',
      'En contre-réaction, la sortie ramène une partie du signal vers l\'entrée inverseuse. Le système s\'équilibre pour annuler la différence entre les deux entrées. On calcule alors le comportement par de simples proportions.',
      'Suivant la façon dont on câble la contre-réaction, on obtient un amplificateur, un intégrateur, un dérivateur, un comparateur, un oscillateur. C\'est le composant analogique le plus polyvalent.'
    ],
    origine: {
      label: '1941 · Loebe Julie',
      texte: 'Le premier amplificateur opérationnel pratique est conçu par Loebe Julie pour l\'armée américaine. Il servait initialement aux calculateurs analogiques, qui résolvaient des équations différentielles par câblage. Le composant est ensuite intégré sur silicium en 1963 par Fairchild avec le µA702.'
    },
    points: [
      'Gain en boucle ouverte très élevé, plus de 100 000',
      'En contre-réaction, V⁺ ≈ V⁻ (masse virtuelle)',
      'Impédance d\'entrée très élevée, impédance de sortie très faible',
      'Alimentation symétrique généralement ±15 V'
    ],
    schemas: [
      { titre: 'Amplificateur non inverseur', formule: 'A = 1 + R₂/R₁', description: 'Gain positif, impédance d\'entrée élevée.' },
      { titre: 'Amplificateur inverseur', formule: 'A = −R₂/R₁', description: 'Gain négatif, entrée à masse virtuelle.' },
      { titre: 'Intégrateur', formule: 'V_s = −(1/RC) ∫ V_e dt', description: 'Sortie proportionnelle à l\'intégrale de l\'entrée.' },
      { titre: 'Comparateur', formule: 'V_s = +V_sat si V⁺ > V⁻', description: 'Sortie saturée dans un sens ou dans l\'autre.' }
    ],
    video: 'https://www.youtube.com/results?search_query=amplificateur+operationnel+cours+electronique+francais'
  },

  {
    id: 'ne555',
    numero: '09',
    categorie: 'Amplification',
    titre: 'Circuit intégré 555',
    duree: '1 h',
    description: 'Minuterie, oscillateur, monostable, astable, générateur d\'impulsions.',
    chapeau: 'Le 555 est un circuit intégré qui produit des impulsions calibrées. Une résistance et un condensateur fixent la durée.',
    formule: 'T = 1,1 × R × C',
    formuleNote: 'En montage monostable, la durée de l\'impulsion vaut 1,1 × R × C. En montage astable, la fréquence dépend de deux résistances et d\'un condensateur.',
    explication: [
      'Le NE555 contient deux comparateurs, une bascule et un transistor de décharge. Il fonctionne avec une tension d\'alimentation unique de 4,5 à 15 V.',
      'Trois usages principaux : monostable (une impulsion de durée fixe), astable (oscillation continue), bistable (bascule sur commande).',
      'Il reste aujourd\'hui l\'un des circuits intégrés les plus produits au monde, malgré son âge. Sa simplicité et son prix en font un composant pédagogique et industriel toujours utilisé.'
    ],
    origine: {
      label: '1971 · Hans Camenzind',
      texte: 'Hans Camenzind conçoit le NE555 chez Signetics en 1971. Il le dessine à la main, sur un papier, en quelques semaines. Le circuit connaît un succès immédiat et se vend à des centaines de millions d\'exemplaires chaque année.'
    },
    points: [
      'Tension d\'alimentation de 4,5 à 15 V',
      'Trois montages : monostable, astable, bistable',
      'Sortie capable de piloter une LED ou un petit relais',
      'Fréquence stable, peu sensible à la température'
    ],
    schemas: [
      { titre: 'Monostable', formule: 'T = 1,1 × R × C', description: 'Une impulsion de durée fixe par déclenchement.' },
      { titre: 'Astable', formule: 'f = 1,44 / ((R₁ + 2R₂) × C)', description: 'Oscillation continue, rapport cyclique réglable.' },
      { titre: 'Bistable', formule: 'Bascule sur commande', description: 'Sorte de mémoire d\'un bit.' }
    ],
    video: 'https://www.youtube.com/results?search_query=ne555+minuterie+cours+electronique+francais'
  },

  /* ============================================================
     FILTRAGE
     ============================================================ */

  {
    id: 'filtres-passifs',
    numero: '10',
    categorie: 'Filtrage',
    titre: 'Filtres passifs',
    duree: '2 h',
    description: 'Passe-bas, passe-haut, passe-bande, coupe-bande, RC, RL, RLC.',
    chapeau: 'Un filtre laisse passer certaines fréquences et atténue les autres. Avec des composants passifs seulement, il reste simple mais efficace.',
    formule: 'f_c = 1 / (2π√(LC))',
    formuleNote: 'Fréquence de coupure pour un filtre RLC. Pour un filtre RC simple, f_c = 1/(2πRC). À cette fréquence, le gain vaut −3 dB.',
    explication: [
      'Un filtre passe-bas laisse passer les basses fréquences et atténue les hautes. Un filtre passe-haut fait l\'inverse. Un passe-bande combine les deux.',
      'L\'ordre du filtre détermine la pente d\'atténuation. Un filtre du premier ordre atténue de 20 dB par décade. Chaque ordre supplémentaire ajoute 20 dB.',
      'Les filtres passifs utilisent résistances, condensateurs et bobines. Ils sont simples mais introduisent une atténuation dans la bande passante et sont sensibles aux impédances de charge.'
    ],
    origine: {
      label: '1915 · George Campbell et Otto Zobel',
      texte: 'Campbell et Zobel, ingénieurs chez AT&T, développent les premiers filtres à bobines et condensateurs pour multiplexer les lignes téléphoniques. Le concept de filtre électrique naît de ce besoin d\'envoyer plusieurs conversations sur un même câble.'
    },
    points: [
      'Filtre passe-bas RC : f_c = 1/(2πRC)',
      'Filtre passe-haut CR : même formule',
      'Passe-bande : combinaison passe-bas + passe-haut',
      'Pente de 20 dB par décade et par ordre'
    ],
    schemas: [
      { titre: 'Passe-bas RC', formule: 'f_c = 1/(2πRC)', description: 'Atténue au-delà de la fréquence de coupure.' },
      { titre: 'Passe-haut CR', formule: 'f_c = 1/(2πRC)', description: 'Atténue en dessous de la fréquence de coupure.' },
      { titre: 'Passe-bande RLC', formule: 'B = R / (2πL)', description: 'Laisse passer une bande étroite de fréquences.' }
    ],
    video: 'https://www.youtube.com/results?search_query=filtres+passifs+rc+rl+rlc+cours+francais'
  },

  {
    id: 'filtres-actifs',
    numero: '11',
    categorie: 'Filtrage',
    titre: 'Filtres actifs',
    duree: '2 h',
    description: 'Butterworth, Bessel, Tchebychev, Sallen-Key, à contre-réaction multiple.',
    chapeau: 'Avec un amplificateur opérationnel, le filtre gagne en précision sans bobine volumineuse.',
    formule: 'H(s) = 1 / (1 + s/ω_c)',
    formuleNote: 'Fonction de transfert du premier ordre. Pour un Butterworth du second ordre, le dénominateur devient 1 + √2 × s/ω_c + (s/ω_c)².',
    explication: [
      'Un filtre actif utilise un amplificateur opérationnel en plus des composants passifs. L\'amplificateur compense les pertes et permet des réponses plus raides sans bobines.',
      'Plusieurs familles existent. Butterworth donne une bande passante la plus plate possible. Bessel préserve la forme des signaux, idéal en traitement d\'impulsions. Tchebychev accepte une ondulation dans la bande passante en échange d\'une pente plus raide.',
      'Le montage Sallen-Key est le plus courant pour un filtre actif du second ordre. Il tient avec deux résistances, deux condensateurs et un amplificateur.'
    ],
    origine: {
      label: 'Années 1950 · Sallen et Key',
      texte: 'R. P. Sallen et E. L. Key, ingénieurs au MIT Lincoln Laboratory, publient en 1955 un montage qui porte leur nom. Il simplifie radicalement la réalisation des filtres actifs et devient un classique du génie électrique.'
    },
    points: [
      'Butterworth : bande passante la plus plate',
      'Bessel : retard constant, préserve les impulsions',
      'Tchebychev : ondulation acceptée, pente plus raide',
      'Sallen-Key : structure la plus répandue du second ordre'
    ],
    schemas: [
      { titre: 'Passe-bas Sallen-Key', formule: 'f_c = 1/(2π√(R₁R₂C₁C₂))', description: 'Structure simple, gain unitaire.' },
      { titre: 'Passe-bande à contre-réaction', formule: 'Q = f₀ / B', description: 'Sélectivité réglable par le rapport des résistances.' }
    ],
    video: 'https://www.youtube.com/results?search_query=filtre+actif+sallen+key+cours+francais'
  },

  /* ============================================================
     LOGIQUE NUMÉRIQUE
     ============================================================ */

  {
    id: 'familles-logiques',
    numero: '12',
    categorie: 'Logique numérique',
    titre: 'Familles logiques',
    duree: '1 h',
    description: 'RTL, DTL, TTL, NMOS, CMOS, ECL. Comparaison des technologies.',
    chapeau: 'Chaque famille logique a sa technologie et ses caractéristiques. TTL a dominé, CMOS règne aujourd\'hui.',
    formule: 'P = C × V² × f',
    formuleNote: 'Puissance dissipée par une porte CMOS. Proportionnelle à la capacité de charge, au carré de la tension et à la fréquence de commutation.',
    explication: [
      'Une famille logique regroupe des portes construites avec la même technologie. Chaque famille a ses niveaux de tension, sa vitesse, sa consommation.',
      'RTL (Resistor-Transistor Logic) est la première famille, simple mais lente. DTL (Diode-Transistor Logic) la remplace, puis TTL (Transistor-Transistor Logic) s\'impose dans les années 1960.',
      'CMOS (Complementary MOS) consomme très peu en statique. Depuis les années 1980, c\'est la technologie dominante, utilisée dans tous les microprocesseurs modernes.'
    ],
    origine: {
      label: '1963 · Sylvania et Fairchild',
      texte: 'La famille TTL est introduite par Sylvania en 1963, puis popularisée par Fairchild avec la série 7400. Pendant vingt ans, elle devient la référence des circuits logiques. Le 7400 est encore produit aujourd\'hui.'
    },
    points: [
      'TTL : alimentation 5 V, niveaux bien définis',
      'CMOS : alimentation 3,3 V ou 5 V, consommation statique quasi nulle',
      'ECL : très rapide, consommation élevée',
      'Compatibilité à vérifier entre familles différentes'
    ],
    schemas: [
      { titre: 'Porte TTL NAND', formule: 'V_OH ≥ 2,4 V, V_OL ≤ 0,4 V', description: 'Niveaux garantis pour la série 7400.' },
      { titre: 'Porte CMOS', formule: 'V_IH ≈ 0,7 × V_DD', description: 'Seuils proportionnels à l\'alimentation.' }
    ],
    video: 'https://www.youtube.com/results?search_query=familles+logiques+ttl+cmos+cours+francais'
  },

  {
    id: 'logique-combinatoire',
    numero: '13',
    categorie: 'Logique numérique',
    titre: 'Logique combinatoire',
    duree: '1 h 30',
    description: 'OU exclusif, additionneurs, décodeurs, multiplexeurs, comparateurs.',
    chapeau: 'Un circuit combinatoire produit une sortie qui dépend uniquement des entrées présentes. Aucune mémoire.',
    formule: 'S = f(E₁, E₂, ..., E_n)',
    formuleNote: 'La sortie est une fonction booléenne des entrées. On peut la décrire par une table de vérité, une équation ou un schéma à portes.',
    explication: [
      'Les circuits combinatoires n\'ont pas de mémoire. La sortie change dès que les entrées changent, après un délai de propagation.',
      'On y trouve les additionneurs, qui calculent une somme binaire. Un additionneur complet traite deux bits plus une retenue entrante.',
      'Les multiplexeurs sélectionnent une entrée parmi plusieurs. Les décodeurs activent une sortie selon un code binaire. Ces blocs élémentaires se combinent pour former des processeurs complets.'
    ],
    origine: {
      label: '1938 · Claude Shannon',
      texte: 'Dans son mémoire de master au MIT, Claude Shannon démontre que l\'algèbre de Boole s\'applique aux circuits à relais. Ce travail fonde la logique numérique et prépare l\'informatique moderne. Il avait vingt-deux ans.'
    },
    points: [
      'Pas de mémoire, la sortie suit les entrées',
      'Table de vérité ou équation booléenne pour décrire',
      'Algèbre de Boole pour simplifier les équations',
      'Blocs de base : OU exclusif, additionneur, multiplexeur, décodeur'
    ],
    schemas: [
      { titre: 'OU exclusif', formule: 'S = A ⊕ B = A·B̄ + Ā·B', description: 'Sortie à 1 si les entrées diffèrent.' },
      { titre: 'Additionneur complet', formule: 'S = A ⊕ B ⊕ C_in', description: 'Additionne deux bits et une retenue.' },
      { titre: 'Multiplexeur 2 vers 1', formule: 'S = A·S̄ + B·S', description: 'Sélectionne une entrée selon un signal de commande.' }
    ],
    video: 'https://www.youtube.com/results?search_query=logique+combinatoire+additionneur+cours+francais'
  },

  {
    id: 'logique-sequentielle',
    numero: '14',
    categorie: 'Logique numérique',
    titre: 'Logique séquentielle',
    duree: '2 h',
    description: 'Bascules, compteurs, registres, diviseurs, mémoires.',
    chapeau: 'Un circuit séquentiel a une mémoire. Sa sortie dépend des entrées et de l\'état précédent.',
    formule: 'Q(t+1) = f(Q(t), E)',
    formuleNote: 'L\'état suivant dépend de l\'état actuel et des entrées. C\'est ce qui distingue la logique séquentielle de la logique combinatoire.',
    explication: [
      'Une bascule est un circuit qui mémorise un bit. Elle conserve sa valeur jusqu\'à ce qu\'un signal d\'horloge la fasse changer.',
      'Plusieurs types existent : bascule RS, D, JK, T. Chacune a sa table de transition. La bascule D est la plus utilisée dans les circuits synchrones.',
      'En assemblant plusieurs bascules, on obtient des compteurs, des registres à décalage, des mémoires. Ce sont les briques de tout processeur.'
    ],
    origine: {
      label: '1918 · William Eccles et Frank Jordan',
      texte: 'La bascule bistable est inventée par Eccles et Jordan en 1918, avec des tubes à vide. Elle est ensuite adaptée aux transistors dans les années 1950 et devient le composant de base de toute mémoire numérique.'
    },
    points: [
      'Mémoire d\'un bit par bascule',
      'Synchronisation par horloge',
      'Types : RS, D, JK, T',
      'Compteurs, registres, mémoires à partir des bascules'
    ],
    schemas: [
      { titre: 'Bascule D', formule: 'Q(t+1) = D', description: 'Recopie l\'entrée sur la sortie à chaque front d\'horloge.' },
      { titre: 'Compteur binaire', formule: 'f_sortie = f_horloge / 2^n', description: 'Divise la fréquence par 2 à chaque étage.' },
      { titre: 'Registre à décalage', formule: 'Q_i(t+1) = Q_{i-1}(t)', description: 'Décale les bits à chaque impulsion.' }
    ],
    video: 'https://www.youtube.com/results?search_query=logique+sequentielle+bascule+compteur+cours+francais'
  },

  {
    id: 'analogique-digital',
    numero: '15',
    categorie: 'Logique numérique',
    titre: 'Analogique / numérique',
    duree: '1 h 30',
    description: 'Convertisseurs ADC, DAC, échantillonnage, quantification.',
    chapeau: 'Le monde réel est analogique, les processeurs sont numériques. La conversion est le pont entre les deux.',
    formule: 'V_num = arrondi(V_analogique × 2^n / V_ref)',
    formuleNote: 'Un convertisseur à n bits produit 2^n niveaux. La résolution en tension vaut V_ref / 2^n.',
    explication: [
      'Un convertisseur analogique-numérique (ADC) transforme une tension continue en un nombre binaire. Un convertisseur numérique-analogique (DAC) fait l\'inverse.',
      'La conversion repose sur deux étapes : échantillonnage dans le temps, quantification en amplitude. La fréquence d\'échantillonnage doit être au moins le double de la fréquence maximale du signal, sinon on perd de l\'information.',
      'Plusieurs architectures existent. Flash, très rapide mais limitée en résolution. À approximations successives, bon compromis. Sigma-delta, très haute résolution pour l\'audio.'
    ],
    origine: {
      label: '1948 · Bell Labs',
      texte: 'Alec Reeves brevète en 1938 le principe de la modulation par impulsions codées, base de toute conversion numérique. La première application pratique est la téléphonie numérique dans les années 1960.'
    },
    points: [
      'Résolution en bits : n bits donnent 2^n niveaux',
      'Théorème de Shannon : f_échantillonnage ≥ 2 × f_max',
      'Plusieurs architectures : flash, SAR, sigma-delta',
      'La résolution limite la précision, la fréquence limite la vitesse'
    ],
    schemas: [
      { titre: 'ADC flash', formule: 'n bits → 2^n − 1 comparateurs', description: 'Très rapide, résolution limitée à 8 bits environ.' },
      { titre: 'ADC à approximations successives', formule: 'n comparaisons pour n bits', description: 'Bon compromis vitesse / résolution.' },
      { titre: 'DAC à réseau R-2R', formule: 'V_sortie = V_ref × (code / 2^n)', description: 'Utilise deux valeurs de résistances seulement.' }
    ],
    video: 'https://www.youtube.com/results?search_query=convertisseur+analogique+numerique+cours+francais'
  },

  /* ============================================================
     ÉNERGIE ET PUISSANCE
     ============================================================ */

  {
    id: 'convertisseurs',
    numero: '16',
    categorie: 'Énergie et puissance',
    titre: 'Convertisseurs de puissance',
    duree: '2 h 30',
    description: 'Hacheurs, boost, buck, buck-boost, Čuk, SEPIC.',
    chapeau: 'Un convertisseur DC-DC change une tension continue en une autre. Le rendement peut dépasser 95 pour cent.',
    formule: 'V_sortie = D × V_entrée (buck)',
    formuleNote: 'D est le rapport cyclique, compris entre 0 et 1. Pour un boost, V_sortie = V_entrée / (1 − D). Le rendement énergétique reste proche de 1.',
    explication: [
      'Un convertisseur à découpage stocke de l\'énergie dans une bobine puis la restitue à une tension différente. La commutation se fait à haute fréquence, ce qui permet des composants de petite taille.',
      'Le hacheur série (buck) abaisse la tension. Le hacheur parallèle (boost) l\'élève. Le buck-boost peut faire l\'un ou l\'autre. Le Čuk et le SEPIC ajoutent des propriétés particulières.',
      'Le rendement est excellent car les interrupteurs dissipent peu en conduction et presque rien en commutation. Les pertes viennent principalement des résistances internes et des commutations.'
    ],
    origine: {
      label: 'Années 1960 · Alimentation à découpage',
      texte: 'Les premières alimentations à découpage apparaissent dans les satellites et les ordinateurs militaires. Le principe s\'impose dans les années 1970 avec l\'électronique grand public, puis devient universel avec les chargeurs modernes.'
    },
    points: [
      'Buck abaisse la tension, boost l\'élève',
      'Rapport cyclique D contrôle la tension de sortie',
      'Rendement typique de 85 à 95 pour cent',
      'Fréquence de découpage de quelques kHz à quelques MHz'
    ],
    schemas: [
      { titre: 'Hacheur buck', formule: 'V_s = D × V_e', description: 'Abaisse la tension, utilise une bobine et un condensateur.' },
      { titre: 'Hacheur boost', formule: 'V_s = V_e / (1 − D)', description: 'Élève la tension, bobine en série avec l\'entrée.' },
      { titre: 'Buck-boost', formule: 'V_s = −V_e × D/(1 − D)', description: 'Sortie de signe opposé, tension réglable.' }
    ],
    video: 'https://www.youtube.com/results?search_query=convertisseur+dc+dc+buck+boost+cours+francais'
  },

  {
    id: 'pll',
    numero: '17',
    categorie: 'Énergie et puissance',
    titre: 'Boucles à verrouillage de phase',
    duree: '1 h 30',
    description: 'Détecteurs de phase, oscillateurs contrôlés, PLL type I et II.',
    chapeau: 'Une PLL synchronise un oscillateur sur un signal de référence. Elle sert à multiplier, filtrer ou démoduler une fréquence.',
    formule: 'f_sortie = N × f_référence',
    formuleNote: 'En multipliant la fréquence de référence par un diviseur programmable N, on obtient une fréquence de sortie multiple.',
    explication: [
      'Une PLL contient trois blocs : un comparateur de phase, un filtre passe-bas et un oscillateur contrôlé en tension. La sortie de l\'oscillateur est ramenée au comparateur pour maintenir la synchronisation.',
      'Le comparateur détecte l\'écart de phase entre le signal d\'entrée et celui de l\'oscillateur. Cet écart, filtré, ajuste la fréquence de l\'oscillateur jusqu\'à annulation.',
      'On l\'utilise pour reconstruire une horloge, démoduler un signal FM, synthétiser des fréquences, asservir un moteur. C\'est un bloc fondamental des télécommunications.'
    ],
    origine: {
      label: '1932 · Henri de Bellescize',
      texte: 'L\'ingénieur français Henri de Bellescize décrit le principe de la boucle à verrouillage de phase dans un article de 1932. La technique reste longtemps confidentielle, puis devient universelle avec les circuits intégrés dans les années 1970.'
    },
    points: [
      'Trois blocs : comparateur de phase, filtre, oscillateur',
      'Verrouillage quand les fréquences sont identiques',
      'Multiplication de fréquence par un diviseur programmable',
      'Utilisée en télécommunications, asservissement, horlogerie'
    ],
    schemas: [
      { titre: 'PLL type I', formule: 'Ordre 1, filtre simple', description: 'Simple mais erreur de phase non nulle en régime permanent.' },
      { titre: 'PLL type II', formule: 'Ordre 2, erreur de phase nulle', description: 'Utilisée quand la précision est critique.' },
      { titre: 'Synthèse de fréquence', formule: 'f_s = N × f_ref', description: 'Multiplication de fréquence stable par diviseur programmable.' }
    ],
    video: 'https://www.youtube.com/results?search_query=pll+boucle+verrouillage+phase+cours+francais'
  },

  /* ============================================================
     TRANSMISSION ET SYSTÈMES
     ============================================================ */

  {
    id: 'lignes-transmission',
    numero: '18',
    categorie: 'Transmission et systèmes',
    titre: 'Lignes de transmission',
    duree: '1 h 30',
    description: 'Lignes simples, ondes stationnaires, impédance caractéristique, adaptation.',
    chapeau: 'Quand la longueur d\'un câble devient comparable à la longueur d\'onde, il ne se comporte plus comme un simple fil.',
    formule: 'Z_c = √(L / C)',
    formuleNote: 'Impédance caractéristique d\'une ligne. Elle dépend de l\'inductance et de la capacité par unité de longueur. Pour un câble coaxial, elle vaut typiquement 50 ou 75 Ω.',
    explication: [
      'À basse fréquence, un câble conduit le signal sans le modifier. À haute fréquence, les phénomènes de propagation deviennent visibles : réflexions, ondes stationnaires, déphasage.',
      'Si la charge n\'est pas adaptée, l\'onde se réfléchit à l\'extrémité. L\'onde incidente et l\'onde réfléchie forment une onde stationnaire, avec des nœuds et des ventres de tension.',
      'L\'adaptation d\'impédance consiste à faire correspondre la charge à l\'impédance caractéristique de la ligne. Sans adaptation, une partie de la puissance est renvoyée vers la source.'
    ],
    origine: {
      label: '1855 · Lord Kelvin',
      texte: 'L\'étude des lignes télégraphiques transatlantiques révèle les problèmes de propagation. Lord Kelvin pose les premières équations. Oliver Heaviside les complète en 1880 et introduit la notion d\'impédance caractéristique.'
    },
    points: [
      'Impédance caractéristique Z_c de 50 ou 75 Ω pour les câbles courants',
      'Réflexions si la charge n\'est pas adaptée',
      'Ondes stationnaires avec nœuds et ventres',
      'Adaptation indispensable pour transmettre la puissance maximale'
    ],
    schemas: [
      { titre: 'Ligne adaptée', formule: 'Z_charge = Z_c', description: 'Toute la puissance est transmise, aucune réflexion.' },
      { titre: 'Ligne en court-circuit', formule: 'Réflexion totale, inversion', description: 'L\'onde revient déphasée de 180°.' },
      { titre: 'Ligne ouverte', formule: 'Réflexion totale, sans inversion', description: 'L\'onde revient en phase.' }
    ],
    video: 'https://www.youtube.com/results?search_query=ligne+transmission+impedance+adaptation+cours+francais'
  },

  {
    id: 'sous-circuits',
    numero: '19',
    categorie: 'Transmission et systèmes',
    titre: 'Sous-circuits',
    duree: '45 min',
    description: 'Réutilisation de blocs, hiérarchie, modularité des schémas.',
    chapeau: 'Un sous-circuit est un bloc réutilisable. On le conçoit une fois, on l\'utilise partout.',
    formule: 'Bloc(entrées) → sorties',
    formuleNote: 'Un sous-circuit encapsule une fonction. Il expose des bornes d\'entrée et de sortie, et masque les détails internes.',
    explication: [
      'Un sous-circuit permet de réutiliser un même montage plusieurs fois dans un schéma plus grand. On le définit une fois, on l\'instancie autant de fois que nécessaire.',
      'C\'est la base de la conception hiérarchique. Un amplificateur peut être un sous-circuit d\'un filtre, qui lui-même est un sous-circuit d\'un récepteur.',
      'Cette approche simplifie la lecture, facilite la maintenance, permet la réutilisation. Tous les circuits intégrés modernes sont conçus ainsi.'
    ],
    origine: {
      label: 'Années 1960 · Conception hiérarchique',
      texte: 'Avec l\'arrivée des circuits intégrés, la conception hiérarchique devient indispensable. On ne peut plus dessiner un microprocesseur à plat. Les sous-circuits permettent de décomposer le problème en blocs gérables.'
    },
    points: [
      'Bloc réutilisable avec entrées et sorties définies',
      'Base de la conception hiérarchique',
      'Facilite la lecture et la maintenance',
      'Permet la réutilisation dans plusieurs projets'
    ],
    schemas: [
      { titre: 'Sous-circuit amplificateur', formule: 'Entrée → gain → sortie', description: 'Un bloc d\'amplification réutilisable.' },
      { titre: 'Sous-circuit filtre', formule: 'Signal → filtrage → signal filtré', description: 'Un bloc de filtrage paramétrable.' }
    ],
    video: 'https://www.youtube.com/results?search_query=sous+circuit+conception+hierarchique+electronique+francais'
  },

  {
    id: 'appareils-divers',
    numero: '20',
    categorie: 'Transmission et systèmes',
    titre: 'Appareils divers',
    duree: '1 h',
    description: 'JFET, diodes tunnel, memristors, thyristors, photodiodes, triacs.',
    chapeau: 'Des composants spécialisés pour des applications particulières : commutation de puissance, mémoire, optoélectronique.',
    formule: 'Comportement spécifique',
    formuleNote: 'Chaque composant de cette famille a sa propre caractéristique. Le thyristor se déclenche par une impulsion de gâchette. Le memristor garde en mémoire sa dernière résistance.',
    explication: [
      'Le JFET est un transistor à effet de champ à jonction, précurseur du MOSFET. Il est encore utilisé pour les faibles bruits en entrée d\'amplificateurs.',
      'Le thyristor et le triac sont des interrupteurs de puissance commandés. Une impulsion sur la gâchette les rend conducteurs jusqu\'à extinction naturelle du courant.',
      'Le memristor, prédit théoriquement en 1971, a été réalisé expérimentalement en 2008. Il conserve sa résistance après extinction de la tension, ce qui en fait un candidat pour les mémoires non volatiles.'
    ],
    origine: {
      label: '1971 · Leon Chua',
      texte: 'Leon Chua, professeur à Berkeley, prédit l\'existence d\'un quatrième composant passif fondamental : le memristor. Sa réalisation expérimentale attend 37 ans, chez HP Labs, en 2008.'
    },
    points: [
      'JFET : transistor à effet de champ à jonction',
      'Thyristor et triac : interrupteurs de puissance commandés',
      'Memristor : composant à mémoire de résistance',
      'Photodiodes et LED : conversion lumière / courant'
    ],
    schemas: [
      { titre: 'Thyristor', formule: 'Conduction après impulsion de gâchette', description: 'Reste conducteur tant que le courant dépasse le seuil de maintien.' },
      { titre: 'Memristor', formule: 'R = f(charge passée)', description: 'La résistance dépend de l\'historique du courant.' }
    ],
    video: 'https://www.youtube.com/results?search_query=thyristor+triac+memristor+cours+francais'
  },

  {
    id: 'oscilloscope',
    numero: '21',
    categorie: 'Transmission et systèmes',
    titre: 'Oscilloscope 2D',
    duree: '45 min',
    description: 'Visualisation des signaux, base de temps, déclenchement, mesures.',
    chapeau: 'L\'oscilloscope est l\'œil de l\'électricien. Il montre l\'évolution d\'un signal dans le temps.',
    formule: 'T = 1 / f',
    formuleNote: 'La période est l\'inverse de la fréquence. Sur l\'écran, on mesure la période en comptant les divisions et en multipliant par la base de temps.',
    explication: [
      'L\'oscilloscope trace la tension en fonction du temps. Il permet de voir la forme d\'un signal, de mesurer son amplitude, sa fréquence, son déphasage.',
      'Le déclenchement (trigger) stabilise l\'affichage. Sans trigger, l\'image défile. Avec, elle se fige sur un point précis du signal.',
      'Les oscilloscopes modernes sont numériques. Ils échantillonnent le signal, le stockent en mémoire, puis le restituent. Cela permet des mesures automatiques et des analyses avancées.'
    ],
    origine: {
      label: '1897 · Karl Ferdinand Braun',
      texte: 'Braun invente le tube cathodique en 1897, qui équipera tous les oscilloscopes pendant près d\'un siècle. Les oscilloscopes numériques apparaissent dans les années 1980 et remplacent progressivement les tubes.'
    },
    points: [
      'Affiche la tension en fonction du temps',
      'Base de temps réglable : ms, µs, ns par division',
      'Déclenchement pour stabiliser l\'image',
      'Mesure amplitude, période, fréquence, déphasage'
    ],
    schemas: [
      { titre: 'Mesure d\'amplitude', formule: 'V = nb_divisions × calibre', description: 'On compte les divisions verticales.' },
      { titre: 'Mesure de période', formule: 'T = nb_divisions × base_temps', description: 'On compte les divisions horizontales.' },
      { titre: 'Mesure de déphasage', formule: 'φ = 360° × Δt / T', description: 'On compare deux voies.' }
    ],
    video: 'https://www.youtube.com/results?search_query=oscilloscope+utilisation+mesures+cours+francais'
  }
];