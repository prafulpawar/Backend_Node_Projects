// const catMe=require('cat-me')
// console.log(catMe())

// const http = require('http')

// const server=http.createServer((req,res)=>{
//      if(req.url == '/about'){
//         res.end('aboutPage')
//      }
//      else {
//          res.end(catMe())
//      }
// })
// server.listen(3000,()=>{
//     console.log('Server is running on port 3000')  // Server started successfully on port 3000
// })

// const express = require('express');
// const app = express();
// const morgon = require('morgan')
// app.set('view engine','ejs');
// app.use((req,res,next)=>{
//      console.log("This Is Middleware");
//      // bass hum return karate hai next 
//      // build in 
//      // custom 
//      // 3party middleware
//      next();
// })
// app.use(morgon())

// app.get('/',(req,res)=>{
//     res.render('index')
// })

// app.listen(3000,()=>{
//     console.log('Server is running on port 3000') // Server started successfully on port 3000
// })


