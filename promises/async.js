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

// --------------------2--------------------

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully !!");
        },2000);
    });
}