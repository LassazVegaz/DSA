// here we are going to find height of a binary tree
// there are 3 ways to do this
// one is using recursion which is already implemented in level-order-traversal.js
// other 2 way is using a loop and a queue
// the first version uses null to detect the end of a level
// other one does not

class TNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function getHeightWithNull(root) {
	// we are going to store every node travel through into a queue
	// when we check the children of nodes stored in queue we remove that node and add its children
	// we do this until queue is empty
	// one addtional thing, we add null to queue when we are at the end of every level of the tree
	// how to identify if we are at the end of a level?
	// we know if we are at the end of a level when the current iteration is a null
	// to start we first add the root and null both to the queue
	const queue = [root, null];

	let height = 0;

	while (queue.length > 0) {
		// remove the node we are checking
		const current = queue.shift();

		// if we hit null, this is the end of current level
		if (current === null) {
			height++;

			// we need to add another null to mention the end of the next level
			if (queue.length > 0) queue.push(null);
			// only if there are already elements (the next level is there)
		}
		// otherwise add left and right to queue
		else {
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
			// we check if right and left exist because we do not need unnesc null are not required
			// we use null to check if we are at the end of a level, os we have to be carefull
		}
	}

	return height;
}
// time complexity = O( n + log(n) ) = O( n )
// space complexity = O( n )

// this is my ❤️ It is clean, readable and meanigfull
function getHeightWitouthNull(root) {
	const queue = [root];
	let height = 0;

	while (queue.length > 0) {
		const currentSize = queue.length;

		for (let i = 0; i < currentSize; i++) {
			const current = queue.shift();

			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}

		height++;
	}

	return height;
}
// time complexity = O( n )
// space complexity = O( n )

// our tree: 5  10 20  30 40 50 60  70 80 100
const root = new TNode(5);

root.left = new TNode(10);
root.right = new TNode(20);

root.left.left = new TNode(30);
root.left.right = new TNode(40);
root.right.left = new TNode(50);
root.right.right = new TNode(60);

root.left.left.left = new TNode(70);
root.left.left.right = new TNode(80);
root.left.right.left = new TNode(100);

// height is supposed to be 4
console.log(getHeightWithNull(root));
console.log(getHeightWitouthNull(root));
