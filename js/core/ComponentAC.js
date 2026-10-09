class ComponentAC {
  constructor(type, x, y, value = 0) {
    this.id = 'ac_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    this.type = type;
    this.x = x;
    this.y = y;
    this.value = value;
    this.selected = false;
    this.terminals = [];
    this.current = { re: 0, im: 0 };
    this.voltage = { re: 0, im: 0 };
    this.domElement = null;
  }

  get width() { return { source: 70, resistor: 80, inductor: 80, capacitor: 80 }[this.type] || 60; }
  get height() { return { source: 70, resistor: 30, inductor: 30, capacitor: 30 }[this.type] || 30; }
  get unit() { return { source: 'V', resistor: 'Ω', inductor: 'H', capacitor: 'F' }[this.type] || ''; }
  get label() { return { source: 'Source AC', resistor: 'Résistance', inductor: 'Inductance', capacitor: 'Condensateur' }[this.type] || this.type; }

  initTerminals() {
    const cx = this.x + this.width / 2;
    const cy = this.y + this.height / 2;
    const offset = this.width / 2 + 8;
    this.terminals = [
      { id: 0, x: cx - offset, y: cy, connected: null, node: null },
      { id: 1, x: cx + offset, y: cy, connected: null, node: null }
    ];
  }

  contains(x, y) { return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height; }

  findTerminalAt(x, y, radius = 12) {
    for (let i = 0; i < this.terminals.length; i++) {
      const t = this.terminals[i];
      const dx = t.x - x, dy = t.y - y;
      if (Math.sqrt(dx * dx + dy * dy) <= radius) return i;
    }
    return -1;
  }

  createDOM() {
    const el = document.createElement('div');
    el.className = `placed-component comp-${this.type}`;
    el.id = this.id;
    el.dataset.id = this.id;
    el.style.left = this.x + 'px';
    el.style.top = this.y + 'px';
    if (typeof ComponentSVG !== 'undefined' && ComponentSVG[this.type]) {
      el.innerHTML = ComponentSVG[this.type](this.value);
    }
    this.domElement = el;
    return el;
  }

  updateDOM() {
    if (!this.domElement) return;
    this.domElement.style.left = this.x + 'px';
    this.domElement.style.top = this.y + 'px';
  }

  getImpedance(frequency) {
    const omega = 2 * Math.PI * frequency;
    switch (this.type) {
      case 'resistor': return { re: this.value, im: 0 };
      case 'inductor': return { re: 0, im: omega * this.value };
      case 'capacitor': return { re: 0, im: -1 / (omega * this.value) };
      default: return { re: 0, im: 0 };
    }
  }

  toJSON() { return { id: this.id, type: this.type, x: this.x, y: this.y, value: this.value }; }

  static fromJSON(data) {
    const c = ComponentFactoryAC.create(data.type, data.x, data.y, data.value);
    c.id = data.id;
    return c;
  }
}

const ComponentFactoryAC = {
  create(type, x, y, value = null) {
    switch (type) {
      case 'source': return new SourceAC(x, y, value !== null ? value : 230);
      case 'resistor': return new ResistorAC(x, y, value !== null ? value : 100);
      case 'inductor': return new Inductor(x, y, value !== null ? value : 0.1);
      case 'capacitor': return new Capacitor(x, y, value !== null ? value : 0.00001);
      default: return new ResistorAC(x, y, 100);
    }
  },
  getPalette() {
    return [
      { type: 'source', label: 'Source AC', hint: '230 V / 50 Hz' },
      { type: 'resistor', label: 'Résistance', hint: '100 Ω' },
      { type: 'inductor', label: 'Inductance', hint: '0.1 H' },
      { type: 'capacitor', label: 'Condensateur', hint: '10 µF' }
    ];
  }
};