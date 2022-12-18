// function

// definition of function
// calling of function

// normal function

// function with arguments

// function with return type
function sum(val1,val2)
{
    let result = val1 + val2;
    return result;
}
let ans=sum(10,20);
console.log(ans);

//function with array as parameter and return type
function sum2(arraynew)
{
    let vvari=0;
    for(let i=0;i<arraynew.length;i++)
    {
        vvari=vvari+arraynew[i];
    }
    return vvari;
}
let array1=[1,2,3,4,5,6];
let answer=sum2(array1); // answer will catch vvari....and array1 will be passed as arraynew
console.log(answer);
