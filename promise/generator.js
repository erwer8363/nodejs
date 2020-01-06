/**
 * Created by ever on 2019/12/1.
 */

function generator(cb) {
    return (function () {
        const obj = {
            next: 0,
            stop: function () {
            }
        }

        return {
            next: function () {
                const ret = cb(obj)
                if (ret === undefined) return {value: undefined, done: true}
                return {
                    value: ret,
                    done: false
                }
            }
        }
    })()
}

let i = 0
const fun = generator(() => {
    if (i > 8) {
        return
    }
    return i++
})
for (let i = 0; i < 10; i++) {
    console.log(fun.next())
}