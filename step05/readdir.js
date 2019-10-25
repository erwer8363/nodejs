const fs = require('fs')
// let dirs = fs.readdirSync('./')
// console.log(dirs)
fs.readdir('./', (err, data) => {
    console.log(err, data)
})
fs.readFile('./txt.text','utf8', (err, data)=>{
    console.log(data)
})
fs.readdir('../step01', (err, data)=> {
    if (err) {
        console.log('读取错误')
    } else {
        console.log(data)
    }
})