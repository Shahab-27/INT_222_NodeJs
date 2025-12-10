import express from "express";
const app = express();
function auth(req,res,next){
    if(req.headers.token === "12345"){
        next();
    }else{
        res.status(401).send("Access Denied");
    }
}

app.get("/secure",auth,(req,res)=>{
    res.send("Welcome! You are authenticated.");
});

const port = 3000;
app.listen(port,()=>{
    console.log("Server is listening at port 3000")
})
