// we are going to check if a given tree is a valid BST
// left < parent < right
// i like to do this with dynamic programming
// keep (min, max) pair and check it with every node
// when going down,
// from left -> (-INF, parent)
// from right -> (parent, grand_parent)

// first lets create a class to hold nodes of a tree
class TNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function isValid(root) {
	return checkTreeRange(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function checkTreeRange(node, min, max) {
	if (node === null) return true;

	if (node.data < min || node.data > max) return false;

	return (
		checkTreeRange(node.left, min, node.data + 1) &&
		checkTreeRange(node.right, node.data - 1, max)
	);
}

// our tree: 100  90 110  80 95 105 120  70 85 93
const root = new TNode(100);

root.left = new TNode(90);
root.right = new TNode(110);

root.left.left = new TNode(80);
root.left.right = new TNode(95);
root.right.left = new TNode(105);
root.right.right = new TNode(120);

root.left.left.left = new TNode(70);
root.left.left.right = new TNode(85);
root.left.right.left = new TNode(93);

// should say true
console.log(isValid(root));

// should say false
// changed tree: 100  90 110  80 95 95 120  70 85 93
root.right.left.data = 95;
console.log(isValid(root));
