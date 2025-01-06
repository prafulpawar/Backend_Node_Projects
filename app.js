const catMe=require('cat-me')
// console.log(catMe())

const http = require('http')

const server=http.createServer((req,res)=>{
    res.end(catMe())
    console.log(req.url)
})
server.listen(3000,()=>{
    console.log('Server is running on port 3000')  // Server started successfully on port 3000
})
