class Switch extends Component {
  constructor(x, y, state = 0) {
    super('switch', x, y, state);
    this.initTerminals();
  }
  get isClosed() { return this.value === 1; }
  toggle() {
    this.value = this.value ? 0 : 1;
    if (this.domElement) {
      this.domElement.classList.toggle('on', this.value === 1);
    }
  }
}