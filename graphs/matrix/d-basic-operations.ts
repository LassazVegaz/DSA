import Graph from "./matrix-graph";

//#region CREATE & VISUALIZE
const createGraph = (verticesCount: number): Graph => {
  const grap: Graph = [];

  for (let i = 0; i < verticesCount; i++) {
    const row = [] as number[];
    for (let j = 0; j < verticesCount; j++) row.push(0);
    grap.push(row);
  }

  return grap;
};

const visualize = (g: Graph) => {
  let header = "\t";
  for (let i = 0; i < g.length; i++) header += `${i}\t`;
  console.log(header);
  console.log();

  for (let i = 0; i < g.length; i++) {
    let rowStr = `${i}\t`;
    for (let j = 0; j < g[i].length; j++) rowStr += `${g[i][j]}\t`;
    console.log(rowStr);
  }
};
//#endregion

const addEdge = (g: Graph, a: number, b: number) => {
  g[a][b] = 1;
};

const removeEdge = (g: Graph, a: number, b: number) => {
  g[a][b] = 0;
};

const transpose = (g: Graph) => {
  const transposedState: boolean[][] = [];

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g.length; j++) {
      if (transposedState[i] !== undefined && transposedState[i][j]) continue;

      if (g[i][j] === 1) {
        if (g[j][i] === 0) {
          g[j][i] = 1;
          g[i][j] = 0;
        }

        if (transposedState[j] === undefined) transposedState[j] = [];
        transposedState[j][i] = true;
      }
    }
  }
};

const main = () => {
  const verticesCount = 5;

  console.log("Initializing a graph");
  const g = createGraph(verticesCount);
  visualize(g);

  console.log("\nAdding edges: (0,2) (1,4) (4,1) (0,4) (3,1)");
  addEdge(g, 0, 2);
  addEdge(g, 1, 4);
  addEdge(g, 4, 1);
  addEdge(g, 0, 4);
  addEdge(g, 3, 1);
  visualize(g);

  console.log("\nRemoving edges: (0,4)");
  removeEdge(g, 0, 4);
  visualize(g);

  console.log("\nTransposing the graph");
  transpose(g);
  visualize(g);
};

main();
