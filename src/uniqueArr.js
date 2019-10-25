let arr = [1, 2, 2, 3, 4, 4, 5]
let unique = [...new Set(arr)]
console.log(unique)
let arr2 = []
arr.reduce((a, b) => {
    if (a !== b) {
        arr2.push(b)
    }
    return b
}, undefined)
console.log(arr2)
// 创建[0,1,2,3,4]数组
let arr1 = Array.from({length: 5}, (_, index) => index)
console.log(arr1)