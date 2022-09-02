const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(value) {
    this.data = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
  }
  add(value, level = this.rootTree) {
    if (this.rootTree === null) {
      this.rootTree = new Node(value);
    } else if (level.data > value) {
      level.leftChild === null
        ? (level.leftChild = new Node(value))
        : this.add(value, level.leftChild);
    } else if (level.data < value) {
      level.rightChild === null
        ? (level.rightChild = new Node(value))
        : this.add(value, level.rightChild);
    }
    return this;
  }
  has(value, level = this.rootTree) {
    if (this.rootTree === null) {
      return false;
    } else if (level.data === value) {
      return true;
    } else if (level.data > value && level.leftChild !== null) {
      return this.has(value, level.leftChild);
    } else if (level.data < value && level.rightChild !== null) {
      return this.has(value, level.rightChild);
    } else {
      return false;
    }
  }
  find(value, level = this.rootTree) {
    if (this.rootTree === null) {
      return null;
    } else if (level.data === value) {
      return level;
    } else if (level.data > value && level.leftChild !== null) {
      return this.find(value, level.leftChild);
    } else if (level.data < value && level.rightChild !== null) {
      return this.find(value, level.rightChild);
    } else {
      return null;
    }
  }
  remove(value) {
    let nodeToRemove = this.find(value);
    if (nodeToRemove === null) {
      return null;
    } else if (this.rootTree === 0) {
      return null
    }
      return this.removeRightBranch(nodeToRemove)
    }

    removeRightBranch(level) {
      if (level.leftChild === null && level.rightChild === null) {
        level = null;
      } else if (level.leftChild === null && level.rightChild !== null) {
        level =  level.rightChild
      } else if (level.leftChild !== null && level.rightChild === null) {
        level =  level.leftChild
      } else {
        return this.removeRightBranch(level.rightChild)
      }
    }
    //   let minValue = this.forRemoveMin(nodeToRemove)
    //   if (nodeToRemove.data === minValue.data) {
    //     nodeToRemove = null
    //   } else {
    //     nodeToRemove.data = minValue.data
    //     minValue = null
    //   }
    // }
    // forRemoveMin(level) {
    //   if (level.leftChild === null && level.rightChild === null) {
    //     return level
    //   } else if (level.leftChild === null && level.rightChild !== null) {
    //     return level.rightChild
    //   } else if (level.leftChild !== null && level.rightChild === null) {
    //     return level.leftChild
    //   } else {
    //     return this.forRemoveMin(level.rightChild);
    //   }
  min(level = this.rootTree) {
    if (level === null) {
      return null;
    } else if (level.leftChild === null) {
      return level.data;
    } else {
      return this.min(level.leftChild);
    }
  }
  max(level = this.rootTree) {
    if (level === null) {
      return null;
    } else if (level.rightChild === null) {
      return level.data;
    } else {
      return this.max(level.rightChild);
    }
  }
}
module.exports = {
  BinarySearchTree,
};
const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
// tree.remove(8);
// tree.remove(9);
const a = tree.find(14);

