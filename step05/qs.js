const qs = require('querystring')
let str = 'name=aa&password=88999&sex=0'
let obj = qs.parse(str, '&', '=')
console.log(obj)