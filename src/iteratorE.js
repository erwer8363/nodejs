/**
 * Created by ever on 2020/11/20.
 */
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  * [Symbol.iterator]() {
    let self = this
    // for (let key of Object.keys(self)) {
    //   yield [key, self[key]]
    // }
    const keys = Object.keys(self)
    while (keys.length > 0) {
      const key = keys.shift()
      yield [key, self[key]]
    }
  },
}

for (let [key, val] of obj) {
  console.log(key + ':' + val)
}
