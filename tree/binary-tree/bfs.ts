import Tree from "./binary-tree";
import Queue from "../../queue/queue";

const bfs = (t: Tree) => {
  if (!t.root) return;

  let str = "";
  const q = new Queue(t.root);

  while (!q.isEmpty()) {
    const n = q.dequeue();
    str += `${n.data} -> `;

    if (n.left) q.enqueue(n.left);
    if (n.right) q.enqueue(n.right);
  }

  str = str.substring(0, str.length - 4);
  console.log(str);
};

export default bfs;
