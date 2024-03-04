import quickSort from "./quick-sort";

const main = () => {
  const arr = [4, 5, 8, 1, 3, 13, 10, 85, 2, 13];
  console.log(`Array = ${arr}`);
  quickSort(arr);
  console.log(`Quick sorted = ${arr}`);
};

main();
