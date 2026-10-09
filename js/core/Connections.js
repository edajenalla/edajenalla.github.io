/* ============================================================
   CONNEXIONS — clic-clic uniquement, aucune ligne temporaire
   Premier clic sur une borne : activation (rose)
   Second clic sur une autre borne : connexion créée
   ============================================================ */

const Connections = {
  pending: null,
  svg: null,
  wireColor: '#3b82f6',

  init() {
    this.svg = document.getElementById('connectionsLayer');
  },

  setColor(color) {
    this.wireColor = color;
  },

  clickTerminal(component, terminalIndex) {
    // 1. Aucune borne active : on active celle-ci
    if (!this.pending) {
      this.pending = { component, terminalIndex };
      this.highlightTerminal(component, terminalIndex, true);
      this.updateHint('Borne sélectionnée · cliquez sur une autre borne pour connecter');
      return;
    }

    // 2. Reclic sur la même borne : annulation
    if (this.pending.component === component && this.pending.terminalIndex === terminalIndex) {
      this.cancel();
      return;
    }

    // 3. Autre borne : création
    this.create(this.pending, { component, terminalIndex });
    this.cancel();
  },

  create(from, to) {
    const exists = Simulateur.connections.some(c =>
      (c.from === from.component.id && c.fromTerm === from.terminalIndex &&
       c.to === to.component.id && c.toTerm === to.terminalIndex) ||
      (c.from === to.component.id && c.fromTerm === to.terminalIndex &&
       c.to === from.component.id && c.toTerm === from.terminalIndex)
    );
    if (exists) {
      if (typeof Notify !== 'undefined') Notify.warning('Ces bornes sont déjà connectées');
      return;
    }

    if (from.component.terminals[from.terminalIndex].connected) {
      if (typeof Notify !== 'undefined') Notify.warning('Cette borne est déjà utilisée');
      return;
    }
    if (to.component.terminals[to.terminalIndex].connected) {
      if (typeof Notify !== 'undefined') Notify.warning('Cette borne est déjà utilisée');
      return;
    }

    Simulateur.connections.push({
      from: from.component.id,
      fromTerm: from.terminalIndex,
      to: to.component.id,
      toTerm: to.terminalIndex,
      color: this.wireColor
    });

    from.component.terminals[from.terminalIndex].connected = to.component.id;
    to.component.terminals[to.terminalIndex].connected = from.component.id;

    from.component.renderTerminals();
    to.component.renderTerminals();

    this.redraw();
    Simulateur.updateStats();
    if (typeof Notify !== 'undefined') Notify.success('Connexion créée');
  },

  cancel() {
    if (this.pending) {
      this.highlightTerminal(this.pending.component, this.pending.terminalIndex, false);
    }
    this.pending = null;
    this.updateHint(null);
  },

  highlightTerminal(component, terminalIndex, on) {
    if (!component.domElement) return;
    const dot = component.domElement.querySelector(`.terminal-dot[data-terminal="${terminalIndex}"]`);
    if (dot) dot.classList.toggle('active', on);
  },

  updateHint(message) {
    const el = document.getElementById('connectionHint');
    if (!el) return;
    if (message) {
      el.textContent = message;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  },

  redraw() {
    if (!this.svg) return;
    this.svg.querySelectorAll('line[data-connection]').forEach(l => l.remove());

    Simulateur.connections.forEach(conn => {
      const fromComp = Simulateur.components.find(c => c.id === conn.from);
      const toComp = Simulateur.components.find(c => c.id === conn.to);
      if (!fromComp || !toComp) return;
      const t1 = fromComp.terminals[conn.fromTerm];
      const t2 = toComp.terminals[conn.toTerm];
      if (!t1 || !t2) return;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', t1.x);
      line.setAttribute('y1', t1.y);
      line.setAttribute('x2', t2.x);
      line.setAttribute('y2', t2.y);
      line.setAttribute('stroke', conn.color || '#3b82f6');
      line.setAttribute('stroke-width', '3');
      line.setAttribute('stroke-linecap', 'round');
      line.setAttribute('data-connection', 'true');
      line.setAttribute('data-connection-id', `${conn.from}|${conn.fromTerm}|${conn.to}|${conn.toTerm}`);
      line.style.filter = `drop-shadow(0 0 4px ${conn.color || '#3b82f6'})`;
      line.style.pointerEvents = 'stroke';
      line.style.cursor = 'pointer';
      this.svg.appendChild(line);
    });
  },

  removeConnection(fromId, fromTerm, toId, toTerm) {
    Simulateur.connections = Simulateur.connections.filter(c =>
      !(c.from === fromId && c.fromTerm === fromTerm && c.to === toId && c.toTerm === toTerm) &&
      !(c.from === toId && c.fromTerm === toTerm && c.to === fromId && c.toTerm === fromTerm)
    );
    const fromComp = Simulateur.components.find(c => c.id === fromId);
    const toComp = Simulateur.components.find(c => c.id === toId);
    if (fromComp && fromComp.terminals[fromTerm]) fromComp.terminals[fromTerm].connected = null;
    if (toComp && toComp.terminals[toTerm]) toComp.terminals[toTerm].connected = null;
    if (fromComp) fromComp.renderTerminals();
    if (toComp) toComp.renderTerminals();
    this.redraw();
  },

  removeByComponent(componentId) {
    Simulateur.connections = Simulateur.connections.filter(
      c => c.from !== componentId && c.to !== componentId
    );
    this.redraw();
  }
};