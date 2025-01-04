// DATA TYPES ARE PRIMITIVE (PREDEFINED) AND ONE COMPLEX OR NON-PRIMITIVE 

// ****[PRIMITIVE DATATYPE]****

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// NULL 
let number = null;
console.log("Type of number is:" ,typeof number);

//UNDEFINED
let newVar;
console.log(newVar);


// ****[NON-PRIMITIVE DATATYPE]****

//OBJECT

const student={
    fullName:"karthik",
    age:20,
    cgpa:8.2,
    isPass:true
};
student["fullName"]="heroo";
student["age"]+=5;
console.log(student["fullName"]);