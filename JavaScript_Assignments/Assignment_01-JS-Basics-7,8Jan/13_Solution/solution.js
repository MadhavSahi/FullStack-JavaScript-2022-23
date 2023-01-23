let input;
let str="Enter your age:";

let fun=(input)=>{
    if(input>=18){
        console.log('You are old enough to drive');
    }
    else{
        let res=18-input;        
        console.log('wait for ' + res +  ' number of years');
    }
}
fun(28);
