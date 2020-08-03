const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const config = require('./config')
const router = require('./router/index.js')

const app = new Koa()
app.proxy = true

app.use(koaStatic(path.resolve(__dirname, './static')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port, '127.0.0.1')

console.log(`server start at ${new Date().toLocaleString()}; port ${config.port}`)
