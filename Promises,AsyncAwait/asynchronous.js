// // // console.log("hey");

// // setTimeout(()=>{
// //     console.log("hey2");
// // },2000)
// // setTimeout(()=>{
// //     console.log("hey3");
// // },1900)
// // setTimeout(()=>{
// //     console.log("hey1");
// // },0)

// // console.log("hey4");

let stocks = {
  fruits: ["Strawberry", "Orange", "Mango"],
  liquid: ["water", "ice"],
  holder: ["cup", "cup", "stick"],
  toppings: ["chocolate", "peanuts","butterscotch"],
};
let is_shop_open = true;

let order = (work, time) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("PROMISE REJECTED"));
    }
  });
};
//console.log("hiii");
order(() => {
  console.log(stocks.fruits[0] + " was selected");
}, 2000)
  .then(() => {
    return order(() => {
      console.log(stocks.liquid[0] + " was selected");
    }, 5000);
  })
  .then(()=>{
        return order(()=>{
            console.log(stocks.toppings[2]+" was selected");
        },2000)
  })
  .then(()=>{
        return order(()=>{
            console.log(stocks.holder[0]+ " was selected by customer");
        },3000)  
  })
  .catch(() => {
    console.log("Shop not open");
  })
  .finally(() => {
    console.log("DAY Ended Timings OFF");
  });
  console.log("heyyyy");
// console.log(`${stocks.fruits[0]}`);

// let fxn1 = () => {
//   setTimeout(() => {
//     console.log("hey1");
//   }, 1000);
// };
// let fxn2 = () => {
//   setTimeout(() => {
//     console.log("hey2");
//   }, 1100);
// };
// fxn2();
// fxn1();
