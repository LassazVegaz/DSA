// there are two types of heaps: max heap and min heap
// here we are only talking about the max heap (MH). min heap is the opposite
// in a MH, root node is the largest one. all its children are lesser than it.
// same is applied for sub-trees

class MaxHeap {
	arr = [];

	insert(target) {
		this.arr.push(target);
		if (this.arr.length === 1) {
			return;
		}

		this.heapifyUp();
	}

	remove(target) {
		const targetIndex = this.findIndex(target);
		const lastIndex = this.arr.length - 1;

		if (lastIndex === targetIndex) {
			this.arr.pop();
			return;
		}

		this.swap(targetIndex, lastIndex);
		this.arr.pop();
		this.heapifyDown(targetIndex); // now last element is in targetIndex
		// we need move it down for its position
	}

	heapifyUp() {
		const targetIndex = this.arr.length - 1;
		this.moveUp(targetIndex);
	}

	heapifyDown(targetIndex) {
		if (!this.hasLeftChild(targetIndex) && !this.hasRightChild(targetIndex))
			return;

		const largestChildIndex = this.getLargestChildIndex(targetIndex);

		if (largestChildIndex === targetIndex) return;

		this.swap(targetIndex, largestChildIndex);

		this.heapifyDown(largestChildIndex); // now target is in largest child index
	}

	moveUp(targetIndex) {
		if (!this.hasParent(targetIndex)) return;

		const target = this.arr[targetIndex];
		const parent = this.getParent(targetIndex);

		if (target < parent) return;

		const parentIndex = this.getParentIndex(targetIndex);

		this.swap(targetIndex, parentIndex);
		this.moveUp(parentIndex);
	}

	print() {
		console.dir(this.arr);
	}

	findIndex(target) {
		for (let i = 0; i < this.arr.length; i++)
			if (this.arr[i] === target) return i;

		return null;
	}

	getLargestChildIndex(targetIndex) {
		let largestChildIndex = targetIndex;
		let largestChildValue = this.arr[targetIndex];

		if (
			this.hasLeftChild(targetIndex) &&
			this.getLeftChild(targetIndex) > largestChildValue
		) {
			largestChildIndex = this.getLeftChildIndex(targetIndex);
			largestChildValue = this.getLeftChild(targetIndex);
		}
		if (
			this.hasRightChild(targetIndex) &&
			this.getRightChild(targetIndex) > largestChildValue
		) {
			largestChildIndex = this.getRightChildIndex(targetIndex);
		}

		return largestChildIndex;
	}

	getParentIndex(i) {
		return Math.floor((i - 1) / 2);
	}

	getLeftChildIndex(i) {
		return i * 2 + 1;
	}

	getRightChildIndex(i) {
		return i * 2 + 2;
	}

	getParent(i) {
		return this.arr[this.getParentIndex(i)];
	}

	getLeftChild(i) {
		return this.arr[this.getLeftChildIndex(i)];
	}

	getRightChild(i) {
		return this.arr[this.getRightChildIndex(i)];
	}

	hasParent(i) {
		return this.getParentIndex(i) >= 0;
	}

	hasLeftChild(i) {
		return this.getLeftChildIndex(i) < this.arr.length;
	}

	hasRightChild(i) {
		return this.getRightChildIndex(i) < this.arr.length;
	}

	swap(i1, i2) {
		const temp = this.arr[i1];
		this.arr[i1] = this.arr[i2];
		this.arr[i2] = temp;
	}
}

const heap = new MaxHeap();

heap.insert(10);
heap.insert(2);
heap.insert(42);
heap.insert(13);
heap.insert(105);
heap.insert(67);
heap.insert(7);
heap.insert(80);

console.log("After inserting----");
heap.print();

heap.remove(10);
heap.remove(105);

console.log("After removing-----");
heap.print();
