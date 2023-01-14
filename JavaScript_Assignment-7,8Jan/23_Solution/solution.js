//prime check

let input=12;
let i;
primecheck=(x)=>{
    for(i=2;i<input;i++){
        if(x%i==0){
            console.log(x + " is not a prime number");
            break;
        }
    }    
    if(i==x){
        console.log(x + " is a prime number");
    }
}
primecheck(input);
