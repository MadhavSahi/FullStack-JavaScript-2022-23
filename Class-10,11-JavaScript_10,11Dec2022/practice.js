let x = 'madhav sahi';
console.log(x + 'x');
console.log(`My name is ${x}`); //template literal

let y='10';

if(y==10) // if else
{
    console.log("this is y value " + y);
}
else{
    console.log("this is not y value");
}

let rating =5;

if(rating==5)
{
    console.log("5 stars");
}
else if(rating==4)
{
    console.log("4 stars");
}
else if(rating==3)
{
    console.log("3 stars");
}
else
{
    console.log("others");
}

// switch case
switch(rating)
{
    case 5 :
        console.log("rating is 5");
        break;
        
    default :
        console.log("hello");
}

// ternary condition
let d=4;

let user=true;

user ? console.log('hello user') : console.log('who r u');

// arrays

let arraynew;
arraynew=[1,2,3,4,5,'patiala',true];
console.log(arraynew);

// objects

let bankaccount={
    fname:"Madhav",
    lname:"Sahi",
    city:"patiala",
    dob:09121998
};
console.log(bankaccount);
console.log(bankaccount.city);

//Date

const datenew= new Date();
console.log(datenew); // will be like Day Month Date Year and GMT Time
console.log(datenew.toDateString()); // will be like Day Month Date Year
console.log(datenew.toString()); // will dsiplay as string
console.log(datenew.getFullYear()); // will display only year
console.log(datenew.getDate()); //it takes from 0
console.log(datenew.getDay()); // sunday will be 0

//Maths

const PIvalue = Math.PI;
console.log(PIvalue);
console.log(Math.round(PIvalue));

// min max

console.log(Math.max(10,20,30,100,1));
console.log(Math.min(10,20,30,100,1));


// Random

console.log(Math.random()) // 0 to 0.9999999999

console.log(Math.round(Math.random()*10));

let i;
let j=0;
for(let i=0;i<=10;i++)
{
    // console.log(` now ${i} * ${i} = ${i*i} `);
    console.log(i,'*',i ,"=", i*i);
}
