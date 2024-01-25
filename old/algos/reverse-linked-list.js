class LinkNode {
	/**
	 * @type {LinkNode}
	 */
	next = null;

	constructor(data) {
		this.data = data;
	}
}

class LinkedList {
	/**
	 * @type {LinkNode}
	 */
	root = null;

	insert(data) {
		const newRoot = new LinkNode(data);
		newRoot.next = this.root;
		this.root = newRoot;
	}

	print() {
		let current = this.root;
		let str = "";

		while (current !== null) {
			str += current.data + " ";
			current = current.next;
		}

		console.log(str);
	}

	reverse() {
		let prev = this.root;
		let current = this.root.next;
		this.root.next = null;

		while (current !== null) {
			const temp = current.next;
			current.next = prev;
			prev = current;
			current = temp;
		}

		this.root = prev;
	}
}

const list = new LinkedList();
list.insert(5);
list.insert(50);
list.insert(7);
list.insert(45);
list.insert(78);
list.insert(9);
list.insert(-5);

list.print();

list.reverse();

list.print();
