function trigger() {
    console.log('视图需要更新')
}

function isObject(param) {
    return typeof param === 'object' && param !== null
}

let toProxy = new WeakMap()

function reactive(target) {
    if (!isObject(target)) {
        return target
    }
    const handler = {
        get(target, key, receiver) {
            return Reflect.get(target, key, receiver)
        },
        set(target, key, value, receiver) {
            // 只对私有属性的修改动作触发视图更新
            if (!target.hasOwnProperty(key)) {
                trigger()
                console.log(key)
            }
            return Reflect.set(target, key, value, receiver)
        }
    }

    if (toProxy.has(target)) {
        return toProxy.get(target)
    }

    let observed = new Proxy(target, handler)
    toProxy.set(target, observed)
    return observed
}

// let obj = {
//     name: 'test name'
// }
// let proxy = reactive(obj)
//
// proxy.name = 'new Name'
// console.log(proxy.name)

let arr = [1, 2, 3]
let obArr = reactive(arr)
obArr.push(4)