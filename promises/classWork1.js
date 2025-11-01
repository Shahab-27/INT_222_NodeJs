function downloadFile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("File downloaded successfully")
        },3000);
    });
}

async function startDownload() {
    console.log("Downloading file...")
    let result = await downloadFile();
    console.log(result);
    console.log("Process Finished");
}
startDownload()