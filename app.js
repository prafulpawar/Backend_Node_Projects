const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();
const PORT = 3000 

app.set('view engine','ejs')



app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index')
    
})
app.get('/create', (req, res) => {
    res.redirect('/');
});

app.post('/create',(req,res)=>{
    console.log(req.body)
    res.send("abcd")
})


app.listen(PORT,(req,res)=>{
    console.log(`Server Running On Port ${PORT}`);
})