import Stack from "../../stack/stack";
import Tree, { BinaryTreeNode as Node } from "./binary-tree";

const dfs = (t: Tree) => {
  if (!t.root) return;

  let str = "";
  const s = new Stack(t.root);

  while (!s.isEmpty()) {
    let n = s.pop()!;
    str += `${n.data} -> `;

    if (n.right) s.push(n.right);
    if (n.left) s.push(n.left);
  }

  str = str.substring(0, str.length - 4);
  console.log(str);
};

export default dfs;
