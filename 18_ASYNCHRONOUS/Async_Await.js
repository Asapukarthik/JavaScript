// Async/Await ==>
//              Async=makes a function return a promise
//              Await =makes an async function wait for a promise

//          Allows you write asynchrinius code in a Synchronous manner
//           Async doesnt have resolve or reject parameters 

const PromiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({name : 'karthik', password : '123456'});
        }
        else{
            reject('Error : js Went Wrong');
        }
    },1000)
}) 
async function consumePromiseFive() {
    try {
        const responce= await PromiseFive; 
        console.log(responce);
        
    } catch (error) {
        console.error(error);
        
    }  
}
consumePromiseFive();