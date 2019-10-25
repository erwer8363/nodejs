const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyparser());

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
        ctx.body = ctx.request.body
    } else {
        ctx.body = '<h1>404 页面</h1>'
    }
});
app.listen(3000, () => {
    console.log(`Server started on port`);
});