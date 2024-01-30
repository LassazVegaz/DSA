import dfs from "./dfs";
import * as basicOps from "./d-basic-operations";

const main = () => {
  const g = basicOps.createGraph(6);
  const edges: [number, number][] = [
    [0, 1],
    [1, 0],
    [5, 0],
    [2, 3],
    [3, 2],
    [5, 1],
    [2, 1],
    [1, 3],
    [1, 4],
  ];
  basicOps.addEdges(g, ...edges);

  const str = edges.reduce((p, c) => (p += `[${c[0]},${c[1]}] `), "");
  console.log(`Created a graph with edges: ${str}`);
  basicOps.visualize(g);

  console.log("\nDFS traversal");
  dfs(g);
};

main();
