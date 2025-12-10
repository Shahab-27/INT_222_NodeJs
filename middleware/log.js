import express from "express";
const app = express();
const port = 3000;

function logger(req, res, next){
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home page");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});