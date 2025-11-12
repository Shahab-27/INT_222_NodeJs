import http from 'http'

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end('<h1>Home page</h1>')
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end('<h1>About page</h1>')
    }
    else{
        res.writeHead(404,{content})
        res.end('<h1>404 - Error: Page Not Found</h1>')
    }
})

server.listen(3000)