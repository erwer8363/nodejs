const fs = require('fs')
// fs.mkdir('./test',err => {
//     if (err) {
//         console.log('创建失败')
//     } else {
//         console.log('ok')
//     }
// })
// fs.rename('./test', './test01', err => {
//     console.log('ok', err)
// })
// fs.rmdir('./test01', err => {
//     console.log('ok', err)
// })
fs.stat('../step02', (err, stats) => {
    if (stats.isDirectory()) {
        console.log('是一个文件')
    } else {
        console.log('是一个目录')
    }
    // console.log(stats)
})