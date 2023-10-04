let stocks = {
  fruits: ["Strawberry", "Orange", "Mango"],
  liquid: ["water", "ice"],
  holder: ["cup", "cup", "stick"],
  toppings: ["chocolate", "peanuts", "butterscotch"],
};
let is_shop_open = true;

const toppings_choice = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
      resolve(
        console.log("Which topping would you like ?")
        );
    // }, 3000);
  });
};

const kitchen = async () => {
  console.log("Hey customer, welcome !");
  console.log("Which flavor whould you like to take ?");
  console.log("Which liquid would you have ?");
   await toppings_choice();
  console.log("Which container you wanna have ?");
  console.log("Order placed. Please wait");
  console.log("ICE CREAM SERVED !!>>ENJOY");
};
kitchen()
console.log("Doing dishes");
console.log("Cleaning table");
console.log("taking others orders");
