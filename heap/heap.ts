// here we only talk about max-heap. min-heap is not that different
export default class Heap {
  public readonly tree: number[] = [];

  constructor(...data: number[]) {
    for (const d of data) this.insert(d);
  }

  insert(data: number) {
    this.tree.push(data);
    this.heapifyUp();
  }

  deleteMax() {
    const last = this.tree.pop();

    if (typeof last === "undefined") return;

    this.tree[0] = last;

    this.heapifyDown();
  }

  private heapifyUp() {
    if (this.tree.length <= 1) return;

    let i = this.tree.length - 1;

    while (true) {
      const pIdx = this.getParentIdx(i);
      if (pIdx >= 0 && this.tree[i] > this.tree[pIdx]) {
        this.swap(pIdx, i);
        i = pIdx;
      } else {
        break;
      }
    }
  }

  private heapifyDown() {
    if (this.tree.length <= 1) return;

    const len = this.tree.length;
    let i = 0;

    while (true) {
      const leftIdx = this.getLefIdx(i);
      const rightIdx = this.getRightIdx(i);

      if (leftIdx < len && this.tree[leftIdx] > this.tree[i]) {
        this.swap(leftIdx, i);
        i = leftIdx;
      } else if (rightIdx < len && this.tree[rightIdx] > this.tree[i]) {
        this.swap(rightIdx, i);
        i = rightIdx;
      } else {
        break;
      }
    }
  }

  private getLefIdx(i: number) {
    return i * 2 + 1;
  }

  private getRightIdx(i: number) {
    return i * 2 + 2;
  }

  private getParentIdx(i: number) {
    return Math.ceil((i - 2) / 2);
  }

  private swap(a: number, b: number) {
    const t = this.tree[a];
    this.tree[a] = this.tree[b];
    this.tree[b] = t;
  }
}
