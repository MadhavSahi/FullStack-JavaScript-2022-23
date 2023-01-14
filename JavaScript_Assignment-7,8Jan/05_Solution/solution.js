let str = "Hi bro how are you ? How may I help you ???";

let fun=(str1,chars)=>{
    return str1.split(chars);
}
let ans=fun(str,'a');
let ans2=fun(str,'?');
console.log(ans);
console.log(ans2);