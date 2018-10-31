class Counter {
  constructor() {
    this._counter = 50;
  }
  get counter() {
    return this._counter;
  }
  set counter( val ) {} 
  decreaseCount() {
    this._counter -= 1;
  }
}

export default new Counter();
