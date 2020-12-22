/**
 * Created by ever on 2020/12/8.
 * 1、从第二个数字往前比。 2、比他大的往后排，以此类推直接排到末尾
 */
let arr = [2, 5, 10, 7, 10, 32, 90, 9, 11, 1, 0, 10]

function insertSort(arr) {
  const length = arr.length
  for (let i = 1; i < length; i++) {
    let temp = arr[i]
    let j = i
    for (; j > 0; j--) {
      if (temp >= arr[j - 1]) {
        break
      }
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
  return arr
}

console.log(insertSort(arr))
