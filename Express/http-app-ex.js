const http = require('http')
const {readFileSync} = require('fs')
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImgae = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1>About page </h1>`)
        res.end()
    }
    //style
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    //logo
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImgae)
        res.end()
    }
    //logic page
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(`<h1>Error page</h1>`)
        res.end()
    }
})
server.listen(5000)
