const express = require('express')
const cors = require('cors')
const app = express()

const connection = require('../src/config')
const routes = require('../routes/index')
const port = 4242

app.use(cors('*'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

app.use('/api/categories', routes.categories)

app.use('/api/homepage', routes.homepage)

app.use('/api/pictures', routes.pictures)

app.listen(port, () => {
  console.log(`Server is runing on ${port}`)
})
