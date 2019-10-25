const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

let router = new Router()

const home = new Router()

home.get('/', async (ctx) => {
    ctx.body = 'home 下面的 home page'
}).get('/todo', async (ctx) => {
    ctx.body = 'home 下边的 todo 页面'
})

const page = new Router()
page.get('/', async (ctx) => {
    ctx.body = 'page 下面的 home page'
}).get('/todo', async (ctx) => {
    ctx.body = 'page 下面的 todo page'
})

router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=>{
    console.log('server surport on the port 3000')
})