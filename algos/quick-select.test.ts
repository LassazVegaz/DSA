import getTheSmallest from "./quick-select";

const main = () => {
  const arr = [4, 9, 51, 0, 7, 3, 4, 78, 101, 41, 7, 6];
  const k = 4;
  const smallest = getTheSmallest(arr, k);

  console.log(`Array = ${arr}`);
  console.log(`The ${k}-th smallest: ${smallest}`);
};

main();
