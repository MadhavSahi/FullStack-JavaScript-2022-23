let countries=['India','USA','Japan','Australia','Poland','Germany','HongKong'];

fun=(newcountry)=>{
    if(countries.includes(newcountry)){
        //
    }
    else{
        //
        countries.push(newcountry);
    }
}
let ans=fun('Ethiopia');
console.log(countries);
