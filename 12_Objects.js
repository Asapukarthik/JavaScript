// Objects are variables too. But objects can contain many values.

const mySym = Symbol("key1")


const JsUser = {
    name: "Karthik",
    "full name": "Asapu karthik",
    [mySym]: "mykey1",
    age: 20,
    location: "ap",
    email: "karthik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);

console.log(JsUser["email"]);

console.log(JsUser["full name"]);

console.log(JsUser[mySym]);

// method
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())