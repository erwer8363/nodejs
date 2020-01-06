/**
 * Created by ever on 2019/12/16.
 */
// 获取数组维度
const getDeepth = (array) => {
    let totalDeepth

    function sum(arr, flag) {
        return arr.reduce((total, item) => {
            if (Array.isArray(item)) {
                totalDeepth = sum(item, flag + 1);
            }
            return totalDeepth > total ? totalDeepth : total;
        }, flag)
    }

    return sum(array, 1);
}

const count = getDeepth([[12, 3, 4, [1, [3, [4]]]], [2, 3]])
console.log(count)