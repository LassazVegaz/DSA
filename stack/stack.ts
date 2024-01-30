export default class Stack {
  private arr: number[] = [];

  constructor(...init: number[]) {
    this.arr.push(...init);
  }

  push(n: number) {
    this.arr.push(n);
  }

  pop() {
    return this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}
