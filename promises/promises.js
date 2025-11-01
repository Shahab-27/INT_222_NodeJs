let myPromise = new Promise((resolve,reject) =>{
    let isDone = true;

    if(isDone){
        resolve("Task completed successfully")
    }else{
         resolve("Task Failed")
    }
})

myPromise
.then((mesage) =>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise Finished")
})