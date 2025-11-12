import http from 'http';
import fs from 'fs';
import url from 'url';


const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Question 1: Hello World
    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello World</h1>');
    }

    // Question 2 & 3: Multiple Routes with HTML
    else if (pathname === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    }
    else if (pathname === '/contact' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact Page</h1>');
    }
    else if (pathname === '/address' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Address Page</h1>');
    }

    // Question 4: Read from text file
    else if (pathname === '/file' && req.method === 'GET') {
        fs.readFile('data.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });
    }

    // Question 5: JSON data (products)
    else if (pathname === '/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 200 }
        ]));
    }

    // Question 8 & 10: GET method with query parameters (user info)
    else if (pathname === '/user' && req.method === 'GET') {
        const name = query.name || 'Guest';
        const age = query.age || 'N/A';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ name, age, message: 'Welcome' }));
    }

    // Question 9: Status codes
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// Question 6: Custom port
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});