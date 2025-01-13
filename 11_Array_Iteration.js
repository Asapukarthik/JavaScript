// For Each --> forEach() method calls a function (a callback function) once for each array element
/*
 function takes 3 arguments:
        The item value
        The item index
        The array itself
*/
let arr=[1,2,3,4,5];
arr.forEach((val ,idx,arr)=>{
    console.log(val,idx,arr);

});

// map() --> method creates a new array by performing a function on each array element and  does not change the original array

/*
 function takes 3 arguments:
        The item value
        The item index
        The array itself
*/

let num=[6,11,22,38,90];
let newnum=num.map((val) =>{
    return val*2;
});
console.log(`using map : ${newnum} `);

// filter() --> Creates a new array of elements that give true for a condition/filter

let arr1=[1,2,3,4,5,6,7,8,9,10];
let newarr1=arr1.filter((val) =>{
    return val%2==0;
});
console.log(`Filtering the values: ${newarr1} `);

// reduce() --> method runs a function on each array element to produce (reduce it to) a single value

let arr2=[1,2,3,4,5];
const output=arr.reduce((pres,cur)=>{
    return pres+cur;
});
console.log(output);
