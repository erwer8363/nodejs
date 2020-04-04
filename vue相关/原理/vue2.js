/**
 * Created by ever on 2020/3/10.
 */
// 数组的变种方法
const prototype = Array.prototype
const newPrototype = Object.create(prototype)
const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
methods.forEach(method => {
  newPrototype[method] = () => {
    prototype[method].call(this, ...args)
    renderView()
  }
})

// 响应式核心方法(递归调用)
function bindReactive(target, key, value) {
  reactive(value) // 为对象属性进行响应式的监听,同时设置数据时也要递归的调用reactive更新
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== value) {
        reactive(newVal)
        value = newVal
        renderView()
      }
    },
  })
}

// 响应式的入口方法(val是对象key对应的value)
function reactive(val) {
  if (typeof target !== 'object' || val === null) {
    return target
  }

  if(Array.isArray(val)){
    value.__proto__ = newPrototype
  }

  for (let key in target) {
    bindReactive(target, key, target[key])
  }
}

// 视图更新
function renderView() {

}

const reactiveData = reactive(data)
