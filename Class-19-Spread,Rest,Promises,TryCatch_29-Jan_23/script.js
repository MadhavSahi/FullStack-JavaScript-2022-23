//this is Spread operator.
//we don't need to write all the values of the array in the argument...array->individual_data
// spread is used heavily in React
let variable=[1,2,3,4,56,7,8];

let sumarray=(a,b,c,d,e,f,g)=>{
    return a+b;
}
// console.log(sumarray(...variable));//these 3 dots means we are using ...spread operator
// console.log(variable);
// console.log(...variable);

//Rest
//it is when we have to do....individual_data->array
// when we don't know when the user is sending more data..so we capture it in ...
// let newarray=[1,2,3,4,5,6,7,8,9,10,11,12];
// let sumarray2=(...args)=>{
//     let sum=0;
//     console.log(args);
//     console.log(...args);
//     for(const x of args){
//         sum=sum+x;
//     }
//     return sum;
// };
// let res=sumarray2(1,2,3,4,5,6,7,8,9,10,11,12);
// console.log(res);

//Try,Catch,Finally
// try{//it is for if we think this will crash the code
//     let fname="Madhav";
//     // let lname="Sahi"
//     console.log(fname);
//     console.log(lname);//this will throw the error because lname is not defined.
// }
// catch(err){//catch block will catch the error inside "err" and it won't crash the code...it will display the error like below...so it's basically to avoid code crashing on live server.
//     console.log(err.name + " lname is missing");
// }
// finally{// it will work regardless of anything...like a boss
//     console.log("I will work no matter what happens");
// }

//Throw(explore ownself)

//EventLoop
//It is a concept of JS - will bring the setTimeout() tasks from queue to call stack after the timer is completed.
//JS won't wait for any setTimeout fxn to complete according to his time...it will complete the other pending tasks and then cme back to it after the time mentioned.
let one=()=>{
    console.log("one");
    setTimeout(()=>{
        console.log("inside one");
    },1000)
};
let two=()=>{
    console.log("two");
    setTimeout(()=>{
        console.log("inside two");
    },2000)
};
let three=()=>{
    console.log("three");
    setTimeout(()=>{
        console.log("inside three");
    },1000)
};
let four=()=>{
    console.log("four");
    setTimeout(()=>{
        console.log("inside four");
    },1000)
};

// one();
// two();
// three();
// four();

//Promises

const one1=()=>{
    return "Hi I am 1";
}
const two2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hi I m back - Promise");    
        },3000)
    });
}
const three3=()=>{
    return "Hi I am 3";
}
const four4=()=>{
    return "Hi I am 4";
}

const callme = async()=>{ // we have to use asyc on the bigger thing so that everything is in sync
    let val1=one1();
    console.log(val1);

    let val2= await two2();// we need to write await at that function where promise is written
    console.log(val2);

    let val3=three3();
    console.log(val3);

    let val4=four4();
    console.log(val4);
}
callme();