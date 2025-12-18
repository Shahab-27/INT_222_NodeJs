const express = require('express');

// 5. Timing Middleware (log request duration)
const timingMiddleware = (req, res, next) => {
    const startTime = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`${req.method} ${req.path} - ${duration}ms`);
    });
    next();
};

const app = express();

// Use the timing middleware
app.use(timingMiddleware);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//this is my git push
