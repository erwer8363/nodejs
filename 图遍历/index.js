/**
 * Created by ever on 2020/12/8.
 */
// 深度遍历
let nodeList = []

function DFS(node, nodeList) {
  if (node) {
    nodeList.push(node.tag)
    let children = node.children
    if (children) {
      for (let i = 0; i < children.length; i++) {
        DFS(children[i], nodeList)
      }
    }
  }
  return nodeList
}

// DFS(dom, nodeList)
console.log(nodeList)

function BFS(node, nodeList) {
  if (node) {
    let q = [node]
    while (q.length > 0) {
      let item = q.shift()
      nodeList.push(item.tag)
      if (item.children) {
        item.children.forEach(e => q.push(e))
      }
    }
  }
}

// BFS(dom, nodeList)
console.log(nodeList)
