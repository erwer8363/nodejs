/**
 * Created by ever on 2020/10/25.
 */
// 首先封装一个时间切片执行器
function timeSlice(gen) {
  if (typeof gen !== 'function') {
    throw new Error('TypeError: the param expect a generator funcion')
  }
  const g = gen()
  if (!g || typeof g.next !== 'function') {
    return
  }
  return function next() {
    const start = performance.now()
    let res = null
    do {
      res = g.next()
    } while (res.done !== true && performance.now() - start < 25)
    if (res.done) {
      return
    }
    window.requestIdleCallback(next)
  }
}

const listDom = document.createElement('ul')
// 把长任务变成generator函数，交由时间切片执行器来控制执行
const add = function (i) {
  let item = document.createElement('li')
  item.innerText = `第${i++}条`
  listDom.appendChild(item)
}

function* gen() {
  let i = 0
  while (i < 100000) {
    yield add(i)
    i++
  }
}

// 用时间切片来插入10w条数据
function bigInsert() {
  timeSlice(gen)()
}

// 利用generator特性，把每一次yield都放在requestIdleCallback里执行，直到全部执行完毕
