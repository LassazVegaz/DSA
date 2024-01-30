export default class Stack {
  arr: number[] = [];

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
