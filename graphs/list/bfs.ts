import Graph from "./list-graph";

const bfs = (g: Graph) => {
  if (g.length === 0) return;

  let str = "";
  const visited = new Set<number>();
  const q: number[] = [0];

  while (q.length > 0) {
    const idx = q.shift()!;
    str += `${idx} -> `;
    visited.add(idx);

    let n = g[idx].head;

    while (n !== null) {
      if (!visited.has(n.data)) q.push(n.data);
      n = n.next;
    }
  }

  str = str.substring(0, str.length - 4);
  console.log(str);
};

export default bfs;
