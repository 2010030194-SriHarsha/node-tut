const http = require('http')
const {readFileSync} = require('fs')
const server = http.createServer((req,res)=>{
    const file = readFileSync('./content/first.html','utf8')
    res.end(file)   
})
server.listen(5000)
