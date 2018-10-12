const path = require('path');
const express = require('express');
const http = require('http');
const art = require('art-template');
art.defaults.extname = '.html';

const config = require('./config');

const app = express();

// 模版引擎选择：art-template 、pug ...

// app.set('view engine', 'html');
// app.set('views', path.resolve(__dirname, './views'));
// app.engine('html', require('express-art-template'));

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, './views-pug'));

app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.get('/', (req, res) => {
    res.render('index', {title: 'index'})
});

app.get('/join', (req, res, next) => {
    res.render('join', {title: 'join', body: 'join us'})
});

const route_vue = require('./routes-express/route_vue_render.js');
app.use('/vuessr', route_vue);

app.use((req, res, next) => {
    var err = new Error('Sorry Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('<p>'+err.message+'</p>');
});

app.set('port', config.port);

let server = http.createServer(app);
server.listen(config.port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}