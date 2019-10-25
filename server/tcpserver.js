const net = require('net')
const netpkg = require('./netpkg')

const process_one_cmd = (sock, cmd) => {
    console.log(cmd.toString('utf8'))
}

const server = net.createServer((client_sock) => {
    console.log('the client coming in')
    // client_sock.setEncoding('utf8')
    client_sock.last_pkg = null
    client_sock.on('close', () => {
        console.log('客户端发来关闭链接事件')
    })
    client_sock.on('data', (data) => {
        let cmd_set = netpkg.unpack_cmd_from_data(client_sock, data)
        console.log('you always think that', cmd_set)
        for (let key in cmd_set) {
            process_one_cmd(client_sock, cmd_set[key])
        }
        // let last_pkg = client_sock.last_pkg
        // if (last_pkg != null) { // 上一次没有处理完的半包
        //     last_pkg = Buffer.concat([last_pkg, data], last_pkg.length + data.length)
        // } else {
        //     last_pkg = data
        // }
        // let offset = 0
        // let pkg_len = netpkg.read_pkg_size(last_pkg, offset)
        // if (pkg_len < 0) {
        //     return
        // }
        // while (offset + pkg_len <= last_pkg.length) { // 判断是否有完整的包
        //     // 根据长度信息来读取我们的数据,假设我们传过来的是文本数据
        //     let cmd_buf = Buffer.allocUnsafe(pkg_len - 2)
        //     last_pkg.copy(cmd_buf, 0, offset + 2, offset + pkg_len)
        //
        //     console.log('用户发过来的数据是', cmd_buf) // 用户发过来的命令数据
        //     console.log(cmd_buf.toString('utf8'))
        //     offset += pkg_len
        //     if (offset >= last_pkg.length) { // 正好处理完了
        //         break
        //     }
        //     pkg_len = netpkg.read_pkg_size(last_pkg, offset)
        //     if (pkg_len < 0) {
        //         break
        //     }
        // }
        //
        // // 能处理的数据包已经处理完了,剩余0.几个包的数据
        // if (offset >= last_pkg.length) {
        //     last_pkg = null
        // } else {
        //     let buf = Buffer.allocUnsafe(last_pkg.length - offset)
        //     last_pkg.copy(buf, 0, offset, last_pkg.length)
        //     last_pkg = buf
        // }
        // client_sock.last_pkg = last_pkg
    })
    client_sock.on('error', (e) => {
        console.log('发来错误事件', e)
    })
})

server.on('listening', () => {
    console.log('listening...')
})

// setTimeout(() => {
//     server.close()
// }, 5000)

server.on('close', () => {
    console.log('server close')
})

server.listen({
    host: 'localhost',
    port: 6080,
    exclusive: true
})

// server.close()
