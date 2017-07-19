'use strict'
const express = require('express')
const app = express()
const path = require('path')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const rootPath = path.join(__dirname, '..', '..')
const browserPath = path.join(rootPath, 'browser')
const nodeModulesPath = path.join(rootPath, 'node_modules')

// logging middleware
app.use(volleyball)

// req.body parsing
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//static routing
app.use(express.static(rootPath))
app.use(express.static(browserPath))
app.use(express.static(nodeModulesPath))

app.get('*', (req, res)  => {
  res.sendFile(path.join(__dirname, '../brower/index.html'))
})

// error handling
app.use((err, req, res, next) => {
    console.error(err, err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
