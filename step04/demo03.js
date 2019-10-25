const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>Jspang Koa2 request POST</h1>
            <form method='POST' action='/'>
                <p>username</p>
                <input name='username'/><br>
                <p>age</p>
                <input name='age'/><br>
                <p>address</p>
                <input name='address'/><br>
                <button type='submit'>submit</button>
            </form>
        `
        ctx.body = html

    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = await parsePostData(ctx)
    } else {
        ctx.body = '<h1>404 页面</h1>'
    }
});

let parseQueryStr = (queryStr) => {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log(' @@@@  ', queryStrList)
    for(let [index, qStr] of queryStrList.entries()) {
        let itemList = qStr.split('=')
        console.log(itemList)
        queryData[itemList[0]] = decodeURIComponent(itemList[1]) 
    }
    return queryData
}

let parsePostData = (ctx) => {
    return new Promise((resolve, reject) => {
        try {
            let postData = ''
            ctx.req.addListener('data', data => {
                postData += data
            })
            ctx.req.addListener('end', () => {
                postData = parseQueryStr(postData)
                resolve(postData)
            })
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

app.listen(3000, () => {
    console.log(`Server started on port`);
});