/**
 * Created by ever on 2020/11/29.
 */
function* gen() {
  yield () => console.log('hello')
  yield () => console.log('world')
  yield () => console.log('how are you')
  yield () => console.log('fine thank you and you?')
  yield () => console.log('i am fine too')
  return '结束了'
}


const g = gen()
let isDone = false
// while (!isDone){
//
// }
do {
  const tmp = g.next()
  if(tmp.done){
    break
  }
  tmp.value()
} while (1)

// g.next().value()
// g.next().value()
// g.next().value()
// g.next().value()
// g.next().value()

// console.log('这里没志行吗。。。', g.next())
