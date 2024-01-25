// lets do DFS in a directed graph
// we travel towards the first adjacent vertex of a given vertex first
// then we mark the adjacent vertices of this vertex
// then moves to the first vertex
// then move to next node of the previous node and repeates
// the basic idea is we travel the farthest node from given node towards one direction
// this is why it is called depth first
// we go deeper first
// then back track one level again goes deeper into next adjacent vertex that is not visited

class Graph {
	// a list of linked lists. Each linked list represent a vertex and its links
	vertices = [];

	constructor(size) {
		this.vertices = new Array(size);
		for (let i = 0; i < this.vertices.length; i++) {
			this.vertices[i] = [i];
		}
	}

	addEdge(v, w) {
		this.vertices[v].push(w);
	}

	dfs(v) {
		const visited = new Array(this.vertices.length);
		for (let i = 0; i < visited.length; i++) {
			visited[i] = false;
		}

		this.dfsHelper(v, visited);
	}

	dfsHelper(v, visited) {
		visited[v] = true;
		console.log("Visited " + v);

		for (const vertex of this.vertices[v]) {
			if (!visited[vertex]) this.dfsHelper(vertex, visited);
		}
	}
}

const graph = new Graph(5); // nodes: 0 1 2 3 4

graph.addEdge(0, 1); // 0 -> 1
graph.addEdge(0, 3); // 0 -> 3
graph.addEdge(1, 3); // 1 -> 3
graph.addEdge(2, 1); // 2 -> 1
graph.addEdge(3, 0); // 3 -> 0
graph.addEdge(2, 4); // 2 -> 4

// should print: 0 1 3
console.log("start from 0-------");
graph.dfs(0);

console.log("");

// should print: 2 1 3 0 4
console.log("start from 2-------");
graph.dfs(2);
