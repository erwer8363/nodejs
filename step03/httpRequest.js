const http = require('http')
const querystring = require('querystring')

let contents = querystring.stringify({
    name: 'nodejs',
    email: 'czever2015@gmail.com',
    address: 'mandaluyong, manila'
})

let options = {
    host: 'www.byvoid.com',
    path: '/application/node/post.php',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-length': contents.length

    }
}

let req = http.request(options, res => {
    res.setEncoding('utf-8')
    res.on('data', data =>{
        console.log(data)
    })
})

req.write(contents)
req.end()