class Battery extends Component {
  constructor(x, y, voltage = 9) {
    super('battery', x, y, voltage);
    this.initTerminals();
  }
}