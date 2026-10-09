const Dashboard = {
  init() {
    this.afficherStatistiques();
    this.afficherProgression();
    this.afficherCircuits();
    this.afficherHistoriqueQuiz();
  },

  afficherStatistiques() {
    const circuits = Storage.getCircuits();
    const quiz = Storage.getQuizResults();
    const s1 = document.getElementById('statCircuits');
    const s2 = document.getElementById('statQuiz');
    const s3 = document.getElementById('statTP');
    if (s1) s1.textContent = circuits.length;
    if (quiz.length > 0 && s2) {
      const moy = quiz.reduce((s, q) => s + (q.pourcentage || 0), 0) / quiz.length;
      s2.textContent = Math.round(moy) + '%';
    }
    if (s3) s3.textContent = quiz.length;
  },

  afficherProgression() {
    const container = document.getElementById('progressionList');
    if (!container) return;
    const quiz = Storage.getQuizResults();
    if (quiz.length === 0) {
      container.innerHTML = '<p class="empty-state">Aucune progression.</p>';
      return;
    }
    const parModule = {};
    quiz.forEach(q => {
      if (!parModule[q.module]) parModule[q.module] = [];
      parModule[q.module].push(q);
    });
    container.innerHTML = Object.keys(parModule).map(mod => {
      const r = parModule[mod];
      const best = Math.max(...r.map(x => x.pourcentage || 0));
      return `
        <div class="progression-item">
          <div class="progression-header">
            <span>${mod.toUpperCase()}</span>
            <span>${best}%</span>
          </div>
          <div class="progression-bar"><div class="progression-fill" style="width:${best}%"></div></div>
        </div>
      `;
    }).join('');
  },

  afficherCircuits() {
    const container = document.getElementById('circuitsGrid');
    if (!container) return;
    const circuits = Storage.getCircuits();
    if (circuits.length === 0) {
      container.innerHTML = '<p class="empty-state">Aucun circuit sauvegardé.</p>';
      return;
    }
    container.innerHTML = circuits.map(c => `
      <div class="circuit-card">
        <h4>${c.nom}</h4>
        <p>${new Date(c.date).toLocaleString('fr-FR')}</p>
        <button class="btn btn-ghost btn-sm" onclick="Dashboard.supprimerCircuit('${c.id}')">Supprimer</button>
      </div>
    `).join('');
  },

  afficherHistoriqueQuiz() {
    const container = document.getElementById('quizHistory');
    if (!container) return;
    const quiz = Storage.getQuizResults();
    if (quiz.length === 0) {
      container.innerHTML = '<p class="empty-state">Aucun quiz passé.</p>';
      return;
    }
    const tries = [...quiz].sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = `
      <table class="history-table">
        <thead><tr><th>Date</th><th>Module</th><th>Score</th></tr></thead>
        <tbody>
          ${tries.slice(0, 10).map(q => `
            <tr><td>${new Date(q.date).toLocaleDateString('fr-FR')}</td><td>${q.module.toUpperCase()}</td><td>${q.score}/${q.total}</td></tr>
          `).join('')}
        </tbody>
      </table>
    `;
  },

  supprimerCircuit(id) {
    if (!confirm('Supprimer ce circuit ?')) return;
    Storage.deleteCircuit(id);
    this.afficherCircuits();
    this.afficherStatistiques();
    Notify.success('Circuit supprimé');
  }
};

document.addEventListener('DOMContentLoaded', () => Dashboard.init());