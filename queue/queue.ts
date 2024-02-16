export default class Queue<T> {
  private arr: T[] = [];

  constructor(...T: T[]) {
    this.arr.push(...T);
  }

  enqueue(data: T) {
    this.arr.push(data);
  }

  dequeue(): T {
    if (this.arr.length === 0) throw new Error("Queue is empty");
    return this.arr.shift()!;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  peek() {
    if (this.arr.length === 0) throw new Error("Queue is empty");
    return this.arr[0];
  }
}
