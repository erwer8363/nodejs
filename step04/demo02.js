const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{
    let url = ctx.url
    let request = ctx.request
    let req_query = request.query
    let req_querystr = request.querystring

    let ctx_query = ctx.query
    let ctx_querystr = ctx.querystring

    ctx.body = {
        url,
        request,
        req_query,
        req_querystr,
        ctx_query,
        ctx_querystr
    }
});
app.listen(3000, () => {
    console.log(`Server started on port`);
});