import PriorityQueue, { PriorityQueueType } from "./priority-queue";

const display = (q: PriorityQueue<number>) => {
  let n = q.list.head;
  if (!n) return;

  let str = "";

  while (n) {
    str += `${n.data} -> `;
    n = n.next;
  }

  str = str.substring(0, str.length - 4);
  console.log(str);
};

const maxQTest = () => {
  const initVals = [5, 6, 1, 9, 52, 7, 8, 0, 1, 21];
  const q = new PriorityQueue(PriorityQueueType.max, (d) => d, initVals);
  console.log("Max Priority Queue created");
  display(q);

  q.enqueue(17);
  console.log("\nInserted 17");
  display(q);

  q.enqueue(0);
  console.log("\nInserted 0");
  display(q);

  q.dequeue();
  console.log("\nDequeue");
  display(q);

  console.log("\nPeak = ", q.peek());
};

const minQTest = () => {
  const initVals = [5, 7, 1, 10, 84, 54, 0, 1, 5, 6];
  const q = new PriorityQueue(PriorityQueueType.min, (d) => d, initVals);
  console.log("Min Priority Queue created");
  display(q);

  q.enqueue(2);
  console.log("\nInserted 2");
  display(q);

  q.enqueue(100);
  console.log("\nInserted 100");
  display(q);

  q.dequeue();
  console.log("\nDequeue");
  display(q);

  console.log("\nPeak = ", q.peek());
};

const main = () => {
  maxQTest();

  console.log("\n------------------------\n");

  minQTest();
};

main();
