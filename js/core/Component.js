class Component {
  constructor(type, x, y, value = 0) {
    this.id = 'comp_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    this.type = type;
    this.x = Number.isFinite(x) ? x : 100;
    this.y = Number.isFinite(y) ? y : 100;
    this.value = value;
    this.rotation = 0;
    this.selected = false;
    this.terminals = [];
    this.current = 0;
    this.voltage = 0;
    this.power = 0;
    this.domElement = null;
  }

  get width() {
    return { battery: 64, resistor: 64, lamp: 44, switch: 52, wire: 80, ammeter: 44, voltmeter: 44, led: 40, fuse: 44, motor: 48 }[this.type] || 60;
  }
  get height() {
    return { battery: 34, resistor: 24, lamp: 44, switch: 26, wire: 12, ammeter: 44, voltmeter: 44, led: 40, fuse: 24, motor: 48 }[this.type] || 30;
  }
  get unit() {
    return { battery: 'V', resistor: 'Ω', lamp: 'Ω', switch: '', wire: '', ammeter: 'A', voltmeter: 'V', led: 'V', fuse: 'A', motor: 'Ω' }[this.type] || '';
  }
  get label() {
    return {
      battery: 'Pile', resistor: 'Résistance', lamp: 'Lampe', switch: 'Interrupteur',
      wire: 'Fil', ammeter: 'Ampèremètre', voltmeter: 'Voltmètre',
      led: 'LED', fuse: 'Fusible', motor: 'Moteur'
    }[this.type] || this.type;
  }

  /* Positions absolues des bornes, rotation prise en compte.
     Utilisé par le SVG pour tracer les connexions. */
  initTerminals() {
    const cx = this.x + this.width / 2;
    const cy = this.y + this.height / 2;
    const halfSpan = this.width / 2 + 10;

    const rad = this.rotation * Math.PI / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    this.terminals = [
      {
        id: 0,
        x: cx - halfSpan * cos,
        y: cy - halfSpan * sin,
        connected: null,
        node: null
      },
      {
        id: 1,
        x: cx + halfSpan * cos,
        y: cy + halfSpan * sin,
        connected: null,
        node: null
      }
    ];
  }

  contains(x, y) {
    return x >= this.x && x <= this.x + this.width &&
           y >= this.y && y <= this.y + this.height;
  }

    createDOM() {
    const el = document.createElement('div');
    el.className = `placed-component comp-${this.type}`;
    el.id = this.id;
    el.dataset.id = this.id;
    el.style.left = this.x + 'px';
    el.style.top = this.y + 'px';
    el.style.width = this.width + 'px';
    el.style.height = this.height + 'px';

    if (this.value && ['wire', 'switch', 'ammeter', 'voltmeter'].indexOf(this.type) === -1) {
      const txt = document.createElement('span');
      txt.className = 'comp-text';
      txt.textContent = this.value + this.unit;
      if (this.rotation !== 0) txt.style.transform = 'rotate(' + (-this.rotation) + 'deg)';
      el.appendChild(txt);
    }

    if (this.type === 'switch' && this.value === 1) el.classList.add('on');

    if (this.rotation !== 0) {
      el.style.transform = 'rotate(' + this.rotation + 'deg)';
    }

    this.domElement = el;
    this.renderTerminals();
    return el;
  }

  /* Les bornes sont des enfants du composant, positionnées en
     coordonnées locales. Comme elles sont rondes, la rotation du
     parent ne change pas leur apparence. */
      renderTerminals() {
    if (!this.domElement) return;
    this.domElement.querySelectorAll('.terminal-dot').forEach(d => d.remove());

    const w = this.width;
    const h = this.height;
    const halfSpan = w / 2 + 10;
    const dotSize = 20;

    const locals = [
      { x: w / 2 - halfSpan, y: h / 2 },
      { x: w / 2 + halfSpan, y: h / 2 }
    ];

    this.terminals.forEach((t, i) => {
      const dot = document.createElement('div');
      dot.className = 'terminal-dot' + (t.connected ? ' connected' : '');
      dot.dataset.component = this.id;
      dot.dataset.terminal = i;
      dot.style.left = (locals[i].x - dotSize / 2) + 'px';
      dot.style.top = (locals[i].y - dotSize / 2) + 'px';
      this.domElement.appendChild(dot);
    });
  }

  updateDOM() {
    if (!this.domElement) return;
    this.domElement.style.left = this.x + 'px';
    this.domElement.style.top = this.y + 'px';
    this.domElement.style.transform = `rotate(${this.rotation}deg)`;

    // Redresser le texte
    const txt = this.domElement.querySelector('.comp-text');
    if (txt) txt.style.transform = `rotate(${-this.rotation}deg)`;

    this.renderTerminals();
  }

  /* Rotation par incréments de 15° */
  rotate(delta = 15) {
    this.rotation = (this.rotation + delta) % 360;
    if (this.rotation < 0) this.rotation += 360;
    this.initTerminals();
    this.updateDOM();
    if (typeof Connections !== 'undefined') Connections.redraw();
    if (typeof Simulateur !== 'undefined') {
      Simulateur.renderWires();
      const rotIndicator = document.getElementById('rotationValue');
      if (rotIndicator) rotIndicator.textContent = this.rotation + '°';
    }
  }

  resetRotation() {
    this.rotation = 0;
    this.initTerminals();
    this.updateDOM();
    if (typeof Connections !== 'undefined') Connections.redraw();
    if (typeof Simulateur !== 'undefined') {
      Simulateur.renderWires();
      const rotIndicator = document.getElementById('rotationValue');
      if (rotIndicator) rotIndicator.textContent = '0°';
    }
  }

  toJSON() {
    return { id: this.id, type: this.type, x: this.x, y: this.y, value: this.value, rotation: this.rotation };
  }

  static fromJSON(data) {
    const comp = ComponentFactory.create(data.type, data.x, data.y, data.value);
    comp.id = data.id;
    comp.rotation = data.rotation || 0;
    comp.initTerminals();
    return comp;
  }
}

const ComponentFactory = {
  create(type, x, y, value = null) {
    const px = Number.isFinite(x) ? x : 100;
    const py = Number.isFinite(y) ? y : 100;
    switch (type) {
      case 'battery': return new Battery(px, py, value !== null ? value : 9);
      case 'resistor': return new Resistor(px, py, value !== null ? value : 100);
      case 'lamp': return new Lamp(px, py, value !== null ? value : 50);
      case 'switch': return new Switch(px, py, value !== null ? value : 0);
      case 'wire': return new Wire(px, py);
      case 'ammeter': return new Ammeter(px, py);
      case 'voltmeter': return new Voltmeter(px, py);
      case 'led': return new LED(px, py, value !== null ? value : 2);
      case 'fuse': return new Fuse(px, py, value !== null ? value : 1);
      case 'motor': return new Motor(px, py, value !== null ? value : 50);
      default: return new Resistor(px, py, 100);
    }
  },
  getPalette() {
    return [
      { type: 'battery', label: 'Pile', hint: '9 V' },
      { type: 'resistor', label: 'Résistance', hint: '100 Ω' },
      { type: 'lamp', label: 'Lampe', hint: '50 Ω' },
      { type: 'switch', label: 'Interrupteur', hint: 'Cliquer pour basculer' },
      { type: 'led', label: 'LED', hint: '2 V' },
      { type: 'fuse', label: 'Fusible', hint: '1 A' },
      { type: 'motor', label: 'Moteur', hint: '50 Ω' },
      { type: 'ammeter', label: 'Ampèremètre', hint: 'Mesure I' },
      { type: 'voltmeter', label: 'Voltmètre', hint: 'Mesure U' },
      { type: 'wire', label: 'Fil', hint: 'Extensible' }
    ];
  }
};