import CircularLinkedList from "./circular-linked-list";

const rotateTwice = <T>(l: CircularLinkedList<T>) => {
  if (l.isEmpty()) {
    console.log("List is empty");
    return;
  }

  let rounds = 2;
  let n = l.tail!.next;
  let str = "";

  while (rounds > 0) {
    if (n === l.tail) rounds--;

    str += `${n.data} -> `;
    n = n.next;
  }

  str = str.substring(0, str.length - 4);
  console.log(str);
};

const main = () => {
  const arr = [4, 5, 8, 1, 0, 6, 9];
  const l = new CircularLinkedList(...arr);
  console.log("Created a circular linked list with:", arr);
  console.log("Circualting twice:");
  rotateTwice(l);

  l.push(20);
  console.log("\nPushed 20");
  rotateTwice(l);

  l.insertAfter(10, l.tail!.next.next);
  console.log("\nInserted 10 after tail->next->next");
  rotateTwice(l);

  l.enqueue(30);
  console.log("\nEnqueued 30");
  rotateTwice(l);
};

main();
