// hello yo
// we are going to do insert a node into a binary tree
// the node should go to first empty space
// this is exiting because GeeksForGeeks recommended not to look the solution and try out myself first
// so here we go
// the hint is, use Level Order Traversal

class TNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function insert(root, value) {
	const queue = [root];

	while (queue.length > 0) {
		const current = queue.shift();

		if (current.left) queue.push(current.left);
		else {
			current.left = new TNode(value);
			return;
		}

		if (current.right) queue.push(current.right);
		else {
			current.right = new TNode(value);
			return;
		}
	}
}

// our tree: 5  10 20  30 40 50 60  70 80 100
const root = new TNode(5);

root.left = new TNode(10);
root.right = new TNode(20);

root.left.left = new TNode(30);
root.left.right = new TNode(40);
// root.right.left = new TNode(50); removed -> new element should be in root.right.left
root.right.right = new TNode(60);

// root.left.left.left = new TNode(70); removed
root.left.left.right = new TNode(80);
root.left.right.left = new TNode(100);

insert(root, 50);
console.log(root.right.left.data);
