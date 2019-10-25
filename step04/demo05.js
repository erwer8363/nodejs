const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

async function render(page) {
    return new Promise((res,reg)=>{
        let pageUrl = `./pages/${page}`
        fs.readFile(pageUrl,'binary', (err, data) => {
            if (err) {
                reg(err)
            } else {
                res(data)
            }
        })
    })
}

async function route(url) {
    let page = 'error.html'
    switch (url) {
        case '/':
        case 'index':
            page = 'index.html'
            break
        case '/todo':
            page = 'setting.html'
            break
        default:
            break
    }
    let html = await render(page)
    return html
}

app.use(async (ctx)=>{
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})

app.listen(3000, ()=>{
    console.log(`Server started on port 3000`)
})