class Resistor extends Component {
  constructor(x, y, resistance = 100) {
    super('resistor', x, y, resistance);
    this.initTerminals();
  }
}