const path = require('path')
const art = require('art-template')
const Router = require('koa-router')
const router = new Router()

router.get('/', async ctx => {
  let template = path.resolve(__dirname, '../views/index.html')
  const data = {
    lastBuildDate: new Date().toUTCString(),
    updated: new Date().toISOString(),
    title: 'index',
    body: 'index page',
  }
  ctx.body = art(template, data)
})

router.get('/join', require('./join'))
router.get('*', require('./404'))

module.exports = router
