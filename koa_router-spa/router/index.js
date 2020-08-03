const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const router = new Router()

// see https://github.com/pillarjs/path-to-regexp

router.get('/lite/:name?/:id?', async (ctx, next) => {
  console.log('lite params: ', ctx.params)
  ctx.type = 'text/html; charset=utf-8' // 修改响应类型
  ctx.body= fs.readFileSync(path.resolve(__dirname, '../static/lite/index.html')) // 修改响应体
})

router.get('/room/:name?/:id?', async (ctx, next) => {
  console.log('lite params: ', ctx.params)
  ctx.type = 'text/html; charset=utf-8' // 修改响应类型
  ctx.body= fs.readFileSync(path.resolve(__dirname, '../static/room/index.html')) // 修改响应体
})

module.exports = router
