/**
 * Created by ever on 2020/2/12.
 */
let books = [{price: 1, count: 4}, {price: 3, count: 3}, {price: 4, count: 2}]
let total = 0
// for (let book of books) {
//     total += book.price * book.count
// }

total = books.reduce((a, b) => {
    return a + b.count * b.price
}, 0)

console.log('the total price is ', total)



