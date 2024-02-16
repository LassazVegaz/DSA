export class BinaryTreeNode {
  left?: BinaryTreeNode;
  right?: BinaryTreeNode;

  constructor(public data: number) {}
}

export default class BinaryTree {
  constructor(public root?: BinaryTreeNode) {}
}
