/**
 * Created by ever on 2020/3/3.
 */
const fs = require('fs')
fs.stat('./hehe.js', (err, stats) => {
  if (err) {
    console.log('文件不存在')
  } else {
    fs.unlink('./hehe.js', (err) => {
      console.log(err)
    })
  }
})
