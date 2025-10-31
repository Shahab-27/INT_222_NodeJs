const fs = require('fs')

fs.writeFile('output.txt','Hello Node js!',(err)=>{
    if(err){
        console.log("Error writing File: ",err);
    }
    else{
        console.log("File written successfully")
    }
})