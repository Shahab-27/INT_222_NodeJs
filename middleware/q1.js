import express from "express";

const app = express();
const port = 3000;

const authMiddleware = (req, res, next) => {
    if (req.query.loggedin === 'true') {
        next();
    } else {
        res.status(403).send('Access Denied');
    }
};


app.get('/protected', authMiddleware, (req, res) => {
    res.send('Welcome to the protected route!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
