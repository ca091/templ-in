const cors = require('cors');
const request = require('request');
const express = require('express');

let app = express();
app.use(cors());

app.get('/', (req, res, next) => {
    switch (req.query.responseType){
        case 'blob':
            req.pipe(request(req.query.url).on('error', next)).pipe(res);
            break;
        case 'text':
        default:
            request({url: req.query.url, encoding: 'binary'}, (error, response, body) => {
                if (error) {
                    res.send(error);
                }else{
                    res.send(
                        `data:${response.headers['content-type']};base64,${Buffer.from(
                            body,
                            'binary'
                        ).toString('base64')}`
                    );
                }
            });
    }
});

app.use((req, res, next) => {
    let err = new Error('Sorry Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send('<p>'+err.message+'</p>');
});

let port = 8002;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});