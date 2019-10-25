const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello Ever'
})
    .get('/todo', async (ctx, next)=>{
        ctx.body = 'todolist...'
    })

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, ()=>{
    console.log(`server suport on port 3000`)
})