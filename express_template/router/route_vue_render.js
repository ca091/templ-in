const path = require('path')
const fs = require('fs')
const Vue = require('vue')
const express = require('express')
const router = express.Router({})

//webpack打包生成
const bundle = require('../vue-ssr-server-bundle.json')
const {createRenderer, createBundleRenderer} = require('vue-server-renderer')
const baseConfig = {
  template: fs.readFileSync(path.resolve(__dirname, './bundle-render-template.html'), 'utf-8'),
}
const renderer = createRenderer(baseConfig)
const bundleRenderer = createBundleRenderer(bundle, Object.assign({}, baseConfig, {
  // runInNewContext: false
}))
const app = new Vue({
  template: '<div>Hi</div>',
})

router.get('/', (req, res, next) => {
  renderer.renderToString(app).then(html => {
    res.send(html)
  }).catch(err => {
    res.send(err.message)
  })
})

router.get('/bundle', (req, res, next) => {
  bundleRenderer.renderToString({}).then(html => {
    res.send(html)
  }).catch(err => {
    res.send(err.message)
  })
})

module.exports = router
