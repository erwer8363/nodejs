const hello = () => {
    // __dirname  当前目录名字
    // __filename 当前文件名字
    console.log('hello', __dirname, __filename)
}
hello()
module.exports.hello = hello