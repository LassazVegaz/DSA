// Time complexity = n * log( n )
const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) return arr;

  let left = [] as number[];
  let right = [] as number[];
  const result = [] as number[];

  const mid = Math.ceil(arr.length / 2);

  for (let i = 0; i < mid; i++) {
    left.push(arr[i]);
    right.push(arr[mid + i]); // in JS we don't have to worry about pushing undefined
  }

  left = mergeSort(left);
  right = mergeSort(right);
  let leftIdx = 0;
  let rightIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (rightIdx === right.length || left[leftIdx] < right[rightIdx])
      result.push(left[leftIdx++]);
    else result.push(right[rightIdx++]);
  }

  return result;
};

export default mergeSort;
