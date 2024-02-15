export default class Stack<T> {
  private arr: T[] = [];

  constructor(...init: T[]) {
    this.arr.push(...init);
  }

  push(data: T) {
    this.arr.push(data);
  }

  pop() {
    return this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}
