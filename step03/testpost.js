const http = require('http')

const querystring = require('querystring')

const util = require('util')


http.createServer((req,res)=>{
    let post = ''
    req.on('data', (chunk) => {
        post += chunk
    })

    req.on('end', ()=>{
        post = querystring.parse(post)
        res.end(post)
    })
}).listen(3000)
console.log('开始监听端口3000')