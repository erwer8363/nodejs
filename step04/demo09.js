const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'myCookie','JSpang',{
                // domain：写入cookie所在的域名
                // path：写入cookie所在的路径
                // maxAge：Cookie最大有效时长
                // expires：cookie失效时间
                // httpOnly:是否只用http请求中获得
                // overwirte：是否允许重写
                domain: '127.0.0.1',
                path: '/index',
                maxAge: 1000 * 60 * 60 * 24,
                expires: new Date('2019-12-31'),
                httpOnly: true,
                overwrite: false
            }
        )
        ctx.body = 'cookie is ok'
    } else {
        if (ctx.cookies.get('myCookie')) {
            ctx.body = ctx.cookies.get('myCookie')
        } else {
            ctx.body = 'hello world'
        }
    }
})

app.listen(3000, ()=>{
    console.log('server support on the port 3000')
})