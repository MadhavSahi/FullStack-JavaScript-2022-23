const obj1={
    name:"Madhav",
    lname:"Sahi",
    age:24
};
// console.log(obj1);
// console.log(Object.getPrototypeOf(obj1));

let names="madhav   ";

let arrayname=[1,2,3,34];

const myobject={
    fname:"madhav",
    lname:"sahi",
    age:24
};
const teachers={
    teachername:"teachername",
    teachermail:"teachermail@gmail.com"
};
const students={
    studentname:"username",
    email:"usermail@gmail.com",
    rollno:"xyz",
    __proto__:teachers
};

Array.prototype.helloarray = function(){
    console.log("Hello in array");
}
Object.prototype.helloobject=function(){
    console.log("Hello in object");
}
Object.setPrototypeOf(teachers,myobject); //now with this we are passing properties of myobject into teachers

Object.prototype.exactLength=function(){
    console.log(this.trim().length);
}
let userok="xyzzz       "

Object.prototype.mybind=function(){
    console.log("hi");
}

function fun(){
    console.log("heyy");
}
