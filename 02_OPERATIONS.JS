// USED TO PERFORM SOME OPERATIONS ON DATA

//  ***** [ARITHMETIC OPERATION] *****

var a=10;
var b=20;

const sum=a+b
console.log("the sum is: ",sum); // SUM

const diff=a-b
console.log("the difference is: ",diff); //DIFF

const mul=a*b
console.log("the product is: ",mul); //MULTIPLY

const div=a/b
console.log("the divison is: ",div); //DIVIION

const rem=a%b
console.log("the remainder is: ",rem); //REMAINDER

const expo=a**b
console.log("the exponentiation",expo); //EXPONENTIAL


//  ***** [ASSIGNMENT OPERATIONS] ***** 

a+=10
console.log("Value after Incrementation: ",a); //INCREMENT 

b-=10
console.log("Value after Decrementation: ",b); //DECREMENT

a*=2
console.log("value after multiply ",a); // MULTIPLICATION

b%=5;
console.log("value after divison",b); // DIVISION


//  ***** [COMPARISION OPERATION] *****


 a=30
 b=20

console.log(`Is ${a} Greaterthan ${b}? : `,a>b);  // Greaterthan
console.log(`Is ${a} Lessthan ${b}? : `,a<b);   //Lessthan

//Greaterthan or Equal to
console.log(`Is ${a} Greaterthan or Equal to ${b}? : `,a>=b); 
//Lessthan or Equal to
console.log(`Is ${a} Lessthan or Equal to ${b}? : `,a<=b);

let num1=100
let num2=100
let num3='100'
// ==
console.log("Is num1 equal to num2? ",num1==num2);
console.log("Is num2 equal to num3? ",num2==num3);
//===
console.log("Is num1 equal to num3 in value and in datatype too? ",num1===num3);


// ***** [LOGICAL OPERATION] ***** 

let a1=37
let b1=52
let c=9
let d=7

// LOGICAL AND
let isvalid= (b1>a1)&&(d>c)
console.log(isvalid);

// LOGICAL OR
isvalid=(b1>a1)||(d>c)
console.log(isvalid);

// LOGICAL NOT
isvalid=!isvalid
console.log(isvalid);


// ***** [OPERATOR TENARY] *****
// CONDITION ? TRUE OUTPUT : FALSE OUTPUT

const X=6
console.log((X>0)?"Positive":"Negative");

