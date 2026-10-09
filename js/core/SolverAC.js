class SolverAC {
  constructor(components, connections, frequency) {
    this.components = components;
    this.connections = connections;
    this.frequency = frequency;
    this.nodes = [];
  }

  solve() {
    try {
      this.identifyNodes();
      const { Y, I } = this.buildSystem();
      const V = this.solveComplex(Y, I);
      this.computeResults(V);
      return { success: true };
    } catch (e) { return { success: false, error: e.message }; }
  }

  identifyNodes() {
    const parent = {};
    this.components.forEach(c => c.terminals.forEach(t => {
      parent[`${c.id}_${t.id}`] = `${c.id}_${t.id}`;
    }));
    const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));
    const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[ra] = rb; };

    this.connections.forEach(c => union(`${c.from}_${c.fromTerm}`, `${c.to}_${c.toTerm}`));

    const map = {};
    this.components.forEach(c => c.terminals.forEach(t => {
      const root = find(`${c.id}_${t.id}`);
      if (!map[root]) map[root] = { id: Object.keys(map).length };
      t.node = map[root].id;
    }));
    this.nodes = Object.values(map);
  }

  buildSystem() {
    const n = this.nodes.length;
    const Y = Array.from({ length: n }, () => Array.from({ length: n }, () => ({ re: 0, im: 0 })));
    const I = new Array(n).fill(null).map(() => ({ re: 0, im: 0 }));
    let ground = 0;

    this.components.forEach(c => {
      if (c.type !== 'source') {
        const Z = c.getImpedance(this.frequency);
        const denom = Z.re * Z.re + Z.im * Z.im;
        if (denom === 0) return;
        const yRe = Z.re / denom;
        const yIm = -Z.im / denom;
        const n1 = c.terminals[0].node;
        const n2 = c.terminals[1].node;
        if (n1 !== n2) {
          Y[n1][n1].re += yRe; Y[n1][n1].im += yIm;
          Y[n2][n2].re += yRe; Y[n2][n2].im += yIm;
          Y[n1][n2].re -= yRe; Y[n1][n2].im -= yIm;
          Y[n2][n1].re -= yRe; Y[n2][n1].im -= yIm;
        }
      }
      if (c.type === 'source') {
        const n1 = c.terminals[0].node;
        const n2 = c.terminals[1].node;
        ground = n2;
        I[n1].re += c.value;
        I[n2].re -= c.value;
      }
    });

    for (let i = 0; i < n; i++) { Y[ground][i] = { re: 0, im: 0 }; Y[i][ground] = { re: 0, im: 0 }; }
    Y[ground][ground] = { re: 1, im: 0 };
    I[ground] = { re: 0, im: 0 };

    return { Y, I };
  }

  solveComplex(Y, I) {
    const n = Y.length;
    const A = Y.map((row, i) => [...row.map(z => ({ ...z })), { ...I[i] }]);

    for (let i = 0; i < n; i++) {
      let max = i, maxMag = 0;
      for (let k = i; k < n; k++) {
        const mag = A[k][i].re ** 2 + A[k][i].im ** 2;
        if (mag > maxMag) { maxMag = mag; max = k; }
      }
      [A[i], A[max]] = [A[max], A[i]];
      if (maxMag < 1e-14) continue;

      const pivot = A[i][i];
      const pivotMag = pivot.re ** 2 + pivot.im ** 2;

      for (let k = i + 1; k < n; k++) {
        const factor = {
          re: (A[k][i].re * pivot.re + A[k][i].im * pivot.im) / pivotMag,
          im: (A[k][i].im * pivot.re - A[k][i].re * pivot.im) / pivotMag
        };
        for (let j = i; j <= n; j++) {
          const prod = {
            re: factor.re * A[i][j].re - factor.im * A[i][j].im,
            im: factor.re * A[i][j].im + factor.im * A[i][j].re
          };
          A[k][j].re -= prod.re;
          A[k][j].im -= prod.im;
        }
      }
    }

    const X = new Array(n).fill(null).map(() => ({ re: 0, im: 0 }));
    for (let i = n - 1; i >= 0; i--) {
      let sum = { ...A[i][n] };
      for (let j = i + 1; j < n; j++) {
        const prod = {
          re: A[i][j].re * X[j].re - A[i][j].im * X[j].im,
          im: A[i][j].re * X[j].im + A[i][j].im * X[j].re
        };
        sum.re -= prod.re;
        sum.im -= prod.im;
      }
      const pivot = A[i][i];
      const mag = pivot.re ** 2 + pivot.im ** 2;
      if (mag > 1e-14) {
        X[i] = {
          re: (sum.re * pivot.re + sum.im * pivot.im) / mag,
          im: (sum.im * pivot.re - sum.re * pivot.im) / mag
        };
      }
    }
    return X;
  }

  computeResults(V) {
    this.components.forEach(c => {
      const n1 = c.terminals[0].node;
      const n2 = c.terminals[1].node;
      const v1 = V[n1] || { re: 0, im: 0 };
      const v2 = V[n2] || { re: 0, im: 0 };
      const vDiff = { re: v1.re - v2.re, im: v1.im - v2.im };

      if (c.type !== 'source') {
        const Z = c.getImpedance(this.frequency);
        const magZ = Z.re ** 2 + Z.im ** 2;
        if (magZ > 1e-14) {
          c.current = {
            re: (vDiff.re * Z.re + vDiff.im * Z.im) / magZ,
            im: (vDiff.im * Z.re - vDiff.re * Z.im) / magZ
          };
        }
        c.voltage = vDiff;
      } else {
        c.voltage = { re: c.value, im: 0 };
      }
    });
  }

  getMeasures() {
    let Ueff = 0, Ieff = 0, P = 0;
    this.components.forEach(c => {
      if (c.type === 'source') Ueff = Math.max(Ueff, c.voltage.re / Math.SQRT2);
      if (c.type === 'resistor') {
        const I = Math.sqrt(c.current.re ** 2 + c.current.im ** 2) / Math.SQRT2;
        const V = Math.sqrt(c.voltage.re ** 2 + c.voltage.im ** 2) / Math.SQRT2;
        Ieff = Math.max(Ieff, I);
        P += V * I;
      }
    });
    const Z = Ieff > 0.001 ? Ueff / Ieff : 0;
    const cosPhi = (Ueff * Ieff) > 0 ? P / (Ueff * Ieff) : 0;
    const phi = Math.acos(Math.max(-1, Math.min(1, cosPhi))) * 180 / Math.PI;
    return { Ueff, Ieff, Z, phi, P, cosPhi };
  }
}