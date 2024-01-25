// we are gonne delete nodes
// this is tricky because after deleting a node the BST should still obey its rules
// if the target node is the right child of its parent, this node should be replaced by the
// next largest number in the tree. It makes sense right? we defenetly cannot replace with
// a lower value (left sibling).
// If we replace the target with its right child which is bigger than it, what is gonna take its place?
// Its right child and so on until it reaches the leaf node.
// But there is an easy way, what if replace the target with its previous max node?
// where do you think it is? it is always a leaf node. You just have to remove it from there and put here
// this node is also known as Predecessor. It is the right most node of the left child of the target
// so we first find our target the find its Predecessor by going left->right->right->...

class TNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function deleteNode(root, target) {
	const [targetParent, side, targetNode] = findWithParent(root, target);
	if (!targetNode) return; // not found, so no deletion

	if (!targetNode.left) {
		targetParent[side] = null;
	} else if (!targetNode.left.right) {
		targetNode.data = targetNode.left.data;
		targetNode.left = null;
	} else {
		const predecessorParent = findPredecessorParent(targetNode);

		targetNode.data = predecessorParent.right.data;
		predecessorParent.right = null;
	}
}
// time complexity: O( n )
// space complexity: O( 1 )
// in worst case scenario number of nodes = height of the tree
// In average cases h will be much smaller than n
// time complexity: O( h )

function findWithParent(root, target) {
	if (root === null) return [null, null];
	else if (root.right && root.right.data === target)
		return [root, "right", root.right];
	else if (root.left && root.left.data === target)
		return [root, "left", root.left];
	else if (target > root.data) return findWithParent(root.right, target);
	else return findWithParent(root.left, target);
}

function findPredecessorParent(root) {
	return findRightMostLeafParent(root.left);
}

function findRightMostLeafParent(root) {
	if (root.right.right === null) return root;
	else return findRightMostLeafParent(root.right);
}

function inOrderTraversal(root) {
	if (root === null) return "";
	else {
		let str = inOrderTraversal(root.left);
		str += root.data + " ";
		str += inOrderTraversal(root.right);
		return str;
	}
}

function createTree() {
	// tree: 100  90 110  80 95 105 120  70 85 93
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

	return root;
}

// first test
console.log("FIRST TEST-------");
let root = createTree();

deleteNode(root, 95);

// should print 93 which is predecessor
console.log(root.left.right.data);

// should print null
console.log(root.left.right.left);

// ascending order print
console.log(inOrderTraversal(root));

console.log("");
console.log("");

// second test
console.log("SECOND TEST------");
root = createTree();

deleteNode(root, 90);

// should print 85 which is predecessor
console.log(root.left.data);

// should print null
console.log(root.left.left.right);

// ascending order print
console.log(inOrderTraversal(root));
