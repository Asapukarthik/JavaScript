// static = keyword that defines properties or methods that belong
//          to a class istself rather than the objects created
//          from that class (class owns anything static , not the objects)


class User{
    static userCount=0;
    constructor(username){
        this.username=username;
        User.userCount++;
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
    static createdId(){
        return `123`;
    }  
}

const BOB= new User("Jai Babu ......");
const Balayya= new User("MH Balayya .....");

BOB.logMe();

Balayya.logMe();

console.log(User.userCount);

console.log(User.createdId());


// it will show the error because it belong to the class

// console.log(BOB.createdId());




