import LinkedList, { Node } from "../../linked-list/linked-list";
import Graph from "./list-graph";

//#region CREATE & VISUALIZE
export const createGraph = (vertices: number) => {
  const g: Graph = [];

  for (let i = 0; i < vertices; i++) g.push(new LinkedList());

  return g;
};

export const visualize = (g: Graph) => {
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

export const addEdge = (g: Graph, a: number, b: number) => {
  g[a].enqueue(b);
};

export const addEdges = (g: Graph, ...edges: [number, number][]) => {
  for (let i = 0; i < edges.length; i++) {
    addEdge(g, ...edges[i]);
  }
};

export const transpose = (g: Graph) => {
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
