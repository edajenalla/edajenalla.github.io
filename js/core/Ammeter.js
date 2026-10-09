class Ammeter extends Component {
  constructor(x, y) { super('ammeter', x, y, 0); this.initTerminals(); }
  get width() { return 44; }
  get height() { return 44; }
}

