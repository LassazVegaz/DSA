import { createTestTree } from "./basic-operations";
import dfs from "./dfs-r";

const main = () => {
  const t = createTestTree();
  console.log("recursive DFS on binary tree");
  dfs(t);
};

main();
