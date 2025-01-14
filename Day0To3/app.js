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
   
    const formattedDate = new Date().toLocaleString();

    console.log(formattedDate)
     const formatted=[
        {
            name:'a',
            email: 'a@gmail.com'
        },
        {
            name:'b',
            email: 'b@gmail.com'
        },

     ]
     
    res.render('index',{
        formattedDate: formattedDate,
        data: formatted
    })
    
})
app.get('/create', (req, res) => {
    res.redirect('/');
});

app.post('/create',(req,res)=>{
    res.send("abcd")
})

app.get('*',(req,res)=>{
    res.render('wildcard')
})


app.listen(PORT,(req,res)=>{
    console.log(`Server Running On Port ${PORT}`);
})