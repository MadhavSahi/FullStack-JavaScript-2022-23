// practice file for function

function calculator(op1,op2,op)
{
    if(op=='+')
    {
        return op1+op2;
    }
    if(op=='-')
    {
        return op1-op2;
    }
    if(op=='*')
    {
        return op1*op2;
    }
    if(op=='/')
    {
        return op1/op2;
    }
    // if(op=='')
    // {
    //     return op1+op2;
    // }
}
let val1=100;
let val2=10;
let operator='-'
let res=calculator(val1,val2,operator);
// console.log(res);

function url(name){
    let result = "https://" + name +".com"
    return result;
}
let anss=url('deliverydos');
// console.log(anss);
let normal=(arrayvar)=>{
    arraynew=[];
    for(let i of arrayvar)
    {
        arraynew.push(i*10);
    }
    return arraynew;
}
let array1=[1,2,3,4,4,6,7,10];
let resultnow=normal(array1);
array1=resultnow;
// console.log(array1);
// console.log(resultnow);

//objects
let objname={
    fname:'Madhav',
    lname:'Sahi',
    logins:'100'
};
for(let x in objname)
{
    console.log(x); //accessing only keys
}
for(let x in objname)
{
    console.log(objname); //accessing whole object
}
for(let x in objname)
{
    console.log(objname.x); //undefined
    console.log(objname['x']); //undefined
    console.log(objname[x]); //accessing only values...this method works in for in loop
}