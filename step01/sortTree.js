let tree = {
  value: 0,
  children: [{
    value: 11,
    children: [{
      value: 21,
      children: [{
        value: 31,
        children: []
      }, {
        value: 32,
        children: []
      }, {
        value: 33,
        children: []
      }]
    }, {
      value: 22,
      children: []
    }]
  }, {
    value: 12,
    children: [{
      value: 23,
      children: []
    }, {
      value: 24,
      children: []
    }]
  }, {
    value: 13,
    children: []
  }]
}

const recursiveTraverse = function (node, action) {
  if (!node || !node.children) {
    return
  }
  action(node.value)
  node.children.forEach(function (item, index) {
    recursiveTraverse(item, action)
  })
}
// 递归实现
recursiveTraverse(tree, console.log)

// 深度优先
const nonRecursiveDepthFirstTraversal = function (node, action) {
  if (!node || !node.children) {
    return
  }
  let _stack = [] // 借助一个栈
  _stack.unshift(node)
  while (_stack.length) {
    let _curNode = _stack.shift() // 推出栈顶元素
    action(_curNode.value)
    // 将子节点依次放入到栈顶
    if (_curNode.children.length) {
      _stack = _curNode.children.concat(_stack)
    }
  }
}
// 非递归深度优先遍历
nonRecursiveDepthFirstTraversal(tree, console.log)

// 广度优先
const nonRecursiveWidthFirstTraversal = function (node, action) {
  if (!node || !node.children) {
    return
  }
  let _queue = [] // 借助一个队列
  _queue.push(node)
  while (_queue.length) {
    let _curNode = _queue.shift() // 推出队头元素
    action(_curNode.value)
    // 将子节点依次推入队列中
    if (_curNode.children.length) {
      _queue = _queue.concat(_curNode.children)
    }
  }
}
// 非递归宽度优先遍历
nonRecursiveWidthFirstTraversal(tree, console.log)
