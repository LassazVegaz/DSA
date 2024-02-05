import hasCycle from "./has-cycle-r";
import * as basicOps from "./d-basic-operations";

const test = (vertices: number, edges: [number, number][]) => {
  const g = basicOps.createGraph(vertices);
  basicOps.addEdges(g, ...edges);

  const str = edges.reduce((p, c) => (p += `[${c[0]},${c[1]}] `), "");
  console.log(`Created a graph with edges: ${str}`);
  basicOps.visualize(g);

  console.log();
  if (hasCycle(g)) {
    console.log("The graph has a cycle");
  } else {
    console.log("The graph does not have a cycle");
  }
};

const main = () => {
  console.log("Testing a graph with cycle---------");
  const edges1: [number, number][] = [
    [0, 1],
    [1, 0],
    [5, 0],
    [3, 2],
    [5, 1],
    [2, 4],
    [0, 3],
    [1, 4],
  ];
  test(6, edges1);

  console.log("\nTesting a graph without cycle----");
  const edges2: [number, number][] = [
    [0, 1],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 2],
    [5, 0],
    [5, 1],
  ];
  test(6, edges2);
};

main();
