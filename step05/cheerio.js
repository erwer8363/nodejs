const cheerio = require('cheerio')
let $ = cheerio.load('<span><p>标题</p><img src="http://www.baidu.com"></span>')
console.log($('img').attr('src'))