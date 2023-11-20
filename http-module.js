// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log('request event');
//     res.end('home page')
// })
// server.listen(5000,()=>{
//     console.log(`server running on 5000: `)
// });



// create server using event

const http= require('http');
const server = http.createServer()
server.on('request',(req,res)=>{
    res.end('Home page')
})
server.listen(5000)