// given an array and number n, check if it is possible to get n by adding any number of
// elements in the array

/**
 * @param {number[]} arr
 * @param {number} n
 */
function checkSum(arr, n, mem = {}) {
	if (n in mem) return mem[n];
	else if (n === 0) return true;
	else if (n < 0) return false;

	for (let i = 0; i < arr.length; i++) {
		if (checkSum(arr, n - arr[i], mem)) {
			return true;
		}
	}

	mem[n] = false;
	return false;
}

/**
 * @param {number[]} arr
 * @param {number} n
 */
function checkSumArr(arr, n, mem = {}) {
	if (n in mem) return mem[n];
	else if (n === 0) return [];
	else if (n < 0) return null;

	for (const element of arr) {
		const result = checkSumArr(arr, n - element, mem);
		if (result !== null) {
			result.push(element);
			mem[n] = result;
			return result;
		}
	}

	mem[n] = null;
	return null;
}

/**
 * @param {number[]} arr
 * @param {number} n
 */
function bestSumArr(arr, n, mem = {}) {
	if (n in mem) return mem[n];
	else if (n === 0) return [];
	else if (n < 0) return null;

	let bestArr = null;

	for (const element of arr) {
		const result = bestSumArr(arr, n - element, mem);
		if (result !== null) {
			const reminders = [...result, element];
			if (bestArr === null || bestArr.length > result.length)
				bestArr = [...reminders];
		}
	}

	mem[n] = bestArr;
	return bestArr;
}

let arr = [5, 10, 30, 15, 20];
console.log(checkSum(arr, 55)); // true
console.log(checkSum(arr, 32)); // false
console.log(checkSum(arr, 20)); // true
console.log(checkSum([7, 14], 300)); // false
console.log(checkSum([1, 2], 300)); // false

console.log("array---");
console.log(checkSumArr([1, 2], 20)); // [1 1 ... 1] (20 times)
console.log(checkSumArr([3, 5, 2], 15)); // [3 3 3 3 3]
console.log(checkSumArr([9, 5, 11], 21)); // [11 5 5]
console.log(checkSumArr([9, 5, 10, 11], 21)); // [5 5 11]
console.log(checkSumArr([7, 14], 20)); // null
console.log(checkSumArr([7, 14], 300)); // null

console.log("best array---");
console.log(bestSumArr([1, 3], 3)); // [3]
console.log(bestSumArr([1, 2], 4)); // [2 2]
console.log(checkSumArr([1, 2], 20)); // [2 2 ... 2] (10 times)
console.log(checkSumArr([3, 5, 2], 15)); // [3 3 3 3 3]
console.log(checkSumArr([9, 5, 11], 21)); // [11 5 5]
console.log(checkSumArr([9, 5, 10, 11], 21)); // [5 5 11]
console.log(checkSumArr([7, 14], 20)); // null
console.log(checkSumArr([7, 14], 300)); // null
