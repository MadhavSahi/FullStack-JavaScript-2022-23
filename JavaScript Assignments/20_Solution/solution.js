const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//adding meat at starting
if(shoppingCart.includes('Meat')){
    //do nothing
}
else{
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

//adding sugar at end
if(shoppingCart.includes('Sugar')){
    //do nothing
}
else{
    shoppingCart.push('Sugar');
}

console.log(shoppingCart);

//removing honey
let honeyy=shoppingCart.indexOf("Honey");
if(shoppingCart.includes('Meat')){
    shoppingCart.splice(honeyy,1)
}
else{
    //do nothing
}
console.log(shoppingCart);

//modifying
let teaa=shoppingCart.indexOf("Tea");
if(shoppingCart.includes('Meat')){
    shoppingCart[teaa]="Green Tea";
}
else{
    //do nothing
}
console.log(shoppingCart);