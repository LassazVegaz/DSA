// lets mirror a complete tree

class BinaryTree {
	/**
	 * @type {number[]}
	 */
	arr = [];

	insert(data) {
		this.arr.push(data);
	}

	print() {
		console.log(this.arr);
	}

	invert() {
		if (this.arr.length === 0) return;

		this.invertSubtree(0);
	}

	/**
	 * @param {number} index
	 */
	invertSubtree(index) {
		if (index >= this.arr.length) return;

		this.invertSubtree(this.getLeftChildIndex(index));
		this.invertSubtree(this.getRightChildIndex(index));

		this.swapChildren(index);
	}
	// TC: O( n )
	// SC: O( n )

	swapChildren(index) {
		if (!this.hasLeftChild(index) && !this.hasRightChild(index)) return;
		else if (!this.hasRightChild(index)) this.insert(null);

		this.swap(
			this.getLeftChildIndex(index),
			this.getRightChildIndex(index)
		);
	}

	swap(index1, index2) {
		const temp = this.arr[index1];
		this.arr[index1] = this.arr[index2];
		this.arr[index2] = temp;
	}

	getLeftChildIndex(i) {
		return i * 2 + 1;
	}

	getRightChildIndex(i) {
		return i * 2 + 2;
	}

	hasLeftChild(i) {
		return this.getLeftChildIndex(i) < this.arr.length;
	}

	hasRightChild(i) {
		return this.getRightChildIndex(i) < this.arr.length;
	}
}

const bt = new BinaryTree();
bt.insert(1);

bt.insert(2);
bt.insert(3);

bt.insert(4);
bt.insert(5);
bt.insert(6);
bt.insert(7);

bt.insert(8);
bt.insert(9);

bt.print();

bt.invert();

bt.print();
