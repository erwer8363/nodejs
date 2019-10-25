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


// let reg = /\s\w/
// console.log(' 没有匹配上?? ', reg.test('[object Array]'))
// let str = '[object Array]'.match(/\s\b(\w+)/)
// console.log(str)
//
// console.log('是否是子字符串...', '[object Array]'.includes('Array'))