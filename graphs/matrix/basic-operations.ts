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

const main = () => {
  const verticesCount = 5;
  const g = createGraph(verticesCount);

  addEdge(g, 0, 2);
  addEdge(g, 1, 4);
  addEdge(g, 2, 3);
  addEdge(g, 0, 4);

  removeEdge(g, 2, 3);

  visualize(g);
};

main();
