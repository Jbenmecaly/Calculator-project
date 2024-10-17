// function consolDisplay(text){
//     console.log(text)
// }

//consolDisplay("Welcome to js class")

//console.log("welcome to js class")
const prompt = require("prompt-sync") ({sigint: true });

//let username = prompt("Enter your username?")
//console.log(username)
 function calculator(num1,symbol,num2){
    if(num1 && symbol == "+"){
        console.log(num1 + num2)
    }else if(num1 && symbol == "-"){
        console.log(num1 - num2)
    }else if (num1 && symbol == "*"){
        console.log(num1 * num2)
    }
    else{
        console.log("Unrecongise symbol")

    }
    }
    let num1 = Number(prompt("Enter num1? "));
    let symbol = prompt("Enter you symbol? + - / * ");
    let num2 = Number(prompt("Enter the last number? "));
    
    calculator(num1,symbol,num2);

    




     
