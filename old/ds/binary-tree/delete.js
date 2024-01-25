// here we are going to delete a node and replace it with the bottom-right node
// to do this we have to find the node to delete and the node at the bottom-right
// to get the bottom-right we can do Level Order Traversal and get the last node
// to get the node to delete, we can find while doing the above process

class TNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function deleteNode(root, target) {
	const queue = [root];
	let targetNode = null;
	let lastParent = null;

	if (root && root.data === target) targetNode = root;

	while (queue.length > 0) {
		let current = queue.shift();

		if (!targetNode && current.data === target) targetNode = current;

		// have to check left first
		if (current.left) {
			lastParent = current;
			queue.push(current.left);
		}

		if (current.right) {
			lastParent = current;
			queue.push(current.right);
		}
	}

	if (!targetNode) return;

	// have to check right first
	if (lastParent.right) {
		targetNode.data = lastParent.right.data;
		lastParent.right = null;
	} else {
		targetNode.data = lastParent.left.data;
		lastParent.left = null;
	}
}
// TC : O( n )
// SC : O( n )

// our tree: 5  10 20  30 40 50 60  70 80 100
const root = new TNode(5);

root.left = new TNode(10);
root.right = new TNode(20);

root.left.left = new TNode(30);
root.left.right = new TNode(40);
root.right.left = new TNode(50); // value of this one should be 100
root.right.right = new TNode(60);

root.left.left.left = new TNode(70);
root.left.left.right = new TNode(80);
root.left.right.left = new TNode(100); // -> this should be null

deleteNode(root, 50);

console.log("value of deleted node:", root.right.left.data);
console.log("last node:", root.left.right.left);
