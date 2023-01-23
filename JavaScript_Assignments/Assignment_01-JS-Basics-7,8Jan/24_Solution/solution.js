let oddarray=[];
let evenarray=[];

for(let i=0;i<101;i++){
    if(i%2==0){
        evenarray.push(i);
    }
    else{
        oddarray.push(i);
    }
}
console.log(oddarray);
console.log(evenarray);