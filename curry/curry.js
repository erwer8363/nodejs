function compose(...fns) {
  return function (...args) {
    return fns.reduceRight((arg, fn, index) => {
      if (index === fns.length - 1) {
        return fn(...args)
      }
      return fn(arg)
    }, args)
  }
}

function toUpperCase(str) {
  return str.toUpperCase()
}

function split(str) {
  return str.split('')
}

function reverse(arr) {
  return arr.reverse()
}

function join(arr) {
  return arr.join('')
}

const turnStr = compose(join, reverse, split, toUpperCase)
const str = turnStr('emosewa si nijeuj')
console.log(str)