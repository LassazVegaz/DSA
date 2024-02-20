import mergeSort from "./merge-sort";

const main = () => {
  const arr = [1, 5, 8, 0, 6, 36, 102, 4];
  const sorted = mergeSort(arr);

  console.log(`sorting [ ${arr} ] using merge sort`);
  console.log(sorted);
};

main();
