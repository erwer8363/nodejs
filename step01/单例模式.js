/**
 * Created by ever on 2019/12/7.
 */

export function Singleton(fn) {
    let result
    return () => {
        return result || fn.apply(this, arguments)
    }
}
