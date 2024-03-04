import Heap from "./heap";

const display = (h: Heap) => {
  if (h.tree.length === 0) return;

  let str = "";
  h.tree.forEach((n) => {
    str += `${n} -> `;
  });
  str = str.substring(0, str.length - 4);

  console.log(str);
};

const main = () => {
  const initData = [5, 3, 6, 7, 1, 2, 10];
  const heap = new Heap(...initData);
  console.log("Created heap:");
  display(heap);

  console.log("\nInserted 4");
  heap.insert(4);
  display(heap);

  console.log("\nDeleted max");
  heap.deleteMax();
  display(heap);
};

main();
