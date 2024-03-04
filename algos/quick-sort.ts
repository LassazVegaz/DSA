// Time complexity = n * Log(n)

const _swap = (arr: number[], a: number, b: number) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const _quickSort = (arr: number[], start: number, end: number) => {
  if (end <= start) return;

  let pivot = end;

  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < arr[pivot]) {
      i++;
      _swap(arr, i, j);
    }
  }
  i++;
  _swap(arr, i, pivot);
  pivot = i;

  _quickSort(arr, start, pivot - 1);
  _quickSort(arr, pivot + 1, end);
};

const quickSort = (arr: number[]) => {
  _quickSort(arr, 0, arr.length - 1);
};

export default quickSort;
