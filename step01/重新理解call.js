/**
 * Created by ever on 2020/4/4.
 */
let Person = {
  name: 'Tom',
  say(age, address) {
    console.log(`我叫${this.name},我今年${age}岁,我住在${address}`)
  },
}

let Person1 = {
  name: 'Jim',
}
let name = 'Jerry'
Person.say.call()
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

function mySymbol(obj) {
  const unique = (Math.random() + Date.now()).toString(32).slice(0, 8)
  if (obj.hasOwnProperty(unique)) {
    return mySymbol(obj)
  } else {
    return unique
  }
}

Function.prototype.newCall = function (context) {
  console.log(context)
  context = context || global
  let fn = mySymbol(context)
  context[fn] = this
  console.log('context say is ', context)
  const [_, ...rest] = [...arguments]
  console.log('获取到的arguments 列表是...', _, rest)
  console.log('------------------')
  context[fn](...rest)
  delete context[fn]
}

// Person.say.newCall(Person1, 18, 'manila')

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
Function.prototype.newBind = function (context) {
  let self = this
  let [_, ...args] = [...arguments]
  return function () {
    let newArg = [...arguments]
    console.log(newArg)
    return self.apply(context, args.concat(newArg))
  }
}

let fn = Person.say.newBind(Person1)
// fn(18, 'Manila')
fn(18)
