var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/public'))
app.get("/", function(req,res){
    res.render("index");
})
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(process.env.PORT || 8080, function () {
  console.log('Server is running....')
})
