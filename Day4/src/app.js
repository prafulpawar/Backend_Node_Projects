const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello, How Are You?")
})

module.exports = app;