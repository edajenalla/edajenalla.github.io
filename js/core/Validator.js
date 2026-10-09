const Validator = {
  analyze() {
    const comps = Simulateur.components;
    const conns = Simulateur.connections;
    const problems = [];

    if (comps.length === 0) return { valid: false, level: 'empty', message: 'Ajoutez des composants', problems: [] };
    if (!comps.some(c => c.type === 'battery')) problems.push({ level: 'warning', message: 'Aucune source' });
    if (!comps.some(c => c.type === 'resistor' || c.type === 'lamp')) problems.push({ level: 'warning', message: 'Aucune charge' });

    const connectedIds = new Set();
    conns.forEach(c => { connectedIds.add(c.from); connectedIds.add(c.to); });
    const orphans = comps.filter(c => !connectedIds.has(c.id) && c.type !== 'wire');
    if (orphans.length > 0) problems.push({ level: 'warning', message: `${orphans.length} non connecté(s)` });

    return {
      valid: problems.length === 0,
      level: problems.length === 0 ? 'success' : 'warning',
      message: problems.length === 0 ? 'Circuit valide' : problems[0].message,
      problems
    };
  },

  updateStatus() {
    const result = this.analyze();
    const el = document.getElementById('validationStatus');
    if (!el) return;
    el.className = `validation-status ${result.level}`;
    el.innerHTML = `<span class="status-indicator"></span><span>${result.message}</span>`;
  }
};