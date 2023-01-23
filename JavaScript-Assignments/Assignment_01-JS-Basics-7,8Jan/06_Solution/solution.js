let str='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let fun=(str1,chars)=>{
    return str1.split(chars);
}

let ans=fun(str,',');
console.log(ans);