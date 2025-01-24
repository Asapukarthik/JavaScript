
// class = (ES6 features) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor functions
//          ex= static keyword,encapsulation ,inheritance


class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    //method
    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUserName(){
        return`${this.username.toUpperCase()}`;
    }
}

const BOB=new User("bob ante bobee","bob123@gmail.com","1234");

console.log(BOB.encryptPassword());
console.log(BOB.changeUserName());

