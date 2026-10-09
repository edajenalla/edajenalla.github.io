class SourceAC extends ComponentAC {
  constructor(x, y, voltage = 230) {
    super('source', x, y, voltage);
    this.initTerminals();
  }
  getImpedance() { return { re: 0, im: 0 }; }
}