// lets do BFS in a directed graph
// we travel towards each adjacent vertices of a given vertex first
// while moving to these adjacent vertices we also mark their adjacent vertices but not visit them
// after traveling to all adjacent vertices of the given vertex,
// travel towards adjacent vertices of the first visited vertex
// and so on...
// the basic idea is first we travel adjacent vertices then travel adjacent vertices inorder
// we are going to user linked list for this

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

	bfs(v) {
		const visited = new Array(this.vertices.length);
		for (let i = 0; i < visited.length; i++) {
			visited[i] = false;
		}

		const queue = [v];
		visited[v] = true;

		while (queue.length > 0) {
			v = queue.shift();

			console.log("Visited " + v);

			for (const vertex of this.vertices[v]) {
				if (!visited[vertex]) {
					visited[vertex] = true;
					queue.push(vertex);
				}
			}
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

// should print: 2 1 4 3 0
console.log("start from 2-------");
graph.bfs(2);

console.log("");

// should print: 0 1 3
console.log("start from 0-------");
graph.bfs(0);
