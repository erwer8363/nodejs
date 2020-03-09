/**
 * Created by ever on 2020/2/15.
 */
// 防抖函数
// export function debouce(func, delay = 100) {
//   let timer = null
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       func(...args)
//     }, delay)
//   }
// }

// 节流函数
module.exports = (func, wait) => {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        func.apply(this, args)
      }, wait)
    }
  }
}

