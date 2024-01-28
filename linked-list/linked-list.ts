export class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export default class LinkedList {
  head: Node | null = null;

  getTail() {
    if (!this.head) return null;

    let tail = this.head;

    while (tail.next !== null) tail = tail.next;

    return tail;
  }

  push(value: number) {
    const node = new Node(value);

    if (!this.head) this.head = node;
    else {
      this.getTail()!.next = node;
    }
  }

  enqueue(value: number) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
}
