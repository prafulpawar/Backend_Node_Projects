const express = require('express');
const fs = require('fs')
const PATH = require('path')
const app = express();
const PORT = 3000 


app.set('view engine','ejs')

app.use((req,res,next)=>{
    console.log("World ")
    next()
})
app.use(express.static(PATH.join(__dirname,"public")))

console.log(express.static(PATH.join(__dirname,"public")))



app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/contact',(req,res)=>{
    res.render('index')
})


app.listen(PORT,(req,res)=>{
    console.log(`Server Running On Port ${PORT}`);
})