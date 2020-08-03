const express = require('express')
const app = express()

// api
app.get('/', (req, res) => {
  console.log('get request', req.query)
  console.log('get request', req.params)
  res.send('Hello World')
})

app.post('/', (req, res) => {
  // console.log('post request', req)
  console.log('post request body', req.body)
  console.log('post request query', req.query)
  console.log('post request params', req.params)
  res.send('Hello World')
})

app.listen(3000)
