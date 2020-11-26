/**
 * Created by ever on 2020/10/17.
 */
class InterceptorManage {
  constructor() {
    this.handlers = []
  }

  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected,
    })
  }
}

class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorManage,
      response: new InterceptorManage,
    }
  }

  request(config) {
    let chain = [this.sendAjax.bind(this), undefined]
    this.interceptors.request.handlers.forEach(interceptor => {
      chain.unshift(interceptor.fullfield, interceptor.rejected)
    })

    this.interceptors.response.handlers.forEach(interceptor => {
      chain.push(interceptor.fullfield, interceptor.rejected)
    })

    let promise = Promise.resolve(config)
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
  }

  sendAjax() {
    return new Promise(resolve => {
      const {url = '', method = 'get', data = {}} = config
      console.log(config)
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.onload = function () {
        console.log(xhr.responseText)
        resolve(xhr.responseText)
      }
      xhr.send(data)
    })
  }
}

const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post']
methodsArr.forEach(met => {
  Axios.prototype[met] = function () {
    console.log('执行' + met + '方法')
    if (['get', 'delete', 'head', 'options'].includes(met)) {
      return this.request({
        method: met,
        url: arguments[0],
        ...arguments[1] || {},
      })
    } else {
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2] || {},
      })
    }
  }
})

const utils = {
  extend(a, b, context) {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context)
        } else {
          a[key] = b[key]
        }
      }
    }
  },
}

function CreateAxiosFun() {
  let axios = new Axios()
  let req = axios.request.bind(axios)
  utils.extend(req, Axios.prototype, axios)
  return req
}

let axios = CreateAxiosFun()
