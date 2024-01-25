const binarySearch = (arr, target, start = 0, end = null) => {
	end ??= arr.length - 1;

	if (start > end) return null;

	const midIndex = Math.floor(start + (end - start) / 2);
	const midVal = arr[midIndex];

	if (midVal === target) return arr[midIndex];
	else if (target < midVal)
		return binarySearch(arr, target, start, midVal - 1);
	else return binarySearch(arr, target, midIndex + 1, end);
};

let arr = [1, 4, 9, 10, 23, 47];
console.log(binarySearch(arr, 23));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 47));
