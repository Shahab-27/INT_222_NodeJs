function downloadFile(){
    return new Promise((resolve)=>{
        console.log("Downloading File...")
        setTimeout(()=>{
            resolve("File downloaded successfully")
        },3000);
    });
}

downloadFile()
.then((message)=>console.log(message))
.finally(()=>console.log("Process Finished.."))