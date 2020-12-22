/**
 * Created by ever on 2020/12/8.
 * 1、首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * 2、再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 3、重复第二步，直到所有元素均排序完毕。
 */
let arr = [2, 5, 10, 7, 10, 32, 90, 9, 11, 1, 0, 10]
let sortArr = []

function selectSort(arr) {
  const len = arr.length
  let min = 0
  for (let i = 0; i < len; i++) {
    if (arr[min] < arr[i]) {
      min = i
    }
  }
  sortArr.push(...arr.splice(min, 1))
  if (arr.length) {
    selectSort(arr)
  }
}

console.log('排序前的数组是。。。', arr)
selectSort(arr)
console.log('排序后的数组是。。', sortArr)
