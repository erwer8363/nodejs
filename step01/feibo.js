// function feibo(n) {
//     if (n === 1) return 1
//     if (n === 2) return 1
//     return feibo(n - 2) + feibo(n - 1)
// }
//
// let res = feibo(6)
// console.log(res)

let obj = {
    a: 1,
    b: [2, 3],
    c: {
        d: 4,
        e: 5
    },
    f() {
        console.log('我是f')
    }
}

const deepClone = (target, map = new WeakMap()) => {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(obj) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for (const key in target) {
            cloneTarget[key] = deepClone(target[key], map)
        }
        return cloneTarget
    } else {
        return target
    }

}


let map = new Map()

function qingwa(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    if (map.has(n)) {
        return map.get(n)
    } else {
        let sumN = qingwa(n - 2) + qingwa(n - 1)
        map.set(n, sumN)
        return sumN
    }
}

let qing = qingwa(10)
console.log(qing)


function qingwa2(num) {
    if (num <= 2) {
        return num
    }
    let f1 = 1
    let f2 = 2
    let sum = 0
    for (let i = 3; i <= num; i++) {
        sum = f1 + f2
        f1 = f2
        f2 = sum
    }
    return sum
}

let qing1 = qingwa2(10)
console.log(qing1)