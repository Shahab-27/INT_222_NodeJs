const http = require('http');

const server = http.createServer((req, res) => {
    const path = req.url;
    const method = req.method;

    if (path === '/' && method === 'GET') {
        // Show the form
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>Enter Two Numbers</h2>
            <form action="/calculate-sum" method="POST">
                <input type="number" name="num1" placeholder="First Number" required />
                <input type="number" name="num2" placeholder="Second Number" required />
                <button type="submit">Submit</button>
            </form>
        `);
    }

    else if (path === '/calculate-sum' && method === 'POST') {
        let body = '';

        // Read the incoming POST data
        req.on('data', chunk => {
            body += chunk.toString(); // body is in x-www-form-urlencoded format
        });

        req.on('end', () => {
            // Parse the form data (e.g. "num1=5&num2=6")
            const formData = new URLSearchParams(body); 
            const num1 = parseFloat(formData.get('num1'));
            const num2 = parseFloat(formData.get('num2'));

            if (isNaN(num1) || isNaN(num2)) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                res.end(`<h1>Invalid input. Please enter valid numbers.</h1>`);
                return;
            }

            const sum = num1 + num2;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>The sum is: ${sum}</h1>`);
        });
    }

    else {
        // Handle 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
