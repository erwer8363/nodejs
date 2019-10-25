/**
 * Created by ever on 15/08/2017.
 */
// var http = require('http');
// //response 发给前台的东西
// // request 请求的东西
// var server = http.createServer(function (request,response) {
//     response.setHeader('Content-Type','text/html');
//     response.write('<html><head><meta charset="utf-8"></head>');
//     response.write('<body>');
//     response.write('<h1>你好</h1>');
//     response.write('</body>');
//     response.end();
// });
//
// console.log('Open http://localhost:8080');
// server.listen(8080);

let arr = [1, 2, [3, 4, [5, 6, 7]]]

const flatten = arr => {
    return arr.reduce((prev, next) => prev.concat(Array.isArray(next) ? flatten(next) : next), [])
}

// let newArr = arr.reduce((a, b) => a.concat((Array.isArray(b) ? [...b] : b)), [])
let newArr = flatten(arr)
console.log(newArr[5])