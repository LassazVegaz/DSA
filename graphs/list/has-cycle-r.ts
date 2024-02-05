import Graph from "./list-graph";

const _hasCycle = (
  g: Graph,
  v: number,
  visited: Set<number>,
  currentBranch: Set<number>
): boolean => {
  visited.add(v);
  currentBranch.add(v);

  const list = g[v];
  let n = list.head;

  while (n !== null) {
    if (
      currentBranch.has(n.data) ||
      (!visited.has(n.data) && _hasCycle(g, n.data, visited, currentBranch))
    ) {
      return true;
    }

    n = n.next;
  }

  currentBranch.delete(v);
  return false;
};

const hasCycle = (g: Graph): boolean => {
  const visited = new Set<number>();

  for (let i = 0; i < g.length; i++) {
    if (visited.has(i)) continue;

    const currentBranch = new Set<number>();

    if (_hasCycle(g, i, visited, currentBranch)) return true;
  }

  return false;
};

export default hasCycle;
