/**
 * Created by ever on 06/09/2017.
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var iconv = require("iconv-lite");

var url = "http://wodeshucheng.com/book_14873/3743362.html";
//因为字符的问题，所以添加这个方法
function myRequest(url,callback) {
    var options = {
        url:url,
        encoding:null
    }
    request(options,callback);
}
function getContent(url) {
    myRequest(url,function (error,response,body) {
        if(!error && response.statusCode == 200){
            var html = iconv.decode(body,"gb2312");
            var $ = cheerio.load(html);
            var urlNext = $("a#pager_next").attr("href");
            console.log(urlNext);
            $("div.chapter_Turnpage").remove();
            var contentStr = $("div#htmlContent").text();
            fs.appendFile("wodeshucheng.txt",contentStr);
            getContent(urlNext);
        }
    })
}

getContent(url);
