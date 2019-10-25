const netpkg = {
    // 根据封包协议读取包体的长度
    read_pkg_size(pkg_data, offset) {
        if (offset > pkg_data.length - 2) {
            return -1
        }

        return pkg_data.readUInt16LE(offset)
    },
    // 把一个要发送的数据封包 2个字节长度+数据
    package_data(data) {
        let buf = Buffer.allocUnsafe(2 + data.length)
        buf.writeInt16LE(2 + data.length, 0)
        console.log(buf)
        buf.fill(data, 2)
        return buf
    },
    // 解包
    unpack_cmd_from_data(client_sock, data) {
        let last_pkg = client_sock.last_pkg
        let cmd_set = []
        if (last_pkg != null) { // 上一次没有处理完的半包
            last_pkg = Buffer.concat([last_pkg, data], last_pkg.length + data.length)
        } else {
            last_pkg = data
        }
        let offset = 0
        let pkg_len = this.read_pkg_size(last_pkg, offset)
        if (pkg_len < 0) {
            return cmd_set
        }
        while (offset + pkg_len <= last_pkg.length) { // 判断是否有完整的包
            // 根据长度信息来读取我们的数据,假设我们传过来的是文本数据
            let cmd_buf = Buffer.allocUnsafe(pkg_len - 2)
            last_pkg.copy(cmd_buf, 0, offset + 2, offset + pkg_len)
            cmd_set.push(cmd_buf)
            offset += pkg_len
            if (offset >= last_pkg.length) { // 正好处理完了
                break
            }
            pkg_len = this.read_pkg_size(last_pkg, offset)
            if (pkg_len < 0) {
                break
            }
        }

        // 能处理的数据包已经处理完了,剩余0.几个包的数据
        if (offset >= last_pkg.length) {
            last_pkg = null
        } else {
            let buf = Buffer.allocUnsafe(last_pkg.length - offset)
            last_pkg.copy(buf, 0, offset, last_pkg.length)
            last_pkg = buf
        }
        client_sock.last_pkg = last_pkg
        return cmd_set
    },
    test_pkg_two_action(action1, action2) {
        let buf = Buffer.allocUnsafe(4 + action1.length + action2.length)
        buf.writeInt16LE(2 + action1.length, 0)
        buf.fill(action1, 2)

        let offset = 2 + action1.length
        buf.writeInt16LE(2 + action2.length, offset)
        buf.fill(action2, offset + 2)
        return buf
    }
}

module.exports = netpkg