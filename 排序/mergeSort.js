/**
 * Created by ever on 2020/12/8.
 * 1、把数组劈成两半，在递归的对子数组进行劈开的操作，知道分成一个个单独的数
 * 2、把两个数组合并成有序数组，在对有序数组进行合并直到全部子数组合并为一个完整数组
 */
let arr = [2, 5, 10, 7, 10, 32, 90, 9, 11, 1, 0, 10]

function mergeSort(arr) {
  if (arr.length === 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)

  const orderLeft = mergeSort(left)
  const orderRight = mergeSort(right)

  const res = []
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
    } else if (orderLeft.length) {
      res.push(orderLeft.shift())
    } else if (orderRight.length) {
      res.push(orderRight.shift())
    }
  }
  return res
}

console.log('这里的数组是。。', mergeSort(arr))
