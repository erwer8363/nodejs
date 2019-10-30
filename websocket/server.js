const ws = require('ws')

const server = new ws.Server({
    host: '127.0.0.1',
    port: 6080
})

function websocket_add_listener(client_socket) {
    client_socket.on('error', function (err) {
        console.log(err)
    })
    client_socket.on('close', function () {
        console.log('close')
    })
    client_socket.on('message', function (data) {
        console.log(data)
        client_socket.send('thank you')
    })
}

function on_server_client_coming(client_sock) {
    console.log('client coming')
    client_sock.send('welcome to here')
    websocket_add_listener(client_sock)
}

server.on('connection', on_server_client_coming)

function on_server_client_error(err) {
    console.log(err)
}

server.on('error', on_server_client_error)

function on_server_client_headers(data) {
    console.log('headers ....', data)
}

server.on('headers', on_server_client_headers)