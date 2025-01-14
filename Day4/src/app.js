const express = require('express');
const app = express();
const Controller = require('./controllers/index.controller.js')
const usersController = require('./controllers/user.controller.js')
const productController = require('./controllers/product.controller.js')
app.get('/',Controller.indexController)
// app.get('/about',Controller.aboutController)

app.get('/users/profile',usersController.indexController)
app.get('/users/products',productController.getProdfucts)
module.exports = app;