function signup(callback){
    console.log("User signed up ");
}

function login(callback){
    console.log("User logged up ");
}

function showDashboard(callback){
    console.log("Welcome to the dashboard");
}

signup(()=>{
    login(showDashboard);
})