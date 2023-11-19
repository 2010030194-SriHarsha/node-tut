const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to home page')
    }
    if(req.url==='/about'){
        res.end('This is about page')
    }
    res.end(`
    <h1>Invalid page/h1>
    <a href='/'>back home </a>
    `)
})
server.listen(5000);