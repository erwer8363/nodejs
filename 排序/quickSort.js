/**
 * Created by ever on 2020/12/8.
 * 1、首先需要分区，从数组送任意选择一个基准，然后将前后的值跟跟基准去比较，如果比基准小，那么放入左边数组，否则放入右边数组
 * 2、递归的对子数组进行分区知道最后和合并排序号的子数组
 */
let arr = [2, 5, 10, 7, 10, 32, 90, 9, 11, 1, 0, 10]

function quickSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr
  const left = [], right = []
  const mid = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // console.log(left, right)
  return [...quickSort(left), mid, ...quickSort(right)]
}

console.log(quickSort(arr))
