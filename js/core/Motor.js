class Motor extends Component {
  constructor(x, y, r = 50) { super('motor', x, y, r); this.initTerminals(); }
  get width() { return 48; }
  get height() { return 48; }
  get unit() { return 'Ω'; }
}

