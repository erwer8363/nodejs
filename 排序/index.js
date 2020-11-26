/**
 * Created by ever on 2020/10/2.
 */
const generateArr = (num = 10) => {
  let arr = []
  for (let i = 0; i < 10; i++) {
    let item = Math.floor(Math.random() * (num + 1))
    arr.push(item)
  }
  return arr
}

const arr = generateArr(60)

const selectionSort = (arr) => {
  let len = arr.length, indexMin
  for (let i = 0; i < len - 1; i++) {
    indexMin = i
    for (let j = i; j < len; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}

console.log(selectionSort(arr))
