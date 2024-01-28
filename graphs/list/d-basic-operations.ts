import LinkedList, { Node } from "../../linked-list/linked-list";
import Graph from "./list-graph";

//#region CREATE & VISUALIZE
const createGraph = (vertices: number) => {
  const g: Graph = [];

  for (let i = 0; i < vertices; i++) g.push(new LinkedList());

  return g;
};

const visualize = (g: Graph) => {
  for (let i = 0; i < g.length; i++) {
    let str = `${i}`;
    let node = g[i].head;

    while (node !== null) {
      str += ` -> ${node.data}`;
      node = node.next;
    }

    console.log(str);
  }
};
//#endregion

const addEdge = (g: Graph, a: number, b: number) => {
  g[a].enqueue(b);
};

const transpose = (g: Graph) => {
  const transposedState: number[][] = [];

  for (let i = 0; i < g.length; i++) {
    let n = g[i].head;
    let prev: null | Node = null;

    while (n !== null) {
      if (transposedState[i]?.[n.data] > 0) {
        transposedState[i][n.data]--;
        prev = n;
      } else {
        g[n.data].enqueue(i);

        if (prev === null) {
          g[i].head = n.next;
        } else {
          prev.next = n.next;
        }

        transposedState[n.data] ??= [];
        transposedState[n.data][i] ??= 0;
        transposedState[n.data][i]++;
      }
      n = n.next;
    }
  }
};

const main = () => {
  const g = createGraph(5);
  console.log("Created a graph with 5 vertices");
  visualize(g);

  addEdge(g, 0, 1);
  addEdge(g, 4, 1);
  addEdge(g, 4, 2);
  addEdge(g, 3, 4);
  addEdge(g, 1, 0);
  console.log("Edges added to graph: (0,1) (4,1) (4,2) (3,4) (1,0)");
  visualize(g);

  transpose(g);
  console.log("Graph transposed");
  visualize(g);
};

main();
