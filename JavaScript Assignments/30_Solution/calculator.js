let input1=50;
let input2=10;
let operator='%';

calculator=(x,y,op)=>{
    if(op=='+'){
        return x+y;
    }
    else if(op=='-'){
        return x-y;
    }
    else if(op=='/'){
        return x/y;
    }
    else if(op=='%'){
        return x%y;
    }
    else if(op=='*'){
        return x*y;
    }
}
let res=calculator(input1,input2,operator);
console.log(res);