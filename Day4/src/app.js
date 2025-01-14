const express = require('express');
const app = express();
const Controller = require('./controllers/index.controller.js')

app.get('/',Controller.indexController)

module.exports = app;