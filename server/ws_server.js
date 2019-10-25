const ws = require('ws')

const server = new ws.Server({
    host: '127.0.0.1',
    port: 6080
})

function websoket_add_listener(client_sock) {
    console.log(client_sock)
    client_sock.on('close', () => {
        console.log('客户端关闭链接')
    })
    client_sock.on('error', err => {

    })
    client_sock.on('message', msg => {
        console.log(msg)
        client_sock.send('thank you')
    })
}

server.on('connection', (client_sock) => {
    console.log('client comming')

    websoket_add_listener(client_sock)

})

server.on('error', (error) => {
    console.log('error  ', error)
})

server.on('headers', (data) => {
    console.log('headers', data)
})