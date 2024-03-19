export class Node<T = number> {
  constructor(public data: T, public next: Node<T>) {}
}

export default class CircularLinkedList<T = number> {
  tail: Node<T> | null = null;

  constructor(...data: T[]) {
    for (const d of data) this.push(d);
  }

  push(data: T) {
    if (!this.tail) {
      this.tail = new Node(data, null!); // very unfortunate in this case :(
      this.tail.next = this.tail;
    } else {
      this.tail = this.insertAfter(data, this.tail);
    }
  }

  enqueue(data: T) {
    if (!this.tail) {
      this.tail = new Node(data, null!); // very unfortunate in this case :(
      this.tail.next = this.tail;
    } else {
      const n = new Node(data, this.tail.next);
      this.tail.next = n;
    }
  }

  insertAfter(data: T, after: Node<T>): Node<T> {
    const n = new Node(data, after.next);
    after.next = n;
    return n;
  }

  isEmpty() {
    return this.tail === null;
  }
}
