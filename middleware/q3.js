const express = require('express');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// 3. Validation Middleware (check name and age in body)
const validateMiddleware = (req, res, next) => {
    if (req.body.name && req.body.age) {
        next();
    } else {
        res.status(400).send('Invalid Request');
    }
};

// Example route using validation middleware
app.post('/api/user', validateMiddleware, (req, res) => {
    res.status(200).json({ message: 'Valid request', data: req.body });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});