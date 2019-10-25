const clone = (target) => {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (const key in target) {
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}
const clone2 = (target, map = new WeakMap()) => {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for (let key in target) {
            cloneTarget[key] = clone2(target[key], map)
        }
        return cloneTarget
    } else {
        return target
    }
}

const _forEach = (array, iterate) => {
    let index = -1
    const {length} = array
    while (++index < length) {
        iterate(array[index], index)
    }
    return array
}
const clone3 = (target, map = new WeakMap()) => {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target)
        let cloneTarget = isArray ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)

        const keys = isArray ? undefined : Object.keys(target)
        _forEach(keys || target, (value, key) => {
            if (keys) {
                key = value
            }
            cloneTarget[key] = clone3(target[key], map)
        })
        return cloneTarget
    } else {
        return target
    }
}
module.exports = {
    clone,
    clone2,
    clone3
}


