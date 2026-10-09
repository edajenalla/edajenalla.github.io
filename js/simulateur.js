/**
 * ============================================================
 *  simulateur.js — Contrôle de l'iframe CircuitJS1
 *  Projet : virtu-lab (ENSET Antsiranana - STI)
 * ============================================================
 *  Ce fichier fait le lien entre ton site et le moteur
 *  de simulation CircuitJS1 (qui vit dans une iframe).
 * ============================================================
 */

// ============================================================
// 1. VARIABLES GLOBALES
// ============================================================

let sim = null;              // Référence à l'objet CircuitJS1
let iframe = null;           // Référence à l'élément <iframe>
let circuitActuel = null;    // Nom du circuit en cours
let simulationEnCours = false;

// Liste de tes circuits disponibles (à terme, tu la liras depuis data/circuits.json)
const CIRCUITS = {
  "diviseur_tension": {
    nom: "Diviseur de tension DC",
    fichier: "ohms.txt",
    module: "dc",
    description: "Calcul de la tension de sortie d'un pont diviseur"
  },
  "rc_serie": {
    nom: "Circuit RC série",
    fichier: "delayrc.txt",
    module: "ac",
    description: "Étude du déphasage et de l'impédance d'un circuit RC"
  },
  "transfo_mono": {
    nom: "Transformateur monophasé",
    fichier: "transformer.txt",
    module: "transfo",
    description: "Rapport de transformation et essai à vide"
  }
};

const EXEMPLES = {
  "dc-ohm": "ohms.txt",
  "dc-serie": "res-series.txt",
  "dc-parallele": "resistors.txt",
  "dc-kirchhoff": "resistors.txt",
  "dc-thevenin": "thevenin.txt",
  "ac-rl": "lrc.txt",
  "ac-rc": "delayrc.txt",
  "ac-resonance": "lrc.txt",
  "ac-puissances": "powerfactor1.txt",
  "transfo-vide": "transformer.txt",
  "transfo-cc": "transformer.txt",
  "transfo-rendement": "transformer.txt",
  "tri-equilibre": "3phasewye.txt",
  "tri-etoile": "3phasewye.txt",
  "tri-triangle": "3phasewye.txt"
};

// ============================================================
// 2. INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  iframe = document.getElementById('circuitFrame');

  if (!iframe) {
    console.warn("⚠️ Aucune iframe #circuitFrame trouvée sur cette page.");
    return;
  }

  // On attend que le simulateur ait fini de charger
  iframe.addEventListener('load', initialiserSimulateur);
  const exemple = new URLSearchParams(window.location.search).get('example');
  if (exemple) chargerCircuit(exemple);

  // On branche les boutons de contrôle s'ils existent
  brancherBoutons();
});


/**
 * Initialise la connexion avec l'objet CircuitJS1 une fois l'iframe prête.
 */
function initialiserSimulateur() {
  try {
    // CircuitJS1 expose son API dans le window de l'iframe
    sim = iframe.contentWindow.CircuitJS1;

    if (!sim) {
      // Le simulateur n'est pas encore totalement prêt, on réessaie
      setTimeout(initialiserSimulateur, 300);
      return;
    }

    console.log("✅ Simulateur CircuitJS1 prêt !");

    // On applique les réglages par défaut
    configurerSimulateur();

    // On prévient le reste du site que le simulateur est opérationnel
    document.dispatchEvent(new CustomEvent('simulateurPret'));

  } catch (err) {
    console.error("❌ Erreur d'initialisation du simulateur :", err);
    // On réessaie dans 500 ms (le temps que GWT finisse de charger)
    setTimeout(initialiserSimulateur, 500);
  }
}


/**
 * Applique les réglages par défaut du simulateur.
 */
function configurerSimulateur() {
  if (!sim) return;

  // Démarre la simulation
  sim.setSimRunning(true);
  simulationEnCours = true;

  // Force un fond clair (plus lisible pour un site pédagogique)
  // Décommente les lignes suivantes si tu veux les activer :
  // sim.setWhiteBackground(true);
  // sim.setConventionalCurrent(true);
}


// ============================================================
// 3. CONTRÔLE DE LA SIMULATION (Démarrer / Arrêter / Reset)
// ============================================================

/**
 * Démarre ou arrête la simulation.
 */
function basculerSimulation() {
  if (!sim) return;

  simulationEnCours = !simulationEnCours;
  sim.setSimRunning(simulationEnCours);

  const btn = document.getElementById('btnPlayPause');
  if (btn) {
    btn.textContent = simulationEnCours ? '⏸️ Pause' : '▶️ Démarrer';
  }
}


/**
 * Remet la simulation à zéro (t = 0).
 */
function reinitialiserSimulation() {
  if (!sim) return;
  sim.resetAction();
  sim.setSimRunning(simulationEnCours);
}


// ============================================================
// 4. CHARGEMENT D'UN CIRCUIT
// ============================================================

/**
 * Charge un circuit dans le simulateur.
 * @param {string} cleCircuit - Clé du circuit dans l'objet CIRCUITS
 */
function chargerCircuit(cleCircuit) {
  const circuit = CIRCUITS[cleCircuit];
  const fichier = circuit ? circuit.fichier : EXEMPLES[cleCircuit];

  if (!fichier) {
    console.error(`❌ Circuit inconnu : ${cleCircuit}`);
    return;
  }

  circuitActuel = cleCircuit;

  sim = null;
  const nouvelleUrl = new URL('circuit/war/circuitjs.html', document.baseURI);
  nouvelleUrl.searchParams.set('startCircuit', fichier);
  iframe.src = nouvelleUrl.href;

  console.log(`📂 Chargement du circuit : ${circuit ? circuit.nom : fichier}`);
}


// ============================================================
// 5. LECTURE DES VALEURS (pour la correction automatique)
// ============================================================

/**
 * Lit la tension sur un nœud nommé du circuit.
 * @param {string} nomNoeud - Le label du nœud (ex: "vsense")
 * @returns {number} La tension en volts
 */
function lireTension(nomNoeud) {
  if (!sim) return null;
  return sim.getNodeVoltage(nomNoeud);
}


/**
 * Surveille en continu une tension et met à jour un élément HTML.
 * @param {string} nomNoeud - Label du nœud à surveiller
 * @param {string} idElement - ID de l'élément HTML à mettre à jour
 * @param {number} intervalle - Intervalle en ms (500 par défaut)
 */
function surveillerTension(nomNoeud, idElement, intervalle = 500) {
  setInterval(() => {
    if (!sim) return;
    const valeur = lireTension(nomNoeud);
    const el = document.getElementById(idElement);
    if (el && valeur !== null && valeur !== undefined) {
      el.textContent = valeur.toFixed(2) + " V";
    }
  }, intervalle);
}


// ============================================================
// 6. BRANCHEMENT DES BOUTONS DE L'INTERFACE
// ============================================================

function brancherBoutons() {
  const btnPlayPause = document.getElementById('btnPlayPause');
  if (btnPlayPause) {
    btnPlayPause.addEventListener('click', basculerSimulation);
  }

  const btnReset = document.getElementById('btnReset');
  if (btnReset) {
    btnReset.addEventListener('click', reinitialiserSimulation);
  }

  // Boutons de sélection de circuit
  document.querySelectorAll('[data-circuit]').forEach(btn => {
    btn.addEventListener('click', () => {
      chargerCircuit(btn.dataset.circuit);
    });
  });
}


// ============================================================
// 7. EXPORT DES FONCTIONS (pour utilisation dans d'autres scripts)
// ============================================================

window.Simulateur = {
  basculerSimulation,
  reinitialiserSimulation,
  chargerCircuit,
  lireTension,
  surveillerTension,
  get sim() { return sim; }
};