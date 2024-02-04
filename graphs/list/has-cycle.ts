import Stack from "../../stack/stack";
import Graph from "./list-graph";

const hasCycle = (g: Graph): boolean => {
  const visited = new Set<number>();

  for (let i = 0; i < g.length; i++) {
    if (visited.has(i)) continue;

    const stack = new Stack(i);
    const currentBranch = new Set<number>();

    while (!stack.isEmpty()) {
      const v = stack.pop()!;
      visited.add(v);
      currentBranch.add(v);

      const list = g[v];
      let n = list.head;
      let isLeaf = true;

      while (n !== null) {
        if (currentBranch.has(n.data)) return true;

        if (!visited.has(n.data)) {
          stack.push(n.data);
          isLeaf = false;
        }

        n = n.next;
      }

      if (isLeaf) currentBranch.delete(v);
    }
  }

  return false;
};

export default hasCycle;
