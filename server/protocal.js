const bin_encode = {
    0: {
        1: function (data) {
            const cmd_len = 2 + 2 + 2 + data.username.length + 2 + data.upwd.length
            const cmd_buf = Buffer.allocUnsafe(cmd_len)

            cmd_buf.writeInt16LE(2, 0)
            cmd_buf.writeInt16LE(1, 2)

            let len = 2 + data.username.length
            cmd_buf.writeInt16LE(len, 4)
            cmd_buf.fill(data.username, 4 + 2)

            len = data.upwd.length
            const offset = 6 + data.username.length
            cmd_buf.writeInt16LE(len, offset)
            cmd_buf.fill(data.upwd, offset + 2)

            return cmd_buf
        }
    }
}

const bin_decode = {
    0: {
        1: function (cmd_buf) {
            const data = {}
            let len = cmd_buf.readUInt16LE(4)
            let offset = 4 + 2
            data.name = cmd_buf.toString('utf8', offset, len + offset)

            offset += len
            len = cmd_buf.readUInt16LE(offset)
            offset += 2
            data.upwd = cmd_buf.toString('utf8', offset, len + offset)

            return data
        }
    }
}

function bin_encode_cmd(stype, cmd_type, data) {
    if (bin_encode[stype] && bin_encode[stype][cmd_type]) {
        return bin_encode[stype][cmd_type](data)
    }
}

function bin_decode_cmd(cmd_buf) {
    // 前面两个字节是服务号,接着两个字节是命令号
    const stype = cmd_buf.readUInt16LE(0)
    const cmd_type = cmd_buf.readUInt16LE(2)
    if (bin_decode[stype] && bin_decode[stype][cmd_type]) {
        return bin_decode[stype][cmd_type](cmd_buf)
    }
}

const bin_protocal = {
    encode: bin_encode_cmd,
    decode: bin_decode_cmd
}

module.exports = bin_protocal