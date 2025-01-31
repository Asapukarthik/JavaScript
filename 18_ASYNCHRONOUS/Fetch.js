// fetch = function used for making HTTP requests to fetch resources
//          (JSON style data,images,files)
//          simplifies asynchronous data fetching in javascript and 
//          uesd for ineracting with APT'S to retrieve and send
//           data asynchronously over the web.

fetch('https://api.github.com/users/Asapukarthik')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error));