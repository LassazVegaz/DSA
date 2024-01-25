// static window - calculate sum of k length consequtive sub arrays of the given array
// dynamic window - find the smallest sub array that gives sum of k

/**
 * @param {number[]} arr
 * @param {number} k
 */
function sum(arr, k) {
	let currentSum = 0;
	for (let i = 0; i < k; i++) {
		currentSum += arr[i];
	}

	const sums = [currentSum];

	const loopUpperBound = arr.length - k + 1;
	for (let i = 1; i < loopUpperBound; i++) {
		currentSum = currentSum - arr[i - 1] + arr[i + k - 1];
		sums.push(currentSum);
	}

	return sums;
}

/**
 * @param {number[]} arr
 * @param {number} k
 */
function smallestSubArray(arr, k) {
	let numbers = [];

	let start = 0;
	let end = 0;

	while (start < arr.length && end < arr.length && start <= end) {
		let sum = 0;
		const currentNumbers = [];

		for (let i = start; i <= end; i++) {
			const num = arr[i];
			currentNumbers.push(num);
			sum += num;
			if (sum >= k) break;
		}

		if (sum === k) {
			if (numbers.length === 0 || numbers.length > currentNumbers.length)
				numbers = currentNumbers;
			start++;
			end++;
		} else if (sum > k) {
			start++;
		} else {
			end++;
		}
	}

	return numbers;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log("sub arrays----");
console.log(sum(arr, 3)); // 6, 9, 12, 15

console.log(sum(arr, 4)); // 10, 14, 18

console.log("sub array-----");
console.log(smallestSubArray(arr, 7)); // 3, 4

console.log(smallestSubArray(arr, 17)); // []

console.log(smallestSubArray(arr, 18)); // 3, 4, 5, 6

console.log(smallestSubArray(arr, 20)); // 2, 3, 4, 5, 6

console.log("array changed-----");

arr = [1, 3, 5, 10, 11, 21, 32];

console.log(smallestSubArray(arr, 15)); // 5, 10
console.log(smallestSubArray(arr, 21)); // 21
console.log(smallestSubArray(arr, 50)); // 3, 5, 10, 11, 21
