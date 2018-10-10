const art = require('art-template');
const path = require('path');

module.exports = async (ctx, next) => {
    await next();
    if(!ctx.body){
        let template = path.resolve(__dirname, `../views${ctx.request.path}.html`);
        const data = {
            lastBuildDate: new Date().toUTCString(),
            updated: new Date().toISOString(),
            ...ctx.state.data,
        };
        ctx.body = art(template, data)
    }
};