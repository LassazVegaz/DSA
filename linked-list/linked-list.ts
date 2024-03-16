export class Node<T = number> {
  next: Node<T> | null = null;

  constructor(public data: T) {}
}

export default class LinkedList<T = number> {
  head: Node<T> | null = null;

  getTail() {
    if (!this.head) return null;

    let tail = this.head;

    while (tail.next !== null) tail = tail.next;

    return tail;
  }

  push(value: T) {
    const node = new Node(value);

    if (!this.head) this.head = node;
    else {
      this.getTail()!.next = node;
    }
  }

  enqueue(value: T) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
}
