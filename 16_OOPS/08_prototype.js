// let myName= " karthik     ";
// let myInitial =" Asapu  ";
// console.log(myName.trueLength);

let myHeros=['thor','ironMan'];

let heroPower={
    thor:"hammer",
    ironMan:"suit",

    getIronmanPower:function(){
        console.log(`iornman power is ${this.ironMan}`);
        
    }
}

Object.prototype.karthik=function(){
    console.log(`karthik is present i all objects`);

}

Array.prototype.heyMg=function(){
    console.log(`karthik says mg to all`);
    
}

// heroPower.karthik();
// myHeros.karthik();
// myHeros.heyMg()
// heroPower.heyMg();

// inheritance 

const User={
    name:"karthik",
    Email:"karthikasapu@gmail.com"
}
const teacher={
    makeVideo:true
}
const teacherSupport={
    isAvailable: false
}

const taSupport={

    makeAss:'js assigement',
    fullTime:true,
    __proto__:teacherSupport
}

teacher.__proto__=User

// modern Syntax

Object.setPrototypeOf(teacherSupport,teacher);

let anotherUserName="karthikkk     ";

String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is :${this.trim().length}`);
    
}

anotherUserName.trueLength();

"karr".trueLength()
"cool".trueLength()