// FOR OF -->  statement loops through the values of an iterable object.

/*
Syntax:
for (variable of iterable) {
  // code block to be executed
}
*/

let str="karthik";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);