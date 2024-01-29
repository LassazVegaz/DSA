import {
  createGraph,
  visualize,
  addEdge,
  transpose,
} from "./d-basic-operations";

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
