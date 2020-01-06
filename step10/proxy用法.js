/**
 * Created by ever on 2019/12/26.
 */

function trigger() {
    console.log('视图需要更新')
}

function isObject(param) {
    return typeof param === 'object' && param !== null
}

const toProxy = new WeakMap()

function reactive(target) {

    if (toProxy.has(target)) {
        return toProxy.get(target)
    }
    // 如果不是对象直接返回
    if (!isObject(target)) {
        return target
    }
    console.log('走代理')
    const handler = {
        get(target, key, receiver) {
            const proxyTarget = Reflect.get(target, key, receiver)
            if (isObject(target[key])) {
                return reactive(proxyTarget)
            }
            return proxyTarget
        },
        set(target, key, value, receiver) {
            // 只对私有属性的修改触发视图更新
            if (!target.hasOwnProperty(key)) {
                trigger() // 这里触发视图更新
                console.log(key, value, target.hasOwnProperty(key))
            }
            return Reflect.set(target, key, value, receiver)
        }
    }
    let observed = new Proxy(target, handler)
    toProxy.set(target, observed)
    return observed
}

// let proxyObj = reactive({
//     name: 'jj'
// })
//
// proxyObj.name = 'new Name'
// proxyObj.age = 7
// console.log(proxyObj.age)

// let arr = [1, 2, 3]
// // let proxyArr = reactive(arr)
// // proxyArr.push(4)
// // console.log(proxyArr)

let obj = {
    name: 'jj',
    array: [1, 2, 3]
}

var proxyObj = reactive(obj)
var proxyObj = reactive(obj)
var proxyObj = reactive(obj)
var proxyObj = reactive(obj)
var proxyObj = reactive(obj)
var proxyObj = reactive(obj)
var proxyObj = reactive(obj)
proxyObj.array.push(4)
console.log(proxyObj)