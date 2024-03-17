const swap = (arr: number[], a: number, b: number) => {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
};

/**
 * Get the index of k-th smallest number using quick-select
 * @param k 0-based
 * @param end Inclusive end
 */
const quickSelect = (
  arr: number[],
  k: number,
  start: number,
  end: number
): number => {
  let pivot = end;

  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] <= arr[pivot]) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, ++i, pivot);
  pivot = i;

  if (pivot === k) return pivot;

  return quickSelect(arr, k, start, pivot - 1);
};

/**
 * Get the k-th smallest number
 * @param k 1-based
 */
const getTheSmallest = (arr: number[], k: number): number | null => {
  if (arr.length < --k) return null;

  const idx = quickSelect(arr, k, 0, arr.length - 1);

  return arr[idx];
};

export default getTheSmallest;
