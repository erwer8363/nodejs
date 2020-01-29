function objectFactory() {
  let obj = new Object()

  this.Constructor = [].shift.call(arguments)
  console.log('the constructor is ', this.Constructor)
  obj.__proto__ = this.Constructor.prototype
  let ret = this.Constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}

function Otaku(name, age) {
  this.name = name
  this.age = age

  this.habit = 'Games'
}

Otaku.prototype.strength = 60

Otaku.prototype.sayYourName = function () {
  console.log('I am ', this.name)
}

const person = objectFactory(Otaku, 'Kevin', 18)
console.log(person.name)
console.log(person.habit)
console.log(person.strength)
person.sayYourName()
