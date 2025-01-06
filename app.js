// const catMe=require('cat-me')
// // console.log(catMe())

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

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
     res.send('Hello World')
})