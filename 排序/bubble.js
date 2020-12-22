/**
 * Created by ever on 2020/12/8.
 */
let arr = [2, 5, 10, 7, 10, 32, 90, 9, 11, 1, 0, 10]

function bubble(arr) {
  let temp = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
}

console.log('排序前数组是。。', arr)
bubble(arr)
console.log('排序后数组是。。。', arr)
