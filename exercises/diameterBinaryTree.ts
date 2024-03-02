/*
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.

https://leetcode.com/problems/diameter-of-binary-tree/description/?envType=daily-question&envId=2024-02-27
*/

class Node {
  public key: number;
  public leftNode: Node | null;
  public rightNode: Node | null;

  constructor(
    key: number,
    left: Node | null = null,
    right: Node | null = null
  ) {
    this.key = key;
    this.leftNode = left;
    this.rightNode = right;
  }

  public size(): number {
    const sizeLeft = this.leftNode ? this.leftNode.size() : 0;
    const sizeRight = this.rightNode ? this.rightNode.size() : 0;

    return sizeLeft + sizeRight + 1;
  }

  public print() {
    console.log(this.key);
    this.leftNode?.print();
    this.rightNode?.print();
  }

  public addNodeBalanced(newNode: Node) {
    const sizeLeft = this.leftNode ? this.leftNode.size() : 0;
    const sizeRight = this.rightNode ? this.rightNode.size() : 0;
    const isRightLarger = sizeRight > sizeLeft;

    const fatherNode = isRightLarger ? this.leftNode : this.rightNode;

    if (fatherNode) {
      fatherNode.addNodeBalanced(newNode);
      return;
    }

    if (isRightLarger) {
      this.leftNode = newNode;
    } else {
      this.rightNode = newNode;
    }
  }

  public addNodeOrderly(newNode: Node) {
    const isValueMajor = newNode.key > this.key;

    const fatherNode = isValueMajor ? this.rightNode : this.leftNode;

    if (fatherNode) {
      fatherNode.addNodeOrderly(newNode);
      return;
    }

    if (isValueMajor) {
      this.rightNode = newNode;
    } else {
      this.leftNode = newNode;
    }
  }

  public static createTreeBalanced(keyList: number[]) {
    if (keyList.length === 0) throw new Error("Keylist lenght cannot be empty");

    const rootNode = new Node(keyList[0]);
    keyList.shift();

    for (const key of keyList) {
      rootNode.addNodeBalanced(new Node(key));
    }

    return rootNode;
  }

  public static createTreeOrderly(keyList: number[]) {
    if (keyList.length === 0) throw new Error("Keylist lenght cannot be empty");

    const rootNode = new Node(keyList[0]);
    keyList.shift();

    for (const key of keyList) {
      rootNode.addNodeOrderly(new Node(key));
    }

    return rootNode;
  }
}

const diameterBinaryTree = (node: Node | null) => {
  if (!node) return 0;

  const nodesLeft: number = diameterBinaryTree(node.leftNode) + 1;
  const nodesRight: number = diameterBinaryTree(node.rightNode) + 1;

  return Math.max(nodesLeft, nodesRight);
};

console.log("MANUAL ASSIGNATION");
const node5 = new Node(5);
const node4 = new Node(4);
const node3 = new Node(3);
const node2 = new Node(2, node4, node5);
let rootNode: Node = new Node(1, node2, node3);
console.log(diameterBinaryTree(rootNode));

console.log("BALANCED CREATED TREE");
let input = [1, 2, 3, 4, 5];
rootNode = Node.createTreeBalanced(input);
console.log(diameterBinaryTree(rootNode));

console.log("ORDERLY CREATED TREE");
input = [1, 2, 3, 4, 5];
rootNode = Node.createTreeOrderly(input);
console.log(diameterBinaryTree(rootNode));
