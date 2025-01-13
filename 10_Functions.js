// A JavaScript function is a block of code designed to perform a particular task.

// Function names can contain letters, digits, underscores, and dollar signs 


function myFun(msg,n){
    console.log("javScript...!");
    console.log(msg,n);
}
for(let i=0;i<5;i++){
myFun("I Love You",3000);
}


function Sum(x,y){
    //    local variable -->scope
    s=x+y;
    return s;
    console.log("cool"); // after return the statement will not execute 
}

let val=Sum(3,4);
console.log(`the value is : ${val}`);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}


// *****[Arrow Functions]*****

// Arrow functions allow us to write shorter function syntax

/*
Syntax:
const FunName=()=>{
    // do some work
    }
*/

const sum=(num1,num2)=>{
    return num1+num2
}

console.log(sum(7,92));
