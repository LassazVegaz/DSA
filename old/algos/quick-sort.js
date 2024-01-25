/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 */
function swap(arr, a, b) {
	const temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */
function partition(arr, low, high) {
	let i = low;
	const pivot = arr[high];

	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			swap(arr, i, j);
			i++;
		}
	}

	swap(arr, i, high);

	return i;
}

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */
function quickSort(arr, low = null, high = null) {
	low = low ?? 0;
	high = high ?? arr.length - 1;

	if (low >= high) return;

	const pi = partition(arr, low, high);

	quickSort(arr, low, pi - 1);
	quickSort(arr, pi + 1, high);
}

let arr = [5, 10, 3, 8, 20, 52];
quickSort(arr);
console.log(arr); // 3 5 8 10 20 52
