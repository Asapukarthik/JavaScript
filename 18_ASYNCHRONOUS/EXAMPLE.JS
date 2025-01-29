// Synchronous = Executes line by line consecutively in a sequential manner
//              Code that waits for an operation to complete 

// Asynchronous = Allows multiple operations to be performed concurrently without wiating 
//                  Doesnit block the execution flow and allows the program to continue
//                  (I/O Operations , network requests ,fetching data)
//                  handled with :callBacks ,promises ,async / Await

function func1 (callback){
    setTimeout(()=>{
        console.log("Task 1");
        callback();
    },3000)
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");  
}

func1(func2);