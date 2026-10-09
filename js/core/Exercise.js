const Exercise = {
  active: null,
  currentStep: 0,

  exercises: [
    {
      id: 'ex-ohm',
      titre: "Vérifier la loi d'Ohm",
      description: "Construisez un circuit avec une pile de 9 V et une résistance de 100 Ω.",
      objectif: "I = 0.09 A",
      etapes: [
        { instruction: "Placez une pile de 9 V", verify: (c) => c.some(x => x.type === 'battery' && Math.abs(x.value - 9) < 0.1) },
        { instruction: "Placez une résistance de 100 Ω", verify: (c) => c.some(x => x.type === 'resistor' && Math.abs(x.value - 100) < 1) },
        { instruction: "Connectez la pile à la résistance", verify: (c, co) => co.length >= 2 },
        { instruction: "Lancez la simulation", verify: (c) => { const r = c.find(x => x.type === 'resistor'); return r && Math.abs(Math.abs(r.current) - 0.09) < 0.01; } }
      ]
    },
    {
      id: 'ex-serie',
      titre: "Circuit série",
      description: "Pile 12 V + deux résistances de 100 Ω en série.",
      objectif: "I = 0.06 A",
      etapes: [
        { instruction: "Placez une pile de 12 V", verify: (c) => c.some(x => x.type === 'battery' && Math.abs(x.value - 12) < 0.1) },
        { instruction: "Placez deux résistances de 100 Ω", verify: (c) => c.filter(x => x.type === 'resistor' && Math.abs(x.value - 100) < 1).length >= 2 },
        { instruction: "Connectez en série", verify: (c, co) => co.length >= 3 },
        { instruction: "Vérifiez I ≈ 0.06 A", verify: (c) => { const r = c.find(x => x.type === 'resistor'); return r && Math.abs(Math.abs(r.current) - 0.06) < 0.01; } }
      ]
    }
  ],

  start(exerciseId) {
    const ex = this.exercises.find(e => e.id === exerciseId);
    if (!ex) return;
    this.active = { ...ex, etapes: ex.etapes.map(e => ({ ...e, done: false })) };
    this.currentStep = 0;
    this.showPanel();
    this.updatePanel();
    Simulateur.effacer();
  },

  stop() {
    this.active = null;
    this.currentStep = 0;
    const p = document.getElementById('exercisePanel');
    if (p) p.style.display = 'none';
  },

  showPanel() {
    let panel = document.getElementById('exercisePanel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'exercisePanel';
      panel.className = 'exercise-panel';
      const layout = document.querySelector('.sim-layout');
      if (layout) layout.prepend(panel);
    }
    panel.style.display = 'flex';
  },

  updatePanel() {
    if (!this.active) return;
    const panel = document.getElementById('exercisePanel');
    if (!panel) return;
    const ex = this.active;

    panel.innerHTML = `
      <div class="exercise-header">
        <div>
          <div class="exercise-tag">EXERCICE GUIDÉ</div>
          <h3 class="exercise-title">${ex.titre}</h3>
        </div>
        <button class="exercise-close" onclick="Exercise.stop()">${Icons.close}</button>
      </div>
      <p class="exercise-desc">${ex.description}</p>
      <div class="exercise-objective">
        <span class="objective-label">Objectif</span>
        <span class="objective-value">${ex.objectif}</span>
      </div>
      <div class="exercise-steps">
        ${ex.etapes.map((e, i) => `
          <div class="exercise-step ${e.done ? 'done' : ''} ${i === this.currentStep ? 'current' : ''}">
            <div class="step-marker">${e.done ? Icons.check : `<span>${i + 1}</span>`}</div>
            <div class="step-content"><div class="step-instruction">${e.instruction}</div></div>
          </div>
        `).join('')}
      </div>
      <div class="exercise-actions">
        <button class="btn btn-ghost btn-sm" onclick="Exercise.verify()">Vérifier</button>
        <button class="btn btn-ghost btn-sm" onclick="Exercise.hint()">Indice</button>
      </div>
    `;
  },

  verify() {
    if (!this.active) return;
    const step = this.active.etapes[this.currentStep];
    if (!step) return;
    const ok = step.verify(Simulateur.components, Simulateur.connections);
    if (ok) {
      step.done = true;
      this.currentStep++;
      if (this.currentStep >= this.active.etapes.length) {
        Notify.success('Exercice terminé !');
        Storage.markExerciseDone(this.active.id);
      } else {
        Notify.success(`Étape ${this.currentStep} validée`);
      }
      this.updatePanel();
    } else {
      Notify.warning('Étape non validée');
    }
  },

  hint() {
    if (!this.active) return;
    const step = this.active.etapes[this.currentStep];
    if (!step) return;
    Notify.info(`Étape ${this.currentStep + 1} : ${step.instruction}`);
  }
};