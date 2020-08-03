export default class IdGenerator {
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  public get next() {
    this.counter += 1;
    return this.counter;
  }
}
