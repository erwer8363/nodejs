const fs = require('fs')
// if (fs.existsSync('./output')) {
//     console.log('exists')
// } else {
//     fs.mkdir('./output', (err) => {
//         console.log('create complete')
//     })
// }
// console.log('hello')

// fs.stat('./hello.txt', (err, status) => {
//     console.log(status)
// })

// fs.readFile('./hello.txt', (err, file_data) => {
//     if (err) {
//         return err
//     }
//     console.log(file_data)
// })

fs.open('./hello.txt', 'r', (err, file_handle) => {
    if (err) {
        console.log(err)
        return
    }
    fs.fstat(file_handle, (err, stats) => {
        if (err) {
            return err
        }
        let buffer = Buffer.allocUnsafe(stats.size)

        fs.read(file_handle, buffer, 0, stats.size, null, (err) => {
            console.log('the small one is ', buffer.toString())
            fs.close(file_handle)
        })
    })
})

fs.writeFile('./writeFile.txt', 'hello this file is writed', (err) => {
    if (err) {
        return err
    }
    console.log('success')
})
