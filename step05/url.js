const url = require('url')
let urlStr = 'https://docs.cocos.com/creator/api/zh/classes/Node.html'
let obj = url.parse(urlStr)
console.log(obj)