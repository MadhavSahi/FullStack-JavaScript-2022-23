let input;
let primearray=[];
primecheck=(x)=>{
    let i;
    for(i=2;i<x;i++){
        if(x%i==0){
            return false;
        }
    }
    if(i==x){
        return true;
    }
}
for(let i=0;i<=100;i++){
    if(primecheck(i)==true){
        primearray.push(i);
    }
    else{
        continue;
    }
}
console.log(primearray);