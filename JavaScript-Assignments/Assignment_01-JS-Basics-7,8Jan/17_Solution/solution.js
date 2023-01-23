// const datee= new Date;
// console.log(datee.getDate());

// fun=(m,y)=>{
//     console.log(new Date(y,m,0).getDate());
// }
// let ans=fun(2,2023);

let input="February";
let year=2028;

fun=(month,year)=>{
    if(year%4==0){
        if(month=="January" || month=="March" || month=="May" 
        || month=="July" || month=="August" || month=="October" || month=="December"){
            console.log("Days are 31");
        }
        else if(month=="February"){
            console.log("Days are 29");
        }
        else{
            console.log("Days are 30");
        }
    }
    else{
        if(month=="January" || month=="March" || month=="May" 
        || month=="July" || month=="August" || month=="October" || month=="December"){
            console.log("Days are 31");
        }
        else if(month=="February"){
            console.log("Days are 28");
        }
        else{
            console.log("Days are 30");
        }
    }
}
let res=fun(input,year);