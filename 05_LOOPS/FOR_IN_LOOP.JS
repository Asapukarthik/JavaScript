// FOR IN --> Statement loops through the properties of an Object

/*
Syntax:

for (key in object) {
  // code block to be executed
}
*/


let std={
    name:"karthik",
    age:18,
    cgpa:7.2
}
for(let key in std){
    console.log(key,std[key]);
}