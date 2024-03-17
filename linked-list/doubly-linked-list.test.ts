import DoublyLinkedList from "./doubly-linked-list";

const main = () => {
  const arr = [5, 8, 1, 0, 0, 6, 9, 78, 24];
  const l = new DoublyLinkedList(...arr);

  console.log("Created doubly linked list with:", arr);
  console.log("Traverse forward:", l.traverseForward());

  let n = l.insertBefore(l.tail!, 50);
  console.log("\nInsert 50 before tail");
  console.log("Traverse forward:", l.traverseForward());

  n = l.insertAfter(n, 60);
  console.log("\nInsert 60 after 50");
  console.log("Traverse forward:", l.traverseForward());

  console.log("\nTraverse backward:", l.traverseBackward());
};

main();
