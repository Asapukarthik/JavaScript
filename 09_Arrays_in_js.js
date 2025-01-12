// --** Array **--

// An array is a special variable, which can hold more than one value

let heros=["ironman ","karthik ","hulk ","thor ","capitanAmerica"];

// length property returns the length (size) of an array

console.log(heros.length);

//  toString() --> converts an array to a string 

console.log(heros.toString());

//  pop() --> method removes the last element from an array

heros.pop();

console.log(`returns the heros => ${heros}`);

// push() --> method adds a new element to an array

heros.push("Allu Arjun");

console.log(`returns the heros => ${heros}`);

// shift() --> method removes the first array element and "shifts" all other elements to a lower index

heros.shift();

console.log(`returns the heros => ${heros}`);

// unshift() --> method adds a new element to an array 

heros.unshift("BOB");

console.log(`returns the heros => ${heros}`);

//  slice() --> method slices out a piece of an array

console.log(heros.slice(1));

// splice() --> method adds new items to an array

let arr=[0,1,2,3,4,5,6,7];
arr.splice(2,2,101,102);

// add element
arr.splice(2,0,101);

//delete element
arr.splice(3,1);

//replace element
arr.splice(3,1,101);