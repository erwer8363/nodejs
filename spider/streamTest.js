const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const method = req.method
    if (method === 'GET') {
        const fileName = path.resolve(__dirname, 'data.txt')
        let stream = fs.createReadStream(fileName)
        stream.pipe(res)
    }
})

server.listen(8000)
