const http = require('http')

const req = http.get('www.byvoid.com')

req.on('response', res => {
    res.setEncoding('utf8')
    res.on('data', data => {
        console.log(data)
    })
})