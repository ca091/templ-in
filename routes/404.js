module.exports = async ctx => {
    ctx.state.data = {
        title: 'not found',
        body: '404 page'
    }
};