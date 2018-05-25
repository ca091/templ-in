const Koa = require('koa');
const logger = require('./utils/logger');
const config = require('./config');

const onerror = require('./middleware/onerror');
const header = require('./middleware/header');
const debug = require('./middleware/debug');
const template = require('./middleware/template');

const router = require('./router');

process.on('uncaughtException', (e) => {
    logger.error('uncaughtException: ' + e);
});

const app = new Koa();
app.proxy = true;

app.use(onerror);
app.use(header);
app.context.debug = {
    hitCache: 0,
    request: 0,
    routes: [],
    ips: [],
};
app.use(debug);
app.use(template);

//todo cache

app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, '127.0.0.1');

logger.info(`server start at ${new Date().toLocaleString()}`);