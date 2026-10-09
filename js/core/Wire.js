class Wire extends Component {
  constructor(x, y) {
    super('wire', x, y, 0);
    this.x2 = x + 80;
    this.y2 = y;
    this.color = '#3b82f6';
    this.initTerminals();
  }

  get width() { return Math.abs(this.x2 - this.x); }
  get height() { return Math.abs(this.y2 - this.y); }

  initTerminals() {
    this.terminals = [
      { id: 0, x: this.x, y: this.y, connected: null, node: null },
      { id: 1, x: this.x2, y: this.y2, connected: null, node: null }
    ];
  }

  contains(x, y) {
    const dx = this.x2 - this.x;
    const dy = this.y2 - this.y;
    const len2 = dx * dx + dy * dy;
    if (len2 < 1) return Math.hypot(x - this.x, y - this.y) < 12;
    let t = ((x - this.x) * dx + (y - this.y) * dy) / len2;
    t = Math.max(0, Math.min(1, t));
    const px = this.x + t * dx;
    const py = this.y + t * dy;
    return Math.hypot(x - px, y - py) < 12;
  }

  createDOM() {
    const el = document.createElement('div');
    el.className = 'wire-element';
    el.id = this.id;
    el.dataset.id = this.id;
    el.style.cssText = 'position: absolute; inset: 0; pointer-events: none;';
    this.domElement = el;
    // Le fil est dessiné en SVG, seul un marqueur DOM pour les bornes est créé
    return el;
  }

  // Appelé par le renderer pour dessiner la ligne SVG du fil
  render(container) {
    const el = container.querySelector(`[data-wire-id="${this.id}"]`);
    if (el) el.remove();

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', this.x);
    line.setAttribute('y1', this.y);
    line.setAttribute('x2', this.x2);
    line.setAttribute('y2', this.y2);
    line.setAttribute('stroke', this.color);
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('data-wire-id', this.id);
    line.style.filter = `drop-shadow(0 0 5px ${this.color})`;
    line.style.cursor = 'pointer';
    line.style.pointerEvents = 'stroke';
    container.appendChild(line);

    // Marqueurs des deux extrémités
    const ends = [this.terminals[0], this.terminals[1]];
    ends.forEach((t, i) => {
      const dotId = `wire-end-${this.id}-${i}`;
      const old = container.querySelector(`[data-wire-end="${dotId}"]`);
      if (old) old.remove();

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', t.x);
      circle.setAttribute('cy', t.y);
      circle.setAttribute('r', 7);
      circle.setAttribute('fill', t.connected ? '#2ea043' : this.color);
      circle.setAttribute('stroke', '#ffffff');
      circle.setAttribute('stroke-width', '2');
      circle.setAttribute('data-wire-end', dotId);
      circle.setAttribute('data-component', this.id);
      circle.setAttribute('data-terminal', i);
      circle.style.cursor = 'crosshair';
      circle.style.pointerEvents = 'all';
      container.appendChild(circle);
    });
  }

  // Point intérieur à une distance donnée
  dragEndpoint(endpointIndex, newX, newY) {
    if (endpointIndex === 0) { this.x = newX; this.y = newY; }
    else { this.x2 = newX; this.y2 = newY; }
    this.initTerminals();
  }
}