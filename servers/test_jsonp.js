const express = require('express')

let app = express()

app.get('/say', (req, res) => {
  let {wd, callback} = req.query
  res.end(`${callback}('server: i get the word:: ${wd}')`)
})

const port = 3002
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});