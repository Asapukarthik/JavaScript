// Promise = An Object that manages asynchronous operations
//              wrap a promise object around 
//              "I promise to return a value"
//              PENDING -> RESOLVED OR REJECTED
//              Do an async task
//              DB calls , cryptography,network

const promiseOne= new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },3000)
});

promiseOne.then(function(){
    console.log('promise consumed');
    
})


// TASK 2


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve(); 
    },1000)
}).then(function(){
    console.log('promise consumed');   
})


// TASK 3


const PromiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({Name: 'karthik',age:'20'});
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);  
})

// TASK 4


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({Name : 'karthik',Course :'javaScript'});
        }
        else{
            reject('Error: something went wrong ');
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.Name;
})
.then((Name)=>{
    console.log(Name);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log("the promise either resolved or rejected");
    
})