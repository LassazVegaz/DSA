// traveling from parent -> left -> right

class TNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function preOrder(root) {
	if (root === null) return;

	console.log(root.data);
	preOrder(root.left);
	preOrder(root.right);
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

preOrder(root);
