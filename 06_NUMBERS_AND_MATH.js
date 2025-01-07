/*  *****[NUMBERS]*****   */

const score = 400
console.log(score);

// object
const balance = new Number(100)
console.log(balance);

// Methods 

// toString() --> Returns a number as a string

console.log(balance.toString().length);

// toFixed() --> Returns a number written with a number of decimals

console.log(balance.toFixed(1));

// toPrecision() --> Returns a number written with a specified length

let num=123.456;
console.log(num.toPrecision(2));

// toExponential() --> Returns a number written in exponential notation
 
let x = 9.656;
console.log(x.toExponential(4));


// ***** [MATHS] *****

console.log(Math);

// Methods

// Math.abs() --> returns the absolute (positive) value 

console.log(Math.abs(-4));

// Math.round() --> Returns  rounded to its nearest integer

console.log(Math.round(4.6));

// Math.ceil() --> returns the value rounded up to its nearest integer

console.log(Math.ceil(4.2));

// Math.floor() --> returns the value  rounded down to its nearest integer

console.log(Math.floor(4.9));


// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments

console.log(`maximum value ${Math.min(4, 3, 6, 8)}`);

console.log(`minimum value ${Math.max(4, 3, 6, 8)}`);


// Math.random() --> returns a random number between 0 (inclusive), and 1 (exclusive)

console.log(`random value ${Math.random()}`);
console.log(`random value ${(Math.random()*10) + 1}`);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)