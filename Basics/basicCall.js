function greet(name,callback){
    console.log("Hello " + name);
    callback() // calling the callback function
}

function sayGoodBye(){
    console.log("GoodBye!");
}

greet("Shahab" , sayGoodBye)