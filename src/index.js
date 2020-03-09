const throttle = require('./防抖函数')

function isType(obj, type = '') {
  console.log(Object.prototype.toString.call(obj))
  if (type) {
    return Object.prototype.toString.call(obj).match(/\s\b(\w+)/) === type
  } else {
    return Object.prototype.toString.call(obj).match(/\s\b(\w+)/)[1]
  }

}


let arr = [1, 2, 3]
let testObj = {a: 1, b: 2}
let fun = function () {
  return 1
}
console.log(isType(fun))
let count = 0
let myttle = throttle(() => {
  console.log('买黄瓜的,过来.买两条..')
}, 1000)

let intervalId = setInterval(() => {
  if (count <= 10) {
    console.log('倒计时...', count)
    count++
  } else {
    clearInterval(intervalId)
  }
  myttle()
}, 200)


// let reg = /\s\w/
// console.log(' 没有匹配上?? ', reg.test('[object Array]'))
// let str = '[object Array]'.match(/\s\b(\w+)/)
// console.log(str)
//
// console.log('是否是子字符串...', '[object Array]'.includes('Array'))


Function.prototype.myBind = function (context, ...newArgs) {
  // let me = this
  return (...oldArgs) => {
    console.log('这里执行了吗...', context, ...oldArgs)
    return this.call(context, [newArgs, oldArgs].toString())
  }
}

let person = {
  name: 'jim',
  speak(word) {
    console.log('hello i am ' + this.name, ' 我说的话是... ', word)
  },
}

let test = {
  name: 'zhangxifan',
}
person.speak.myBind(test, '我是一个兵')('来自老百姓')
