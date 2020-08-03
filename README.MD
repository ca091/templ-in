# 启动服务

## express with template(pug、art-template、vue-ssr)

```
node express_template/server.js
```

### vue-ssr

```
npm run build  //生成 vue-ssr-server-bundle.json, then copy to express_template
```


## koa with art-template

```
node koa_art-template/index.js
```


## koa with spa(multiple spa project)

```
node koa_router-spa/index.js
```

### 访问路径，正确匹配到对应项目、对应项目路由

- host/lite/room-manage
- host/lite/login
- host/room/publish
- host/room/watch
- host/room/login


# servers
- imgProxy.js: 代理跨域图片资源


# 模版引擎 pug
- [pugjs docs](https://pugjs.org/language/inheritance.html)
