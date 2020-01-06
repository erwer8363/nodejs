/**
 * Created by ever on 2019/12/1.
 */
const permutations = arr => arr.length <= 2
    ? (arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr)
    : arr.reduce((acc, item, i) => acc.concat(permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])), [])
//permutations([1,2,3]) => [ [ 2, 3, 1 ],[ 3, 2, 1 ],[ 1, 3, 2 ],[ 3, 1, 2 ],[ 1, 2, 3 ],[ 2, 1, 3 ] ]

// 洗牌算法
function shuffle(oldCards) {
    let cards = [...oldCards]
    let m = cards.length
    while (m) {
        let index = Math.floor(Math.random() * m--)
        let cur = cards[m]
        cards[m] = cards[index]
        cards[index] = cur
    }
    return cards
}

let arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(arr)