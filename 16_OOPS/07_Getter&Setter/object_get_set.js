const user={
    _email: 'karthik@g.com',
    _password:'abc',

    get email(){
        return this._email.toLowerCase();
    },

    set email(value){
        this._email=value
    },

}

const person= Object.create(user)
console.log(person.email);
