const express = require('express');

// Importing express

// Creating an instance of express
const app = express();

// 4. Error Handling Middleware
const errorMiddleware = (err, req, res, next) => {
    res.status(500).send('Something went wrong');
};

// Using the error handling middleware
app.use(errorMiddleware);

// Starting the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});