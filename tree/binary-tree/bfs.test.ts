import { createTestTree } from "./basic-operations";
import bfs from "./bfs";

const main = () => {
  const t = createTestTree();
  console.log("BFS on binary tree");
  bfs(t);
};

main();
