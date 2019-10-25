const Queue = require('./queue')
const PriorityQueue = require('./priorityQueue')
// let queue = new Queue()
// queue.enqueue('abc')
// queue.enqueue('cba')
// queue.enqueue('nba')
// queue.enqueue('mba')
// console.log(queue.toString())
//
// queue.dequeue()
// console.log(queue.toString())
// queue.dequeue()
// console.log(queue.toString())
//
// console.log(queue.isEmpty())
//
// console.log(queue.size())


// function passGame(nameList, num) {
//     let queue = new Queue()
//
//     for (let i = 0; i < nameList.length; i++) {
//         queue.enqueue(nameList[i])
//     }
//
//     while (queue.size() > 1) {
//         for (let i = 0; i < num - 1; i++) {
//             queue.enqueue(queue.dequeue())
//         }
//         queue.dequeue()
//     }
//
//     let name = queue.front()
//     console.log(name)
//     return nameList.indexOf(name)
// }
//
// let nameList = ['lily', 'lucy', 'tom','lilei','why']
// console.log(passGame(nameList, 3))

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('abc', 10)
priorityQueue.enqueue('cba', 4)
priorityQueue.enqueue('mba', 20)
priorityQueue.enqueue('nba', 11)
priorityQueue.enqueue('dba', 1)
console.log(priorityQueue.toString())
