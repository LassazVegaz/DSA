/**
 * @param {number[]} leftArr
 * @param {number[]} rightArr
 * @param {number[]} arr
 */
function merge(leftArr, rightArr, arr) {
	let l = 0;
	let r = 0;

	for (let i = 0; i < arr.length; i++) {
		if (r === rightArr.length || leftArr[l] < rightArr[r]) {
			arr[i] = leftArr[l];
			l++;
		} else {
			arr[i] = rightArr[r];
			r++;
		}
	}
}

/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
	if (arr.length <= 1) return;

	const leftArrSize = Math.floor(arr.length / 2);
	const rightArrSize = arr.length - leftArrSize;

	const leftArr = new Array(leftArrSize);
	const rightArr = new Array(rightArrSize);

	for (let i = 0; i < arr.length; i++) {
		if (i < leftArrSize) {
			leftArr[i] = arr[i];
		} else {
			rightArr[i - leftArrSize] = arr[i];
		}
	}

	mergeSort(leftArr);
	mergeSort(rightArr);
	merge(leftArr, rightArr, arr);
}

const arr = [1, 5, 8, 2, 10, 7, 32, 52, 11];
mergeSort(arr);
console.log(arr);
