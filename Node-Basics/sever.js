const http=require('http')
const server = http.createSever((req,res)=>{
    res.end(`server page`)
})
server.listen(8000)