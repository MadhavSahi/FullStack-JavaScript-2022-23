//HOF
//Callback

//HOF is a function which has another function as an argument or return another function
// Callback is the argument which is passed in the HOF.
// forEach , reduce , filter , map , find , every , sort , setInterval , setTimeout are examples of HOF.
// If something is callback....use -: "()=>{}"
//In HOF we pass the junior fxn's reference only...we don't call the function...so we use only like Fxn and not Fxn().

//forEach is HOF and ()=>{} is Callback
// const arr =[1,2,3,4,5,6,7];
// arr.forEach((val)=>{
//     console.log(val);
// })
// //basically callback is like function...
// //for eg:-
// //setTimeout
// setTimeout(Madhav,5000);//here we are passing the reference of callback fxn.
// function Madhav(){//this is the callback function we have written alag se
//     console.log("hello");
// }

// //setTimeout :- MUCH MORE BETTER
// setTimeout(()=>{
//     console.log("hi");
// },5000);

// //setInterval
// setInterval(()=>{
//     console.log("hi");
// },1000)

// frequently used HOFs
// forEach , map , filter , reduce , some , sort , setInterval , setTimeout , find , every

// in callback we either need to return something or write console.log

//map
const arry=[1,2,3,4,5,6,8,9];
const newarr=arry.map((num)=>{
    return num*num;
});
console.log(newarr);

// if we want to not write return word...then we don;t need to add {} in callback
//filter
const countries=['India','England','NewZealand','Finland','Australia', 'Russia'];
const newcoun=countries.filter((name)=>{
     return !name.includes('land');
    //  return name.includes('land');
})
// console.log(newcoun);

//Reduce(tricky)
// it returns a single value after performing the operation.
// The acc stores all the values and curr iterates over the element one by one...if we have som initial value then it's the default value of acc

//syntax is :- array.reduce((accumulator,current)=>{
//  return accumulator + current;
//},inital value);


const reducearr=[1,2,3,4,5,6,7,8,9,10];
const newww=reducearr.reduce((acc,curr)=>{
    return acc+curr;
},1)
// console.log(newww);

//Destructuring(imp concept of JS)
// used in React and Node alot
// it basically means to destructure an already made structured variable/array/object

var ans=[1,2,3,45,6,7];
let [a,b,c,d,e,f]=ans; // this is we have done destructuring.
console.log([a,b,c,d,e,f]);
console.log(ans);
//both will give the same output