class Solver {
  constructor(components, connections) {
    this.components = components;
    this.connections = connections;
    this.nodeCount = 0;
  }

  solve() {
    try {
      this.identifyNodes();
      const { G, I } = this.buildSystem();
      const V = this.gauss(G, I);
      this.computeCurrents(V);
      this.computePowers();
      return { success: true };
    } catch (error) {
      console.error('[Solver] Erreur :', error);
      return { success: false, error: error.message };
    }
  }

  identifyNodes() {
    const parent = {};
    this.components.forEach(c => c.terminals.forEach(t => {
      parent[`${c.id}_${t.id}`] = `${c.id}_${t.id}`;
    }));
    const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));
    const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[ra] = rb; };

    this.connections.forEach(c => union(`${c.from}_${c.fromTerm}`, `${c.to}_${c.toTerm}`));

    this.components.forEach(c => {
      if (c.type === 'wire') union(`${c.id}_0`, `${c.id}_1`);
      if (c.type === 'switch' && c.value === 1) union(`${c.id}_0`, `${c.id}_1`);
      if (c.type === 'ammeter') union(`${c.id}_0`, `${c.id}_1`);
      if (c.type === 'fuse') union(`${c.id}_0`, `${c.id}_1`);
    });

    const map = {};
    let counter = 0;
    this.components.forEach(c => c.terminals.forEach(t => {
      const root = find(`${c.id}_${t.id}`);
      if (map[root] === undefined) map[root] = counter++;
      t.node = map[root];
    }));
    this.nodeCount = counter;
  }

  buildSystem() {
    const n = this.nodeCount;
    const G = Array.from({ length: n }, () => new Array(n).fill(0));
    const I = new Array(n).fill(0);
    let ground = 0;

    this.components.forEach(c => {
      if (['resistor', 'lamp', 'motor', 'led'].includes(c.type)) {
        const R = c.type === 'led' ? 100 : (c.value > 0 ? c.value : 100);
        const g = 1 / R;
        const n1 = c.terminals[0].node;
        const n2 = c.terminals[1].node;
        if (n1 !== n2) {
          G[n1][n1] += g; G[n2][n2] += g;
          G[n1][n2] -= g; G[n2][n1] -= g;
        }
      }
      if (c.type === 'voltmeter') {
        const R = 1e6;
        const g = 1 / R;
        const n1 = c.terminals[0].node;
        const n2 = c.terminals[1].node;
        if (n1 !== n2) {
          G[n1][n1] += g; G[n2][n2] += g;
          G[n1][n2] -= g; G[n2][n1] -= g;
        }
      }
      if (c.type === 'battery') {
        const n1 = c.terminals[0].node;
        const n2 = c.terminals[1].node;
        ground = n2;
        I[n1] += c.value;
        I[n2] -= c.value;
      }
    });

    for (let i = 0; i < n; i++) {
      G[ground][i] = 0;
      G[i][ground] = 0;
    }
    G[ground][ground] = 1;
    I[ground] = 0;

    return { G, I };
  }

  gauss(G, I) {
    const n = G.length;
    const A = G.map((row, i) => [...row, I[i]]);
    for (let i = 0; i < n; i++) {
      let maxRow = i;
      for (let k = i + 1; k < n; k++) {
        if (Math.abs(A[k][i]) > Math.abs(A[maxRow][i])) maxRow = k;
      }
      [A[i], A[maxRow]] = [A[maxRow], A[i]];
      if (Math.abs(A[i][i]) < 1e-10) continue;
      for (let k = i + 1; k < n; k++) {
        const f = A[k][i] / A[i][i];
        for (let j = i; j <= n; j++) A[k][j] -= f * A[i][j];
      }
    }
    const V = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      let sum = A[i][n];
      for (let j = i + 1; j < n; j++) sum -= A[i][j] * V[j];
      V[i] = Math.abs(A[i][i]) > 1e-10 ? sum / A[i][i] : 0;
    }
    return V;
  }

  computeCurrents(V) {
    this.components.forEach(c => {
      const n1 = c.terminals[0].node;
      const n2 = c.terminals[1].node;
      const v1 = V[n1] || 0;
      const v2 = V[n2] || 0;

      if (['resistor', 'lamp', 'motor', 'led'].includes(c.type)) {
        const R = c.type === 'led' ? 100 : (c.value > 0 ? c.value : 100);
        c.current = (v1 - v2) / R;
        c.voltage = v1 - v2;
      } else if (c.type === 'voltmeter') {
        c.voltage = v1 - v2;
        c.current = 0;
      } else if (c.type === 'battery') {
        c.voltage = c.value;
        c.current = 0;
      } else if (c.type === 'ammeter') {
        c.voltage = 0;
        c.current = 0;
      } else {
        c.voltage = v1 - v2;
        c.current = 0;
      }
    });

    this.components.forEach(battery => {
      if (battery.type !== 'battery') return;
      let current = 0;
      this.components.forEach(other => {
        if (other === battery) return;
        if (['resistor', 'lamp', 'motor', 'led'].includes(other.type)) {
          if (other.terminals[0].node === battery.terminals[0].node) current -= other.current;
          if (other.terminals[1].node === battery.terminals[0].node) current += other.current;
        }
      });
      battery.current = current;
    });

    this.components.forEach(c => {
      if (c.type !== 'ammeter') return;
      let i = 0;
      this.components.forEach(o => {
        if (o === c) return;
        if (['resistor', 'lamp', 'motor', 'led'].includes(o.type)) {
          if (o.terminals[0].node === c.terminals[0].node) i -= o.current;
          if (o.terminals[1].node === c.terminals[0].node) i += o.current;
        }
      });
      c.current = Math.abs(i);
    });
  }

  computePowers() {
    this.components.forEach(c => {
      if (['resistor', 'lamp', 'motor', 'led'].includes(c.type)) {
        c.power = c.current * c.current * (c.value > 0 ? c.value : 100);
      } else {
        c.power = Math.abs(c.current * c.voltage);
      }
    });
  }

  getMeasures() {
    let current = 0, voltage = 0, power = 0;
    this.components.forEach(c => {
      if (c.type === 'battery') {
        current += Math.abs(c.current);
        voltage = Math.max(voltage, c.voltage);
      }
      power += Math.abs(c.power);
    });
    const resistance = current > 0.001 ? voltage / current : 0;
    return { current, voltage, power, resistance };
  }
}