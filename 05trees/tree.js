//    10
//  4    20
// 2 8 17  170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    let currentNode = this.root;
    while (true) {
      if (!currentNode) return undefined;

      if (value === currentNode.value) {
        return currentNode;
      } else {
        value < currentNode.value
          ? (currentNode = currentNode.left)
          : (currentNode = currentNode.right);
      }
    }
  }
}

const tree = new BinarySearchTree();
