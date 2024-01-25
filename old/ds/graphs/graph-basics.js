// lets do directed graphs with 2D arrays
// we are gonna do adding node, adding edge (connection), checking adge (connection) and printing

class GNode {
	constructor(data) {
		this.data = data;
	}
}

class Graph {
	nodes = [];
	metrix = [];

	constructor(size) {
		for (let i = 0; i < size; i++) {
			const row = [];
			for (let j = 0; j < size; j++) {
				row.push(0);
			}
			this.metrix.push(row);
		}
	}

	addNode(node) {
		this.nodes.push(node);
	}

	addConnection(src, dst) {
		this.metrix[src][dst] = 1;
	}

	removeConnection(src, dst) {
		this.metrix[src][dst] = 0;
	}

	print() {
		let colNames = "      ";
		for (const node of this.nodes) colNames += node.data + "  ";
		console.log(colNames);

		for (let i = 0; i < this.metrix.length; i++) {
			const row = this.metrix[i];
			let str = this.nodes[i].data + "   ";

			for (const connection of row) str += connection + "   ";

			console.log(str);
		}
	}
}

const graph = new Graph(5);

graph.addNode(new GNode("A"));
graph.addNode(new GNode("B"));
graph.addNode(new GNode("C"));
graph.addNode(new GNode("D"));
graph.addNode(new GNode("E"));

graph.addConnection(0, 1); // AB
graph.addConnection(0, 3); // AD
graph.addConnection(1, 2); // BC
graph.addConnection(2, 1); // CB
graph.addConnection(3, 0); // DA

graph.print();
