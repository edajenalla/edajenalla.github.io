class Fuse extends Component {
  constructor(x, y, current = 1) { super('fuse', x, y, current); this.initTerminals(); }
  get width() { return 44; }
  get height() { return 24; }
}

