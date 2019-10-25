const fs = require('fs')
const crypto = require('crypto')

const base64_encode = (content) => {
    const buf = Buffer.from(content)
    return buf.toString('base64')
}

const base64_decode = (content) => {
    const buf = Buffer.from(content, 'base64')
    return buf
}

// fs.readFile('./lp_01.jpg', (err, data) => {
//     if (err) {
//         return err
//     }
//     const base64Code = base64_encode(data)
//     const base64De = base64_decode(base64Code)
//     fs.writeFile('./copy_01.jpg', base64De, (err) => {
//         console.log(err)
//     })
// })

const md5 = (data) => {
    const md5 = crypto.createHash('md5')
    md5.update(data)
    return md5.digest('hex')
}

let str1 = md5('12344')
console.log(str1)