import http from 'http'
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain ' })
    res.end('Hello , Welcome to my Node js server!')
})

// server listens on port 3000
server.listen(3000, () => {
    console.log("Server is runnung on 3000 port")
})