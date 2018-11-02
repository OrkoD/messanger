export default {
  _counter: 50,
  get counter() {
    return this._counter;
  },
  decreaseCount() {
    this._counter -= 1;
  }
}
