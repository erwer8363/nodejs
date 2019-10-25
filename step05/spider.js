const http = require('https')
const fs = require('fs')
const cheerio = require('cheerio')
const request = require('request')
let url = 'https://www.dandanzan.com/'
// let url = 'http://jandan.net/pic'
// let url = 'http://nodejs.cn/api/http.html#http_http_get_url_options_callback'
// let url = 'http://nodejs.cn/index.json'
let resData = ''
http.get(url, (res) => {
    const {statusCode} = res;
    const contentType = res.headers['content-type'];
    let err
    if (statusCode !== 200) {
        err = new Error(`请求失败,状态码是:${statusCode}`)
    } else if (!/^text\/html/.test(contentType)) {
        err = new Error(`无效的 content-type.期望的是 text/html 但接收到的是 ${contentType}`)
    }
    if (err) {
        console.log(err)
        res.resume()
        return
    }


    console.log('获取到的code和type是..', statusCode, contentType)

    res.setEncoding('utf8')
    res.on('data', chunk => {
        resData += chunk
        // console.log(chunk.toString('utf8'))
    })
    res.on('end', () => {
        // fs.writeFile('./bilibili.html', resData, err => {
        //     console.log(err)
        // })
        let $ = cheerio.load(resData)
        $('img').each((index, el) => {
            let imgSrc = $(el).attr('src')
            // console.log(imgSrc)
            if (imgSrc.startsWith('https')) {
                // console.log(imgSrc, /^https/.test(imgSrc))
                request(imgSrc).on('error', () => {
                    console.log('done no')
                }).pipe(fs.createWriteStream(`./img/${index}.jpg`))
            }
        })
        console.log('传输完毕')
    })
}).on("error", err => {
    console.log(err)
})