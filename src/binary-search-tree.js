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
    this.rootTree = removeInner.call(this, this.rootTree, value);
    function removeInner(currentNode, value) {
      if (!currentNode) {
        return null;
      } else if (currentNode.data > value) {
        currentNode.leftChild = removeInner.call(this, currentNode.leftChild, value);
        return currentNode;
      } else if (currentNode.data < value) {
        currentNode.rightChild = removeInner.call(this, currentNode.rightChild, value);
        return currentNode;
      } else {
        if (!currentNode.leftChild && !currentNode.rightChild) {
          return null;
        }
        if (!currentNode.leftChild) {
          currentNode = currentNode.rightChild;
          return currentNode
        } else if (!currentNode.rightChild) {
          currentNode = currentNode.leftChild;
          return currentNode
        } else {
          let rightMin = this.min(currentNode.rightChild)
          currentNode.data = rightMin
          currentNode.rightChild = removeInner.call(this, currentNode.rightChild, rightMin)
          return currentNode
        } 
      }
    }    
  }
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