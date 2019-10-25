const ws = require('ws')

const client = new ws('ws://127.0.0.1:6080')

client.on('open', () => {
    console.log('链接成功')
    client.send('hello world')
    client.send('hello world')
    client.send('hello world')
    client.send('hello world')
    client.send('hello world')
    client.send('hello world')
    client.send('hello world')
})

client.on('error', (err) => {
    console.log('error', err)
})

client.on('close', () => {
    console.log('socket close')
})

client.on('message', (msg) => {
    console.log(msg)
})
