// best thing about doubly linked is, you can have functions like insert after, insert before,
// traverse backward
// if you have no use of them, use linked list

type Node<T = number> = {
  data: T;
  next?: Node<T>;
  prev?: Node<T>;
};

export type DoublyLinkedListNode<T = number> = Node<T>;

export default class DoublyLinkedList<T = number> {
  head?: Node<T>;
  tail?: Node<T>;

  constructor(...data: T[]) {
    for (const d of data) this.push(d);
  }

  push(data: T) {
    if (!this.head) {
      this.head = { data };
      this.tail = this.head;
    } else if (this.tail) {
      this.tail = this.insertAfter(this.tail, data);
    }
  }

  insertAfter(n: Node<T>, data: T) {
    const newNode: Node<T> = { data };
    const next = n.next;

    n.next = newNode;
    newNode.prev = n;
    newNode.next = next;
    if (next) next.prev = newNode;

    return newNode;
  }

  insertBefore(n: Node<T>, data: T) {
    const newNode: Node<T> = { data };
    const prev = n.prev;

    n.prev = newNode;
    newNode.next = n;
    newNode.prev = prev;
    if (prev) prev.next = newNode;

    return newNode;
  }

  delete(n: Node<T>) {
    if (n.prev) n.prev.next = n.next;
    if (n.next) n.next.prev = n.prev;
  }

  traverseForward(): void;
  traverseForward(start: Node<T>): void;
  traverseForward(start?: Node<T>) {
    if (!start) start = this.head;
    if (!start) return;

    let n = start;
    let str = `${n.data} -> `;

    while (n.next) {
      n = n.next;
      str += `${n.data} -> `;
    }

    str = str.substring(0, str.length - 4);
    return str;
  }

  traverseBackward(): void;
  traverseBackward(start: Node<T>): void;
  traverseBackward(start?: Node<T>) {
    if (!start) start = this.tail;
    if (!start) return;

    let n = start;
    let str = `${n.data} -> `;

    while (n.prev) {
      n = n.prev;
      str += `${n.data} -> `;
    }

    str = str.substring(0, str.length - 4);
    return str;
  }
}
