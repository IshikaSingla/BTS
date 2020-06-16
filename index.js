var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('./index.ejs')
})

module.exports = router
