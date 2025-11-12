import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile("index.html", (err, data) => {
            if(err){
                res.writeHead(500);
                res.end('error loaidng html file');

            }else{
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end();
            }
        })
    }
})

server.listen(3000, () => console.log("Server running at localhost:3000"));