export default class UniqueNamespaceGenerator {
  private counter: number;

  constructor(){
    this.counter = 0;
  }

  public get next (){
    this.counter +=1;
    return `emails-input-q3nnHuTv21${this.counter}`;
  }
}
