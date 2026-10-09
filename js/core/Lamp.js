class Lamp extends Component {
  constructor(x, y, resistance = 50) {
    super('lamp', x, y, resistance);
    this.initTerminals();
    this.isOn = false;
  }

  setOn(state) {
    this.isOn = state;
    if (this.domElement && typeof ComponentSVG !== 'undefined') {
      this.domElement.innerHTML = ComponentSVG.lamp(state);
      this.domElement.classList.toggle('on', state);
    }
  }
}