/**
 * Created by ever on 2020/2/16.
 */
const clone = (target, map = new weakMap()) => {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target)
    let cloneTarget = isArray ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    const keys = isArray ? target : Object.keys(target)
    keys.forEach((value, key) => {
      cloneTarget[key] = clone(target[key], map)
    })
    return cloneTarget
  }
  return target
}
