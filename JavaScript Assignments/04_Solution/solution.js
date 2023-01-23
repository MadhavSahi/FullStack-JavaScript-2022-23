let str1 = "Hello world if it is there then why not why would we neglect Script";
let str2 = "Hello world if it is there then why not why would we neglect Sccript";

let fun=(str)=>{
    return str.includes("Script");
}
let ans1= fun(str1);
let ans2= fun(str2);
console.log(ans1);
console.log(ans2);