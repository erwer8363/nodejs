// const request = require('request')
// request({
//     url: 'https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',
//     json: true
// }, (err, response, body) => {
//     console.log(JSON.stringify(body, null, 2))
// })

const greeting = require('./src/greeting')
greeting.hello()