const ws = require('ws')

const socket = new ws('ws://127.0.0.1:6080')

function on_open_handler() {
    console.log('connection success')
    socket.send('hello world')
    socket.send('hello world@@')
    socket.send('hello world!!')
    socket.send('hello world$$')
}

function on_message_handler(data) {
    console.log(data)
}

function on_close_handler() {
    console.log('socket closed')
}

function on_error_handler(err) {
    console.log(err)
}

socket.on('open', on_open_handler)
socket.on('message', on_message_handler)
socket.on('close', on_close_handler)
socket.on('error', on_error_handler)