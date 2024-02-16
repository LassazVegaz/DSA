import Tree, { BinaryTreeNode as Node } from "./binary-tree";

export const createTestTree = () => {
  const t = new Tree();
  t.root = new Node(1);
  t.root.left = new Node(2);
  t.root.right = new Node(3);
  t.root.left.left = new Node(4);
  t.root.left.right = new Node(5);
  t.root.right.left = new Node(6);
  t.root.right.right = new Node(7);
  t.root.left.left.right = new Node(8);
  t.root.right.right.left = new Node(9);

  return t;
};
