import { createTestTree } from "./basic-operations";
import Tree, { BinaryTreeNode as Node } from "./binary-tree";
import dfs from "./dfs";

const main = () => {
  const t = createTestTree();
  console.log("DFS on binary tree");
  dfs(t);
};

main();
