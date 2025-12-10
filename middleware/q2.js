const express = require('express');

const app = express();

// Admin middleware
const adminMiddleware = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).send('Not Authorized');
    }
};

// Example route protected by admin middleware
app.get('/admin/dashboard', adminMiddleware, (req, res) => {
    res.send('Welcome to admin dashboard');
});

// Example protected post route
app.post('/admin/users', adminMiddleware, (req, res) => {
    res.send('User created');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});