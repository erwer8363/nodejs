function deepClone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)

        for (let key in target) {
            obj[key] = deepClone(target[key], map)
        }
        return cloneTarget
    } else {
        return target
    }
}

module.exports = deepClone