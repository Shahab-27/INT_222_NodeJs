import express from "express"
import bodyparser from "body-parser"

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded())

app.post('/details',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;

    res.send('your name is ${name} and your age is ${age}');

});

app.listen(3000,()=>{
    
})