// JavaScript will use the browser's time zone and display a date as a full text string

// new Date() --> creates a date object with the current date and time

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString()); //converts a date to a more readable format

console.log(myDate.toLocaleString());

console.log(typeof myDate);

// new Date(date string) --> creates a date object from a date string


let myCreatedDate = new Date("01-21-2005")

console.log(myCreatedDate.toLocaleString());

//6 numbers specify year, month, day, hour, minute, second

const d = new Date(2005, 1, 21, 11, 32, 1);
console.log(d);

let newDate = new Date();

console.log(newDate);

console.log(newDate.getMonth() + 1);

console.log(newDate.getDay());
