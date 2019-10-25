const http = require('http')
const url = require('url')
const utils = require('util')


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(utils.inspect(url.parse(req.url, true)))
}).listen(3000)
console.log('服务器监听8000端口')

