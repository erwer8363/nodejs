/**
 * Created by ever on 2020/12/8.
 */
class BinaryTreeCode {
  constructor(key) {
    this.left = null
    this.right = null
    this.key = key
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    const node = new BinaryTreeCode(key)
    if (!this.root) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode(node, newNode) {
    if (node.key < newNode.key) {
      if (node.left) {
        this.insertNode(node.left, newNode)
      } else {
        node.left = newNode
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, newNode)
      } else {
        node.right = newNode
      }
    }
  }

  // 中序遍历
  inorderTransverse(root, arr) {
    if (!root) return
    this.inorderTransverse(root.left, arr)
    arr.push(root.key)
    this.inorderTransverse(root.right, arr)
  }

  // 先序遍历
  preorderTransverse(root, arr) {
    if (!root) return
    arr.push(root.key)
    this.preorderTransverse(root.left, arr)
    this.preorderTransverse(root.right, arr)
  }

  // 后序遍历
  postorderTransverse(root, arr) {
    let stack = []
    stack.push(root)
    while (stack.length > 0) {
      let node = stack.pop()
      arr.push(node.key)
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
  }
}

arr = [6, 5, 6, 8, 9, 1, 4, 3, 6]
const tree = new BinaryTree()
arr.forEach(key => tree.insert(key))
console.log(tree)


class MinHeep {
  constructor() {
    this.heap = []
  }

  insert(val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
  }

  swap(i, v) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[v]
    this.heap[v] = temp
  }

  shiftUp(index) {
    if (index === 0) return
    let preIndex = this.getParentIndex(index)
    if (this.heap[preIndex] > this.heap[index]) {
      this.swap(preIndex, index)
    }
  }

  getParentIndex(i) {
    return (i - 1) >> 1
  }
}
