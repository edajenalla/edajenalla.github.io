class LED extends Component {
  constructor(x, y, voltage = 2) { super('led', x, y, voltage); this.initTerminals(); }
  get width() { return 40; }
  get height() { return 40; }
}

