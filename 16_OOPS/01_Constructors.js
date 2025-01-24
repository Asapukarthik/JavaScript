// object literals

const user={
    username:'karthik',
    age:20,
    logincount:8,
    signedIn:true,

    // ADDING FUNCTION METHOD
    getUserDetails: function(){
        console.log("got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// object constructor

// Constructors= special method for defining the 
//                properties and method of objects


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    //Adding function Method
    this.greeting =function(){
        console.log(`Welcomw ${this.username}`);
        
    }
    return this;
}

const userOne =new User('karthik',12,true);
const userTwo =new User('cool',20,false);
console.log(userOne);
console.log(userTwo);
