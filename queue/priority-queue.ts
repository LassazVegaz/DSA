import LinkedList, { Node } from "../linked-list/linked-list";

export enum PriorityQueueType {
  min,
  max,
}

type PropertySelector<T> = (data: T) => number;

export default class PriorityQueue<T> {
  readonly list = new LinkedList<T>();

  constructor(
    private readonly type: PriorityQueueType,
    /**
     * Select a property to get the priority from `T`
     */
    private readonly selector: PropertySelector<T>,
    data: T[] = []
  ) {
    for (const d of data) this.enqueue(d);
  }

  enqueue(data: T) {
    this.list.enqueue(data);
    this.adjustList();
  }

  dequeue(): T | null {
    if (!this.list.head) return null;

    const head = this.list.head;
    this.list.head = head.next;
    return head.data;
  }

  peek(): T | null {
    return this.list.head?.data ?? null;
  }

  private adjustList() {
    if (!this.list.head) return;

    let n = this.list.head;
    let prev: null | Node<T> = null;

    while (n.next) {
      const nPriority = this.selector(n.data);
      const nextPriority = this.selector(n.next.data);
      if (
        (this.type === PriorityQueueType.max && nPriority < nextPriority) ||
        (this.type === PriorityQueueType.min && nPriority > nextPriority)
      ) {
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
