import Graph from "./list-graph";

const _dfs = (g: Graph, vertex: number, visited: Set<number>): string => {
  let str = `${vertex} -> `;
  visited.add(vertex);

  let n = g[vertex].head;
  if (n === null) return str;

  while (n !== null) {
    if (!visited.has(n.data)) {
      str += _dfs(g, n.data, visited);
    }

    n = n.next;
  }

  return str;
};

const dfs = (g: Graph) => {
  const visited = new Set<number>();

  let str = _dfs(g, 0, visited);
  str = str.substring(0, str.length - 4);

  console.log(str);
};

export default dfs;
