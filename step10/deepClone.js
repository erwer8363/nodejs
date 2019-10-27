function deepClone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let obj = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, obj)
        for (let key in target) {
            obj[key] = deepClone(target[key], map)
        }
        return obj
    } else {
        return target
    }
}

module.exports = deepClone