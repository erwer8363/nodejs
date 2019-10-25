const child = new Proxy({}, {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        Reflect.set(target, key, value, receiver)
        console.log('child', receiver)
        return true
    }
})

const parent = new Proxy({a: 10}, {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        Reflect.set(target, key, value, receiver)
        console.log('Parent', receiver)
        return true
    }
})

Object.setPrototypeOf(child, parent)

child.a = 4
