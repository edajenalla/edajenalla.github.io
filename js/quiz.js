/* ============================================================
   QUIZ — questions par module
   ============================================================ */

const Quiz = {

  /* ============================================================
     BANQUE DE QUESTIONS
     Un objet par module. Chaque entrée contient 10 questions.
     ============================================================ */

  banque: {

    /* ---------- COURANT CONTINU ---------- */
    dc: [
      { q: "Quelle est l'unité de la résistance ?", opts: ["Volt", "Ampère", "Ohm", "Watt"], correct: 2, exp: "Le ohm, noté Ω." },
      { q: "Formule de la loi d'Ohm ?", opts: ["U = R/I", "U = R×I", "U = I/R", "U = R+I"], correct: 1, exp: "U = R × I." },
      { q: "Deux résistances de 100 Ω en série donnent ?", opts: ["50 Ω", "100 Ω", "200 Ω", "400 Ω"], correct: 2, exp: "R_eq = 100 + 100 = 200 Ω." },
      { q: "Deux résistances de 100 Ω en parallèle donnent ?", opts: ["50 Ω", "100 Ω", "200 Ω", "400 Ω"], correct: 0, exp: "(100 × 100) / 200 = 50 Ω." },
      { q: "Que dit la loi des nœuds ?", opts: ["Σ U = 0", "Σ I entrant = Σ I sortant", "U = R×I", "P = U×I"], correct: 1, exp: "Conservation du courant à chaque nœud." },
      { q: "Que dit la loi des mailles ?", opts: ["Σ U = 0", "Σ I = 0", "U = R×I", "P = U×I"], correct: 0, exp: "La somme algébrique des tensions est nulle." },
      { q: "Courant dans un circuit de 12 V avec 4 Ω ?", opts: ["0,33 A", "3 A", "48 A", "16 A"], correct: 1, exp: "I = U / R = 3 A." },
      { q: "Puissance dans 10 Ω traversé par 2 A ?", opts: ["20 W", "40 W", "80 W", "5 W"], correct: 1, exp: "P = R × I² = 10 × 4 = 40 W." },
      { q: "À quoi sert le théorème de Thévenin ?", opts: ["Calculer P", "Simplifier un circuit", "Mesurer I", "Calculer f"], correct: 1, exp: "Remplacer un circuit par une source et une résistance." },
      { q: "Unité de la puissance ?", opts: ["Volt", "Ampère", "Ohm", "Watt"], correct: 3, exp: "Le watt, noté W." }
    ],

    /* ---------- COURANT ALTERNATIF ---------- */
    ac: [
      { q: "Que vaut la réactance d'une bobine ?", opts: ["X_L = 2πfL", "X_L = 1/(2πfL)", "X_L = R", "X_L = f/L"], correct: 0, exp: "X_L = 2π × f × L." },
      { q: "Que vaut la réactance d'un condensateur ?", opts: ["X_C = 2πfC", "X_C = 1/(2πfC)", "X_C = C", "X_C = fC"], correct: 1, exp: "X_C = 1 / (2π × f × C)." },
      { q: "Formule de l'impédance ?", opts: ["Z = R + X", "Z = R + jX", "Z = R × X", "Z = R / X"], correct: 1, exp: "Z est un nombre complexe." },
      { q: "Déphasage φ dans un circuit RL ?", opts: ["arctan(R / X_L)", "arctan(X_L / R)", "0", "90°"], correct: 1, exp: "φ = arctan(X_L / R)." },
      { q: "Le courant est-il en retard ou en avance dans un circuit RL ?", opts: ["En retard", "En avance", "En phase", "Dépend"], correct: 0, exp: "Le courant est en retard sur la tension." },
      { q: "Que vaut la puissance active ?", opts: ["P = U × I", "P = U × I × cos φ", "P = U × I × sin φ", "P = R × I"], correct: 1, exp: "P = U × I × cos φ." },
      { q: "Que vaut la puissance réactive ?", opts: ["P = U × I", "P = U × I × cos φ", "P = U × I × sin φ", "P = R × I"], correct: 2, exp: "Q = U × I × sin φ." },
      { q: "Relation entre P, Q et S ?", opts: ["S = P + Q", "S² = P² + Q²", "S = P × Q", "S = P / Q"], correct: 1, exp: "Triangle des puissances." },
      { q: "Fréquence de résonance d'un RLC ?", opts: ["f₀ = 2π√(LC)", "f₀ = 1/(2π√(LC))", "f₀ = LC", "f₀ = √(L/C)"], correct: 1, exp: "f₀ = 1 / (2π × √(L × C))." },
      { q: "À la résonance, l'impédance est ?", opts: ["Maximale", "Minimale, égale à R", "Nulle", "Infinie"], correct: 1, exp: "À la résonance, X_L = X_C, donc Z = R." }
    ],

    /* ---------- TRIPHASÉ ---------- */
    tri: [
      { q: "Combien de tensions composées dans un réseau triphasé ?", opts: ["1", "2", "3", "4"], correct: 2, exp: "Trois tensions entre les phases." },
      { q: "Déphasage entre deux tensions simples ?", opts: ["60°", "90°", "120°", "180°"], correct: 2, exp: "120°, un tiers de période." },
      { q: "Relation entre U composée et V simple ?", opts: ["U = V", "U = 2V", "U = √3 × V", "U = V / √3"], correct: 2, exp: "U = √3 × V, soit 400 V pour V = 230 V." },
      { q: "Dans un couplage étoile, le courant de ligne ?", opts: ["I = √3 × J", "I = J", "I = 2J", "I = J/√3"], correct: 1, exp: "I = J en étoile." },
      { q: "Dans un couplage triangle, le courant de ligne ?", opts: ["I = √3 × J", "I = J", "I = 2J", "I = J/√3"], correct: 0, exp: "I = √3 × J en triangle." },
      { q: "Dans un couplage triangle, la tension aux bornes ?", opts: ["V simple", "U composée", "√3 × U", "0"], correct: 1, exp: "La tension composée." },
      { q: "Formule de la puissance active en triphasé ?", opts: ["P = U × I", "P = √3 × U × I × cos φ", "P = 3 × U × I", "P = U × I × sin φ"], correct: 1, exp: "P = √3 × U × I × cos φ." },
      { q: "Que se passe-t-il si une phase est coupée ?", opts: ["Rien", "Le système devient déséquilibré", "La puissance double", "Le neutre compense"], correct: 1, exp: "Le système devient déséquilibré." },
      { q: "Le neutre est-il nécessaire en étoile équilibré ?", opts: ["Oui", "Non", "Parfois", "Toujours"], correct: 1, exp: "Pas strictement nécessaire si équilibré, mais utile." },
      { q: "La somme instantanée des trois tensions ?", opts: ["Vaut 3V", "Vaut V", "Est nulle", "Vaut √3 × V"], correct: 2, exp: "Elle est nulle à chaque instant." }
    ],

    /* ---------- TRANSFORMATEUR ---------- */
    transfo: [
      { q: "Rapport de transformation m ?", opts: ["U₁ / U₂", "U₂ / U₁ = N₂ / N₁", "N₁ / N₂", "U₁ × U₂"], correct: 1, exp: "m = U₂ / U₁ = N₂ / N₁." },
      { q: "Que mesure l'essai à vide ?", opts: ["Les pertes cuivre", "Les pertes fer", "Le rendement", "La fréquence"], correct: 1, exp: "Les pertes fer, indépendantes de la charge." },
      { q: "Que mesure l'essai en court-circuit ?", opts: ["Les pertes fer", "Les pertes cuivre", "Le rapport", "Le rendement"], correct: 1, exp: "Les pertes cuivre, qui varient avec le courant." },
      { q: "Le courant à vide est ?", opts: ["Élevé", "Faible, 2 à 5 % du nominal", "Nul", "Égal au courant nominal"], correct: 1, exp: "Il reste faible, quelques pour cent du nominal." },
      { q: "Formule du rendement ?", opts: ["P₂ / P₁", "P₁ / P₂", "P₁ − P₂", "P₂ × P₁"], correct: 0, exp: "η = P₂ / (P₂ + P_fer + P_cuivre)." },
      { q: "Quand le rendement est-il maximal ?", opts: ["À vide", "En court-circuit", "Quand P_fer = P_cuivre", "Toujours"], correct: 2, exp: "Quand les pertes fer égalent les pertes cuivre." },
      { q: "Les pertes fer dépendent-elles de la charge ?", opts: ["Oui", "Non", "Un peu", "Au carré"], correct: 1, exp: "Non, elles sont constantes." },
      { q: "Les pertes cuivre varient avec ?", opts: ["La tension", "Le carré du courant", "La fréquence", "La température"], correct: 1, exp: "P_cuivre = R × I²." },
      { q: "Un transformateur parfait a un rendement de ?", opts: ["50 %", "80 %", "100 %", "Variable"], correct: 2, exp: "100 %, mais aucun transformateur réel n'est parfait." },
      { q: "Le transformateur fonctionne en ?", opts: ["Continu", "Alternatif", "Les deux", "Ni l'un ni l'autre"], correct: 1, exp: "Il ne fonctionne qu'en alternatif." }
    ],

    /* ---------- ÉLECTRONIQUE FONDAMENTALE ---------- */
    electronique: [
      { q: "La loi d'Ohm s'écrit ?", opts: ["U = R / I", "U = R × I", "U = I / R", "U = R + I"], correct: 1, exp: "U = R × I." },
      { q: "Constante de temps d'un circuit RC ?", opts: ["τ = R + C", "τ = R × C", "τ = R / C", "τ = C / R"], correct: 1, exp: "τ = R × C, en secondes." },
      { q: "Formule du pont diviseur de tension ?", opts: ["U₂ = U × R₁ / (R₁ + R₂)", "U₂ = U × R₂ / (R₁ + R₂)", "U₂ = U × (R₁ + R₂)", "U₂ = U / (R₁ × R₂)"], correct: 1, exp: "La sortie prélève une fraction de la tension d'entrée." },
      { q: "La tension aux bornes d'un condensateur qui se charge tend vers ?", opts: ["0", "La tension d'alimentation", "L'infini", "Une valeur négative"], correct: 1, exp: "Elle tend vers la tension d'alimentation." },
      { q: "Impédance d'un condensateur en alternatif ?", opts: ["Z = R + jX_C", "Z = R − jX_C", "Z = jX_C pur", "Z = R seulement"], correct: 1, exp: "Z = R − jX_C dans un circuit RC série." },
      { q: "Un filtre RC passe-bas a une fréquence de coupure ?", opts: ["f_c = 2πRC", "f_c = 1/(2πRC)", "f_c = RC", "f_c = 1/RC"], correct: 1, exp: "f_c = 1 / (2πRC)." },
      { q: "Combien de types de sources contrôlées existent ?", opts: ["2", "3", "4", "5"], correct: 2, exp: "VCVS, VCCS, CCVS, CCCS." },
      { q: "Le pont de Wheatstone sert à ?", opts: ["Mesurer une résistance inconnue", "Amplifier", "Filtrer", "Moduler"], correct: 0, exp: "Mesure par équilibrage, méthode très précise." },
      { q: "Quel composant stocke l'énergie sous forme magnétique ?", opts: ["Résistance", "Condensateur", "Bobine", "Diode"], correct: 2, exp: "La bobine stocke l'énergie magnétique." },
      { q: "Quel composant stocke l'énergie sous forme électrique ?", opts: ["Résistance", "Condensateur", "Bobine", "Transistor"], correct: 1, exp: "Le condensateur stocke la charge." }
    ],

    /* ---------- SEMI-CONDUCTEURS ---------- */
    'semi-conducteurs': [
      { q: "Tension de seuil d'une diode silicium ?", opts: ["0,3 V", "0,7 V", "1,5 V", "3 V"], correct: 1, exp: "Environ 0,7 V pour le silicium." },
      { q: "Une diode conduit dans ?", opts: ["Un seul sens", "Les deux sens", "Aucun sens", "Selon la température"], correct: 0, exp: "De l'anode vers la cathode." },
      { q: "Formule du redressement simple alternance ?", opts: ["V_moy = V_max", "V_moy = V_max / π", "V_moy = 2 × V_max / π", "V_moy = 0"], correct: 1, exp: "Une seule alternance est redressée." },
      { q: "Un transistor bipolaire a ?", opts: ["2 bornes", "3 bornes", "4 bornes", "5 bornes"], correct: 1, exp: "Base, collecteur, émetteur." },
      { q: "Relation entre I_C, I_B et β ?", opts: ["I_C = I_B / β", "I_C = β × I_B", "I_C = β + I_B", "I_C = I_B"], correct: 1, exp: "I_C = β × I_B." },
      { q: "Le gain β d'un transistor vaut typiquement ?", opts: ["1 à 5", "10 à 20", "50 à 500", "1000 à 10000"], correct: 2, exp: "Entre 50 et 500 selon les modèles." },
      { q: "Un MOSFET se commande par ?", opts: ["Un courant de base", "Une tension de grille", "Un courant de drain", "Une tension de source"], correct: 1, exp: "La grille est isolée, commandée par tension." },
      { q: "Dans un MOSFET, la tension de seuil V_th vaut typiquement ?", opts: ["0,1 V", "0,7 V", "2 à 4 V", "10 V"], correct: 2, exp: "Entre 2 et 4 V pour les MOSFET de puissance." },
      { q: "Lequel n'est PAS un semi-conducteur ?", opts: ["Diode", "Transistor", "Relais", "MOSFET"], correct: 2, exp: "Le relais est un composant électromécanique." },
      { q: "Une diode Zener conduit ?", opts: ["En direct uniquement", "En inverse à une tension précise", "Jamais", "Toujours"], correct: 1, exp: "Elle stabilise la tension en conduisant en inverse." }
    ],

    /* ---------- AMPLIFICATION ---------- */
    amplification: [
      { q: "Un amplificateur opérationnel a combien d'entrées ?", opts: ["1", "2", "3", "4"], correct: 1, exp: "Une inverseuse et une non inverseuse." },
      { q: "Gain en boucle ouverte d'un AOP typique ?", opts: ["100", "1 000", "100 000", "1 million"], correct: 2, exp: "Supérieur à 100 000 pour les AOP courants." },
      { q: "En contre-réaction, quelle égalité s'applique ?", opts: ["V⁺ = V⁻", "V⁺ = 2V⁻", "V⁺ = 0", "V⁻ = 0"], correct: 0, exp: "Masse virtuelle entre les deux entrées." },
      { q: "Gain d'un amplificateur non inverseur ?", opts: ["A = R₂/R₁", "A = 1 + R₂/R₁", "A = −R₂/R₁", "A = R₁/R₂"], correct: 1, exp: "A = 1 + R₂/R₁." },
      { q: "Gain d'un amplificateur inverseur ?", opts: ["A = R₂/R₁", "A = 1 + R₂/R₁", "A = −R₂/R₁", "A = R₁/R₂"], correct: 2, exp: "A = −R₂/R₁, signe négatif." },
      { q: "Le NE555 est un ?", opts: ["Amplificateur", "Minuteur", "Comparateur", "Filtre"], correct: 1, exp: "Un circuit intégré de minuterie." },
      { q: "Formule du monostable 555 ?", opts: ["T = RC", "T = 1,1 × R × C", "T = 2RC", "T = RC/2"], correct: 1, exp: "T = 1,1 × R × C." },
      { q: "Le NE555 peut fonctionner en ?", opts: ["Monostable seulement", "Astable seulement", "Bistable seulement", "Monostable, astable ou bistable"], correct: 3, exp: "Trois modes selon le câblage." },
      { q: "Un intégrateur à AOP produit une sortie ?", opts: ["Proportionnelle à l'entrée", "Proportionnelle à la dérivée", "Proportionnelle à l'intégrale", "Constante"], correct: 2, exp: "Sortie proportionnelle à l'intégrale de l'entrée." },
      { q: "Un comparateur à AOP a une sortie ?", opts: ["Linéaire", "Saturée dans un sens ou l'autre", "Nulle", "Alternative"], correct: 1, exp: "La sortie sature selon le signe de V⁺ − V⁻." }
    ],

    /* ---------- FILTRAGE ---------- */
    filtrage: [
      { q: "Un filtre passe-bas laisse passer ?", opts: ["Les hautes fréquences", "Les basses fréquences", "Une seule fréquence", "Aucune fréquence"], correct: 1, exp: "Il atténue au-delà de la fréquence de coupure." },
      { q: "Fréquence de coupure d'un RC passe-bas ?", opts: ["f_c = 2πRC", "f_c = 1/(2πRC)", "f_c = RC", "f_c = 1/RC"], correct: 1, exp: "f_c = 1 / (2πRC)." },
      { q: "Pente d'un filtre du premier ordre ?", opts: ["10 dB/décade", "20 dB/décade", "40 dB/décade", "60 dB/décade"], correct: 1, exp: "20 dB par décade et par ordre." },
      { q: "Filtre de Butterworth ?", opts: ["Ondulation acceptée", "Bande passante la plus plate", "Retard constant", "Très rapide"], correct: 1, exp: "Sa bande passante est la plus plate possible." },
      { q: "Filtre de Bessel ?", opts: ["Bande passante plate", "Ondulation", "Retard constant", "Résonance"], correct: 2, exp: "Il préserve la forme des impulsions." },
      { q: "Filtre de Tchebychev ?", opts: ["Bande passante plate", "Ondulation acceptée", "Retard constant", "Instable"], correct: 1, exp: "Ondulation dans la bande passante en échange d'une pente raide." },
      { q: "Le montage Sallen-Key utilise ?", opts: ["Un AOP et des RC", "Uniquement des RC", "Uniquement des RL", "Des bobines"], correct: 0, exp: "Un AOP, deux résistances, deux condensateurs." },
      { q: "Un filtre passe-haut atténue ?", opts: ["Les hautes fréquences", "Les basses fréquences", "La fréquence centrale", "Aucune"], correct: 1, exp: "Il atténue en dessous de la fréquence de coupure." },
      { q: "Un filtre passe-bande RLC a une bande passante ?", opts: ["B = R / (2πL)", "B = 2πL / R", "B = RL", "B = R + L"], correct: 0, exp: "B = R / (2πL)." },
      { q: "L'ordre d'un filtre détermine ?", opts: ["La couleur", "La pente d'atténuation", "La tension d'alim", "Rien"], correct: 1, exp: "Chaque ordre ajoute 20 dB par décade." }
    ],

    /* ---------- LOGIQUE NUMÉRIQUE ---------- */
    logique: [
      { q: "Combien de niveaux logiques dans un système binaire ?", opts: ["1", "2", "3", "10"], correct: 1, exp: "Deux : 0 et 1." },
      { q: "Famille logique la plus rapide ?", opts: ["RTL", "TTL", "CMOS", "ECL"], correct: 3, exp: "ECL est la plus rapide, mais consomme beaucoup." },
      { q: "Alimentation typique d'un circuit TTL ?", opts: ["3,3 V", "5 V", "12 V", "24 V"], correct: 1, exp: "La famille TTL fonctionne en 5 V." },
      { q: "Avantage principal du CMOS ?", opts: ["Rapidité", "Consommation statique quasi nulle", "Prix élevé", "Alimentation élevée"], correct: 1, exp: "Le CMOS consomme très peu en statique." },
      { q: "La sortie d'un OU exclusif vaut 1 si ?", opts: ["A = B", "A ≠ B", "A = 0", "B = 0"], correct: 1, exp: "S = 1 quand les entrées diffèrent." },
      { q: "Un additionneur complet additionne ?", opts: ["Deux bits", "Deux bits et une retenue", "Trois bits sans retenue", "Un bit"], correct: 1, exp: "A, B et la retenue entrante." },
      { q: "Un multiplexeur sert à ?", opts: ["Additionner", "Sélectionner une entrée parmi plusieurs", "Mémoriser", "Comparer"], correct: 1, exp: "Il sélectionne une entrée selon un signal de commande." },
      { q: "Une bascule D recopie l'entrée sur la sortie ?", opts: ["En permanence", "À chaque front d'horloge", "Jamais", "Aléatoirement"], correct: 1, exp: "Au front montant ou descendant de l'horloge." },
      { q: "Un compteur binaire divise la fréquence par ?", opts: ["2 à chaque étage", "10", "100", "1"], correct: 0, exp: "Chaque bascule divise par 2." },
      { q: "Théorème d'échantillonnage de Shannon ?", opts: ["f_e ≥ f_max", "f_e ≥ 2 × f_max", "f_e ≤ f_max", "f_e = f_max"], correct: 1, exp: "La fréquence d'échantillonnage doit être au moins le double de la fréquence maximale." }
    ],

    /* ---------- ÉNERGIE ET PUISSANCE ---------- */
    energie: [
      { q: "Un convertisseur buck ?", opts: ["Élève la tension", "Abaisse la tension", "Inverse la tension", "Redresse"], correct: 1, exp: "Buck abaisse, boost élève." },
      { q: "Formule de la tension de sortie d'un buck ?", opts: ["V_s = V_e / D", "V_s = D × V_e", "V_s = V_e + D", "V_s = V_e − D"], correct: 1, exp: "V_s = D × V_e, avec D le rapport cyclique." },
      { q: "Rendement typique d'un convertisseur à découpage ?", opts: ["50 %", "70 %", "85 à 95 %", "100 %"], correct: 2, exp: "Le rendement dépasse souvent 90 %." },
      { q: "Le rapport cyclique D est compris entre ?", opts: ["-1 et 1", "0 et 1", "0 et 10", "1 et 100"], correct: 1, exp: "D est un pourcentage de la période." },
      { q: "Un hacheur boost ?", opts: ["Abaisse", "Élève la tension", "Inverse", "Ne change rien"], correct: 1, exp: "Il élève la tension de sortie au-dessus de l'entrée." },
      { q: "Une PLL contient ?", opts: ["Un amplificateur", "Un comparateur de phase", "Un filtre", "Un oscillateur"], correct: 1, exp: "Un comparateur de phase, un filtre et un oscillateur." },
      { q: "Quand la PLL est verrouillée ?", opts: ["Les fréquences diffèrent", "Les fréquences sont identiques", "Aucune des deux", "Dépend"], correct: 1, exp: "La sortie suit la référence en fréquence et en phase." },
      { q: "La PLL sert à ?", opts: ["Amplifier", "Multiplier ou démoduler une fréquence", "Redresser", "Convertir DC-DC"], correct: 1, exp: "Synthèse de fréquence, démodulation, asservissement." },
      { q: "Un convertisseur buck-boost ?", opts: ["Élève seulement", "Abaisse seulement", "Peut élever ou abaisser", "Ne fait rien"], correct: 2, exp: "Il fait l'un ou l'autre selon le rapport cyclique." },
      { q: "Le Čuk et le SEPIC sont ?", opts: ["Des diodes", "Des convertisseurs DC-DC", "Des filtres", "Des amplificateurs"], correct: 1, exp: "Ce sont des variantes de convertisseurs à découpage." }
    ],

    /* ---------- TRANSMISSION ---------- */
    transmission: [
      { q: "Impédance caractéristique d'un câble coaxial courant ?", opts: ["10 Ω", "50 ou 75 Ω", "200 Ω", "1 kΩ"], correct: 1, exp: "50 ou 75 Ω selon l'usage." },
      { q: "Formule de l'impédance caractéristique ?", opts: ["Z_c = L × C", "Z_c = √(L/C)", "Z_c = L/C", "Z_c = √(LC)"], correct: 1, exp: "Z_c = √(L/C), L et C par unité de longueur." },
      { q: "Que se passe-t-il si la charge n'est pas adaptée ?", opts: ["Rien", "Réflexions", "Amplification", "Court-circuit"], correct: 1, exp: "Une partie de l'onde se réfléchit." },
      { q: "Condition d'adaptation ?", opts: ["Z_charge = 0", "Z_charge = Z_c", "Z_charge = ∞", "Z_charge = R_source"], correct: 1, exp: "La charge égale l'impédance caractéristique." },
      { q: "Sur une ligne en court-circuit, l'onde réfléchie ?", opts: ["Disparaît", "Revient en phase", "Revient déphasée de 180°", "S'amplifie"], correct: 2, exp: "Réflexion totale avec inversion." },
      { q: "Un sous-circuit sert à ?", opts: ["Amplifier", "Réutiliser un bloc", "Filtrer", "Convertir"], correct: 1, exp: "Encapsuler une fonction réutilisable." },
      { q: "Le JFET est un ?", opts: ["Transistor à jonction", "Diode", "Filtre", "Amplificateur opérationnel"], correct: 0, exp: "Transistor à effet de champ à jonction." },
      { q: "Le thyristor se commande par ?", opts: ["Une tension de grille", "Une impulsion de gâchette", "Un courant de base", "La température"], correct: 1, exp: "Il reste conducteur jusqu'à extinction du courant." },
      { q: "Le memristor a été prédit en ?", opts: ["1950", "1971", "1990", "2008"], correct: 1, exp: "Prédit par Leon Chua en 1971, réalisé en 2008." },
      { q: "L'oscilloscope affiche ?", opts: ["Une tension en fonction du temps", "Un courant seulement", "Une fréquence seulement", "Une résistance"], correct: 0, exp: "Il trace la tension au cours du temps." }
    ]
  },

  /* ============================================================
     ÉTAT DU QUIZ EN COURS
     ============================================================ */

  currentModule: null,
  questions: [],
  index: 0,
  score: 0,
  answers: [],
  selected: null,
  timer: null,
  elapsed: 0,

  /* ============================================================
     INITIALISATION
     ============================================================ */

  init() {
    this.buildPicker();

    document.getElementById('btnStart')?.addEventListener('click', () => this.demarrer());
    document.getElementById('btnBackToSelect')?.addEventListener('click', () => this.backToSelect());
    document.getElementById('btnBackFromResult')?.addEventListener('click', () => this.backToSelect());
    document.getElementById('btnRestart')?.addEventListener('click', () => this.demarrer());
    document.getElementById('qValidate')?.addEventListener('click', () => this.valider());
    document.getElementById('qNext')?.addEventListener('click', () => this.suivante());

    // Si un module est passé en paramètre d'URL
    const params = new URLSearchParams(window.location.search);
    const mod = params.get('module');
    if (mod && this.banque[mod]) this.selectModule(mod);
  },

  buildPicker() {
    const picker = document.getElementById('quizPicker');
    if (!picker || typeof MODULES === 'undefined') return;

    const ordreCategories = ['Fondamentaux', 'Énergie', 'Analogique', 'Numérique'];
    const nomsCategories = {
      'Fondamentaux': 'Les fondamentaux',
      'Énergie': 'Énergie et puissance',
      'Analogique': 'Électronique analogique',
      'Numérique': 'Numérique et transmission'
    };

    let html = '';

    ordreCategories.forEach(cat => {
      const modules = MODULES.filter(m => m.categorie === cat && this.banque[m.id]);
      if (!modules.length) return;

      html += '<div class="quiz-category">';
      html += '<h3 class="quiz-category-title mono">' + nomsCategories[cat] + '</h3>';
      html += '<div class="quiz-grid">';

      modules.forEach(m => {
        html +=
          '<button class="quiz-pick-card" data-module="' + m.id + '">' +
            '<span class="qpc-num mono">' + m.numero + '</span>' +
            '<strong class="qpc-titre">' + m.titre + '</strong>' +
            '<span class="qpc-desc">' + m.description + '</span>' +
            '<span class="qpc-meta mono">10 questions · 15 min</span>' +
          '</button>';
      });

      html += '</div></div>';
    });

    picker.innerHTML = html;

    picker.querySelectorAll('.quiz-pick-card').forEach(card => {
      card.addEventListener('click', () => this.selectModule(card.dataset.module));
    });
  },

  selectModule(id) {
    const mod = MODULES.find(m => m.id === id);
    if (!mod || !this.banque[id]) return;

    this.currentModule = id;

    document.getElementById('quizSelect').hidden = true;
    document.getElementById('quizResult').hidden = true;
    document.getElementById('quizQuestion').hidden = true;
    document.getElementById('quizIntro').hidden = false;

    document.getElementById('introEyebrow').textContent = 'Quiz · ' + mod.categorie;
    document.getElementById('introTitle').textContent = mod.titre;
    document.getElementById('introDesc').textContent = mod.description;
  },

  backToSelect() {
    document.getElementById('quizSelect').hidden = false;
    document.getElementById('quizIntro').hidden = true;
    document.getElementById('quizQuestion').hidden = true;
    document.getElementById('quizResult').hidden = true;
    this.currentModule = null;
  },

  /* ============================================================
     DÉROULEMENT
     ============================================================ */

  demarrer() {
    if (!this.currentModule) return;
    const questions = this.banque[this.currentModule];
    if (!questions) return;

    this.questions = [...questions];
    this.index = 0;
    this.score = 0;
    this.answers = [];
    this.elapsed = 0;

    document.getElementById('quizSelect').hidden = true;
    document.getElementById('quizIntro').hidden = true;
    document.getElementById('quizResult').hidden = true;
    document.getElementById('quizQuestion').hidden = false;
    document.getElementById('qTotal').textContent = this.questions.length;

    this.startTimer();
    this.afficher();
  },

  startTimer() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.elapsed++;
      const m = String(Math.floor(this.elapsed / 60)).padStart(2, '0');
      const s = String(this.elapsed % 60).padStart(2, '0');
      const el = document.getElementById('qTimer');
      if (el) el.textContent = m + ':' + s;
    }, 1000);
  },

  afficher() {
    const q = this.questions[this.index];
    this.selected = null;

    document.getElementById('qCurrent').textContent = this.index + 1;
    document.getElementById('qFill').style.width = (this.index / this.questions.length * 100) + '%';
    document.getElementById('qText').textContent = q.q;

    const opts = document.getElementById('qOptions');
    opts.innerHTML = q.opts.map((o, i) =>
      '<div class="quiz-option" data-index="' + i + '">' +
        '<span class="letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span>' + o + '</span>' +
      '</div>'
    ).join('');

    opts.querySelectorAll('.quiz-option').forEach(el => {
      el.addEventListener('click', () => this.select(parseInt(el.dataset.index)));
    });

    document.getElementById('qFeedback').hidden = true;
    document.getElementById('qValidate').hidden = false;
    document.getElementById('qNext').hidden = true;
  },

  select(i) {
    if (this.selected !== null) return;
    this.selected = i;
    document.querySelectorAll('.quiz-option').forEach((o, idx) => {
      o.classList.toggle('selected', idx === i);
    });
  },

  valider() {
    if (this.selected === null) { Notify.warning('Sélectionnez une réponse'); return; }
    const q = this.questions[this.index];
    const ok = this.selected === q.correct;
    if (ok) this.score++;
    this.answers.push(ok);

    document.querySelectorAll('.quiz-option').forEach((o, i) => {
      o.classList.remove('selected');
      if (i === q.correct) o.classList.add('correct');
      if (i === this.selected && !ok) o.classList.add('incorrect');
      o.style.pointerEvents = 'none';
    });

    const fb = document.getElementById('qFeedback');
    fb.textContent = (ok ? 'Correct. ' : 'Incorrect. ') + q.exp;
    fb.hidden = false;

    document.getElementById('qValidate').hidden = true;
    const next = document.getElementById('qNext');
    next.hidden = false;
    next.textContent = this.index === this.questions.length - 1 ? 'Voir le résultat' : 'Question suivante';
  },

  suivante() {
    this.index++;
    if (this.index >= this.questions.length) this.resultat();
    else this.afficher();
  },

  resultat() {
    clearInterval(this.timer);
    document.getElementById('quizQuestion').hidden = true;
    document.getElementById('quizResult').hidden = false;

    const total = this.questions.length;
    const pct = Math.round(this.score / total * 100);
    const ok = pct >= 70;

    document.getElementById('rTitle').textContent = ok ? 'Réussi' : 'À retravailler';
    document.getElementById('rMessage').textContent = ok
      ? 'Vous avez atteint le seuil de sept sur dix.'
      : 'Le seuil de sept sur dix n\'est pas atteint.';
    document.getElementById('rScore').textContent = this.score;

    document.getElementById('rDetails').innerHTML = this.answers.map((a, i) =>
      '<span class="' + (a ? 'ok' : 'ko') + '">' + (i + 1) + '</span>'
    ).join('');

    Storage.saveQuizResult({
      module: this.currentModule,
      score: this.score,
      total,
      pourcentage: pct,
      temps: this.elapsed
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Quiz.init());