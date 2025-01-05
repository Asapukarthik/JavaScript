// ELSE IF -  to specify a new condition to test, if the first condition is false

/*
Syntax:

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

 */

let a =-7

if(a<0)
    console.log("The number is Negative");
else if(a>0)
    console.log("The number is Postive");
else 
    console.log("The number is Zero");
