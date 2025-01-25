// inheritance = allows a new class to inherit properties and methods 
//                  from an existing class (parents -> child) 
//                  helps with code resuablility 

class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}

const person = new Teacher("karthik","kk@gmail.com","123");

// person.addCourse();

person.logMe();

const person1 =new User("karthik....");

person1.logMe();

console.log(person instanceof User);
