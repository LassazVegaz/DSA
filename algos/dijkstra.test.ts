import Graph from "../graphs/matrix/weighted-matrix-graph";
import findShortestPaths, { Path } from "./dijkstra";

const createGraph = (vertices: number): Graph => {
  const g: Graph = [];

  for (let i = 0; i < vertices; i++) g.push(new Array(vertices));

  return g;
};

const addEdge = (g: Graph, a: number, b: number, weight: number) => {
  g[a][b] = { weight };
};

const buildDistance = (
  paths: Path[],
  origin: number,
  n: number,
  mem: number[]
): number => {
  if (mem[n] !== undefined) return mem[n];

  let d: number;
  if (paths[n].closestNode === origin) {
    d = paths[n].distance;
  } else {
    d =
      paths[n].distance +
      buildDistance(paths, origin, paths[n].closestNode, mem);
  }

  mem[n] = d;
  return d;
};

// diagram 1
const main = () => {
  const g = createGraph(5);
  const edges = [
    [0, 4, 1],
    [1, 0, 5],
    [1, 2, 8],
    [1, 3, 1],
    [2, 0, 3],
    [2, 1, 2],
    [3, 2, 6],
    [3, 4, 6],
    [4, 2, 0],
  ];
  for (const e of edges) addEdge(g, e[0], e[1], e[2]);
  console.log("Created graph with edges:", edges);

  const origin = 1;
  const shortestPaths = findShortestPaths(g, origin);
  // const mem: number[] = [];
  // const distances: number[] = [];
  // for (let i = 0; i < g.length; i++) {
  //   distances.push(buildDistance(shortestPaths, origin, i, mem));
  // }

  console.log(`Shorted paths from ${origin}:`, shortestPaths);
};

main();
