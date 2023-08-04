// // const array1 = [1, 2, 3, 4, 5, 6];

// // const newArray = array1.map((x) => 
// // {return(x * 10)});

// // // function TwentyTimes(x){
// // //   return x * 20;
// // // };
// // // const newArray = array.map(TwentyTimes);
// // console.log("Map New Array :- " + newArray);

// // const array2 = [0,10,2,3,4,5,6,7,8,9,10];

// // const newArray2 = array2.filter((x)=>{
// //     return (x%2!==0) //odd
// // });

// // console.log("Filter Array :- " + newArray2);


// // const obj1={
// //     name1:"Madhav",
// //     age:1000,
// //     language:"EngHindi"
// // };
// // console.log(obj1);
// // obj1[obj1.language]="Sahi";
// // console.log(obj1);

// function outerFunction() {
//     let outerVariable = 'I am from the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable); // Inner function can access outerVariable
//     }
  
//     return innerFunction; // Return the inner function (closure)
//   }
  
//   const closureFunction = outerFunction(); // Now closureFunction is a closure
  
//   closureFunction(); // Output: "I am from the outer function"
  

 async function getActivity(){
    let response=await "hello1";
    console.log(response);
}
getActivity();
console.log("hello2");
console.log("hello3");