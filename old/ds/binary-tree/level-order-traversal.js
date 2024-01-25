// hello there
// today we are going travel through a binary tree from left to right
// we go level by level
// read first level then second level and so on
// this is known as Level Order Traversal
// There are 2 ways to do it and we are gonna do it in both ways
// First is using Recursion and the second way is using a Queue

// first lets create a class to hold nodes of a tree
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// Following function uses recursion to do Level Order Traversal
function lotRecursion(root) {
	// here we will recursively go to each level from the root again and again
	// we need to know the depth we want to go in each recursion
	// for this wee need to know the max depth which is the height of the tree
	const height = getHeight(root);

	for (let i = 0; i < height; i++) {
		printNodeRecursively(root, i);
		process.stdout.write(" ");
	}
}
// time complexity: ??
// space complexity: 1

function printNodeRecursively(root, level) {
	if (root === null) return;

	if (level === 0) {
		process.stdout.write(root.data + " ");
		return;
	}

	printNodeRecursively(root.left, level - 1);
	printNodeRecursively(root.right, level - 1);
}

function getHeight(root) {
	if (root === null) return 0;

	const leftHeight = getHeight(root.left) + 1;
	const rightHeight = getHeight(root.right) + 1;

	return leftHeight > rightHeight ? leftHeight : rightHeight;
}

// following method uses a loop and a queue to do Level Order Traversing
function lotQueue(root) {
	if (!root) return;

	const queue = [root];

	while (queue.length !== 0) {
		let current = queue.shift();

		process.stdout.write(current.data + " ");

		if (current.left) queue.push(current.left);
		if (current.right) queue.push(current.right);
	}
}
// time complexity: N
// space complexity: N

// our tree: 5  10 20  30 40 50 60  70 80 100
const root = new Node(5);

root.left = new Node(10);
root.right = new Node(20);

root.left.left = new Node(30);
root.left.right = new Node(40);
root.right.left = new Node(50);
root.right.right = new Node(60);

root.left.left.left = new Node(70);
root.left.left.right = new Node(80);
root.left.right.left = new Node(100);

console.log("LOT using recursion");
lotRecursion(root);
console.log();

console.log("LOT using queue");
lotQueue(root);
