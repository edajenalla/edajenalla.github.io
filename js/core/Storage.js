const Storage = {
  PREFIX: 'labo_virtuel_',

  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) { return false; }
  },

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(this.PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) { return defaultValue; }
  },

  remove(key) { localStorage.removeItem(this.PREFIX + key); },

  clear() {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(this.PREFIX)) localStorage.removeItem(key);
    });
  },

  saveCircuit(circuit) {
    const circuits = this.get('circuits', []);
    circuit.id = circuit.id || 'circuit_' + Date.now();
    circuit.date = new Date().toISOString();
    const index = circuits.findIndex(c => c.id === circuit.id);
    if (index >= 0) circuits[index] = circuit;
    else circuits.push(circuit);
    this.set('circuits', circuits);
    return circuit;
  },

  getCircuits() { return this.get('circuits', []); },

  deleteCircuit(id) {
    this.set('circuits', this.getCircuits().filter(c => c.id !== id));
  },

  saveQuizResult(result) {
    const results = this.get('quiz_results', []);
    result.date = new Date().toISOString();
    results.push(result);
    this.set('quiz_results', results);
  },

  getQuizResults() { return this.get('quiz_results', []); },

  markExerciseDone(exerciseId) {
    const done = this.get('exercises_done', []);
    if (!done.includes(exerciseId)) {
      done.push(exerciseId);
      this.set('exercises_done', done);
    }
  },

  isExerciseDone(exerciseId) {
    return this.get('exercises_done', []).includes(exerciseId);
  }
};