// When value of the number increases the priority increases
// This can be done by enabling a function to select the priority, but I want to keep
// this simple
// implementing this using Heap or Binary Search Tree is pretty straight forward
// so I will go with LinkedList

import LinkedList, { Node } from "../linked-list/linked-list";

export default class PriorityQueue {
  readonly list = new LinkedList();

  constructor(...data: number[]) {
    for (const d of data) this.enqueue(d);
  }

  enqueue(data: number) {
    this.list.enqueue(data);
    this.adjustList();
  }

  dequeue(): number | null {
    if (!this.list.head) return null;

    const head = this.list.head;
    this.list.head = head.next;
    return head.data;
  }

  peek(): number | null {
    return this.list.head?.data ?? null;
  }

  private adjustList() {
    if (!this.list.head) return;

    let n = this.list.head;
    let prev: null | Node = null;

    while (n.next) {
      if (n.data < n.next.data) {
        if (prev) {
          prev.next = n.next;
          n.next = prev.next.next;
          prev.next.next = n;

          prev = prev.next;
        } else {
          this.list.head = n.next;
          n.next = this.list.head.next;
          this.list.head.next = n;

          prev = this.list.head;
        }
      } else {
        n = n.next;
      }
    }
  }
}
