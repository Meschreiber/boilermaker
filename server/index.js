'use strict'

var app = require('./app')

var port = 8080
var server = app.listen(port, err => {
  if (err) throw err
  console.log('HTTP server patiently listening on port', port)
})

module.exports = server

