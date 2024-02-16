import Tree, { BinaryTreeNode as Node } from "./binary-tree";

const _dfs = (n: Node): string => {
  let str = `${n.data} -> `;

  if (n.left) str += _dfs(n.left);
  if (n.right) str += _dfs(n.right);

  return str;
};

const dfs = (t: Tree) => {
  if (!t.root) return "";
  const str = _dfs(t.root);
  console.log(str.substring(0, str.length - 4));
};

export default dfs;
