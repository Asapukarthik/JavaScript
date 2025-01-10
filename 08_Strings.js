// --**string**--

// A JavaScript string is zero or more characters written inside quotes

let str1="heroo";

let str2="karthik";

// template literals

let obj={
    item : "pen",price:10
};

// Automatic replacing of variables with real values is called string interpolation

let output=`the cost of ${obj.item} is ${obj.price} rupess`;

console.log(output);


// ***** [Stirng Methods] *****


var str="    karthik herooo      ";

// --> length property returns the length of a string

console.log(str.length());

//  --> string is converted to upper case

console.log(str.toUpperCase());

// --> string is converted to lower case 

console.log(str.toLowerCase());

// trim() --> method removes whitespace from both sides of a string

console .log(str.trim());

// trimStart() --> removes whitespace only from the start of a string

console.log(str.trimStart());

// trimEnd() --> removes whitespace only from the end of a string

console.log(str.trimEnd());

// slice() --> extracts a part of a string and returns the extracted part in a new string

str ="karthik heroooo";
console.log(str.slice(1, 5));

// concat() --> method joins two or more strings

let str3="karthik";
let str4="heroo";
console.log(str4.concat(str3));

// replace() -->method replaces a specified value with another value in a string

let s="i love sam";
console.log(s.replace("m","mantha"));

let username =prompt("enter our full name");
username="@"+username+username.length;
console.log(username);