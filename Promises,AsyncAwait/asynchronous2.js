// let i=0;
// const func = () => {
//   if (i < 6) {
//     console.log(i);
//     i++;
//   }
// };
// const run = setInterval(() => {
//   func();
// }, 1000);
// if (i > 5) {
//     console.log("hey");
//     clearInterval(run);
// }
// console.log("hey");a

for (let i=1;i<=3;i++){
    setInterval(()=>{
        console.log("hey "+i);
    },1000)
    console.log("hey 2 "+i);
}
