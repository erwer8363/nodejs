/**
 * Created by ever on 2020/6/24.
 */
let arr = '1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1'.split(',')
let tmpArr = []
let sum = 1
arr.reduce(((previousValue, currentValue, index) => {
  console.log('我又什么不碍事。。', index)
  if (currentValue === '1') {
    tmpArr.push(index)
  }
  return currentValue
}), arr[0])
tmpArr.reduce(((previousValue, currentValue) => {
  if (currentValue - previousValue === 1) {
    sum += 1
  } else {
    sum = 1
  }
  return currentValue
}))

console.log(tmpArr, sum)
