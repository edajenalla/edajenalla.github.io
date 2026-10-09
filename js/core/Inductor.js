class Inductor extends ComponentAC {
  constructor(x, y, inductance = 0.1) {
    super('inductor', x, y, inductance);
    this.initTerminals();
  }
}

class ResistorAC extends ComponentAC {
  constructor(x, y, resistance = 100) {
    super('resistor', x, y, resistance);
    this.initTerminals();
  }
}