let arr=['Hi',2,'Hello','Okay','PW Skills', "ok","Yes","PW Skills"];

let fun=(arr1)=>{
    return arr1.lastIndexOf('PW Skills');
}
let fun2=(arr2)=>{
    return arr2.indexOf('PW Skills');
}
let ans=fun(arr);
let ans2=fun2(arr);
console.log(ans);//for last index
console.log(ans2);//for first index