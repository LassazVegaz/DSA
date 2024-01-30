import Graph from "./list-graph";
import * as basicOps from "./d-basic-operations";
import bfs from "./bfs";

const main = () => {
  const g = basicOps.createGraph(6);
  basicOps.addEdges(
    g,
    [0, 1],
    [1, 2],
    [2, 0],
    [0, 3],
    [1, 3],
    [2, 4],
    [3, 4],
    [4, 1]
  );
  console.log(
    "Created a list graph with: [0, 1] [1, 2] [2, 0] [0, 3] [1, 3] [2, 4] [3, 4] [4, 1]"
  );
  basicOps.visualize(g);

  console.log("\nBFS traversal");
  bfs(g);
};

main();
