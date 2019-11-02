const ws = require('ws')

const server = new ws.Server({
    host: '127.0.0.1',
    port: 6080
})

// 监听接入进来的客户端事件
function websocket_add_listener(client_socket) {
    client_socket.on('error', function (err) {
        console.log(err)
    })
    client_socket.on('close', function () {
        console.log('close')
    })
    // message事件,data已经是根据websocket协议解码开来的原始数据,
    // websocket底层有数据包封包协议,所以,绝对不会出现粘包问题
    // 没解一个数据包,就会触发一次message事件,不会出现粘包的问题,send一次,就会把send的数据包独立封包
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

// 有客户端接入进来
server.on('connection', on_server_client_coming)

function on_server_client_error(err) {
    console.log(err)
}

server.on('error', on_server_client_error)

function on_server_client_headers(data) {
    console.log('headers ....', data)
}

server.on('headers', on_server_client_headers)