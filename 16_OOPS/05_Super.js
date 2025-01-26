// super = keyword is used in classes to call the constructor or 
//          access the properties and methods of a parents(superclass)
//          this =this object
//          super = the parent

class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }

}
class person1 extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const person =new person1("jai babu.....","BOB123@gmail.com");

iphone.logMe();