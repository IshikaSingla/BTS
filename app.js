var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.set('view engine', 'ejs')

var indexRoute = require('./index')

app.use(express.static(__dirname + '/public/images'))
app.use(bodyParser.urlencoded({ extended: true }))

// ==================================ROUTES============================================================
// localhost:3000/
app.listen(process.env.PORT || 3500, function () {
  console.log('Server is running....')
})

app.use(indexRoute)
