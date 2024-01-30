import Stack from "../../stack/stack";
import Graph from "./list-graph";

const dfs = (g: Graph) => {
  if (g.length === 0) return;

  let str = "";
  const stack = new Stack(0);
  const visited = new Set<number>();

  while (!stack.isEmpty()) {
    const idx = stack.pop()!;
    visited.add(idx);
    str += `${idx} -> `;

    let n = g[idx].head;

    while (n !== null) {
      if (!visited.has(n.data)) stack.push(n.data);

      n = n.next;
    }
  }

  str = str.substring(0, str.length - 4);
  console.log(str);
};

export default dfs;
