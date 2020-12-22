/**
 * Created by ever on 2020/12/7.
 */
function Promise(executor) {
  let self = this

  self.status = 'pending'
  self.value
  self.reason
  self.onResolvedCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if (self.status === 'pending') { // 状态一旦改变就不会变回
      self.status = 'resolved'
      self.value = value
      self.onResolvedCallbacks.forEach(function (fn) {
        fn()
      })
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.reason = reason
      self.onRejectedCallbacks.forEach(function (fn) {
        fn()
      })
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// promise2参数，x参数，resolve参数和reject参数不能直接传递至resolvePromise中，因为文档要求他们不能在当前的上下文中执行，所以我们要在整个代码块外层添加setTimeout, 在异步线程中添加。
// resolvePromise这个函数的作用就是判断x是不是promise，如果是promise就执行他，然后将它的结果调用resolve方法，入如果x是常量，直接调用resove方法。
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('循环引用了'))
  }
  let called
  if ((x !== null && typeof x === 'object') || typeof x === 'function') {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, function (y) {
          if (called) {
            return
          }
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, function (r) {
          if (called) {
            return
          }
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) {
        return
      }
      called = true
      reject(e)
    }
  } else {
    if (called) {
      return
    }
    called = true
    resolve(x)
  }
}

// 当状态成功的时候执行onFulfilled，当状态失败的时候执行onRejected。并且传入相应的值
Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) {
    return data
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (e) {
    throw e
  }
  let self = this
  const promise2 = new Promise(function (resolve, reject) {
    if (self.status === 'resolved') {
      setTimeout(function () {
        try {
          const x = onFulfilled(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }
    if (self.status === 'rejected') {
      setTimeout(function () {
        try {
          const x = onRejected(self.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }
    if (self.status === 'pending') {
      self.onResolvedCallbacks.push(function () {
        setTimeout(function () {
          try {
            const x = onFulfilled(self.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
      self.onRejectedCallbacks.push(function () {
        setTimeout(function () {
          try {
            const x = onRejected(self.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
    }
  })
  return promise2
}

Promise.all = function (values) {
  return new Promise(function (resolve, reject) {
    let arr = []
    let index = 0

    function processData(key, value) {
      index++
      arr[key] = value
      if (index === values.length) {
        resolve(arr)
      }
    }

    for (let i = 0; i < values.length; i++) {
      const current = values[i]
      if (current && current.then && typeof current.then === 'function') {
        current.then(function (y) {
          processData(i, y)
        }, reject)
      } else {
        processData(i, current)
      }
    }
  })
}

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < values.length; i++) {
      let current = values[i]
      if (current && current.then && typeof current.then === 'function') {
        current.then(resolve, reject)
      } else {
        resolve(current)
      }
    }
  })
}

Promise.resolve = function (value) {
  return new Promise((resolve,reject)=>{
    resolve(value)
  })
}

Promise.reject = function (reason){
  return new Promise((resolve, reject)=>{
    reject(reason)
  })
}

