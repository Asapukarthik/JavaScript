// getter = special method that makes a property readable
//           (or)
// A getter method is used to access (or "get") the value of a property.


// setter = special method that makes a property writable
//              (or)
//A setter method is used to update (or "set") the value of a property.

// validate and modify a value when reading/writing a property

//
class user{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
        if(value.length >0){
            this._username=value;
        }
        else{
            console.error("cannot be empty");
        }
    }
    get email(){
        return this._username.toUpperCase();
    }
    set email(value){
        if(value.length >0){
            this._email=value;
        }
        else{
            console.error("cannot be empty");
        }
    }
   



}

const person =new user("Jai Babu .....","Bob123@gmail.com");
console.log(person.username);
console.log(person.email);