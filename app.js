// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  let startTime = new Date()
  next()
  //can listen on 'close' or 'finish'
  res.on('finish', () => {
    const endTime = new Date()
    const totalTime = endTime - startTime
    console.log(new Date(endTime).toLocaleString(), ' | ', req.method, 'from', req.originalUrl, ' | ', 'total time：', totalTime, 'ms')
  })
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})