const express = require('express');
const app = express();
const router = require('./routes/index.routes.js');
const productRoutes = require('../src/routes/product.route.js')
app.use('/',router)
app.use('/products',productRoutes)
module.exports = app;