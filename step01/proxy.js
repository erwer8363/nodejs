let data = {a: {b: {c: 1}}}

let p = new Proxy(data, {
    get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver)
        console.log('get 方法', res, receiver)
        return res
    },
    set(target, key, value, receiver) {
        Reflect.set(target, key, value, receiver)
        console.log('set 方法', receiver)
        return true
    }
})
p.a.b.c = 10
p.a.b = 888
console.log(p)