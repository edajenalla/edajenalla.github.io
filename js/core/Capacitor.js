class Capacitor extends ComponentAC {
  constructor(x, y, capacitance = 0.00001) {
    super('capacitor', x, y, capacitance);
    this.initTerminals();
  }
}