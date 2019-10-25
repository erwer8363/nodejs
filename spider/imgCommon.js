const request = require('request')
const fs = require('fs')
const https = require('https')
const cheerio = require('cheerio')

class ImgUt {
    static getImgSrcList = (opts = {}, path = '') => {
        request(opts, (error, response, body) => {
            console.log('error', error)
            console.log('statusCode', response && response.statusCode)
            const $ = cheerio.load(body)
            let imgs = []
            let _ = /(http[s]?|ftp)/
            $('img').each((i, e) => {
                let src = $(e).attr('src')
                if (!_.test(src)) {
                    src = src.replace(/\/{2}/, 'https://')
                }
                imgs.push(src)
            })

            imgs.forEach((item, index) => {
                if (item.indexOf('http') > -1) {
                    console.log('the item is ', typeof item)
                    request(item).pipe(fs.createWriteStream(`${path}/${index}.jpg`))
                }
            })

        })
    }
}

module.exports = ImgUt