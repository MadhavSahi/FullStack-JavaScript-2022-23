//Q.8 How can you destructure objects and arrays in ES6?

//Solution--->

Destructuring, which allows you to extract values from arrays and properties from objects in a concise manner. Destructuring is a powerful technique that improves code readability and simplifies working with complex data structures. Let's explore how to destructure objects and arrays:

1. Destructuring Objects:
To destructure an object, you enclose the desired property names in curly braces ({}) on the left side of the assignment operator (=). The variable names on the left side should match the property names of the object you want to destructure.

const person = { name: 'Alice', age: 30 };
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age);  // Output: 30

2. Destructuring Arrays:
To destructure an array, you enclose the desired element positions in square brackets ([]) on the left side of the assignment operator (=). The variables on the left side will receive the values from the corresponding positions in the array.

const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

We can also skip elements in the array by leaving an empty slot (using commas) without assigning it to a variable:

const numbers = [1, 2, 3, 4, 5];
const [a, , c] = numbers;

console.log(a); // Output: 1
console.log(c); // Output: 3

Additionally, the rest syntax (...) can be used to assign the remaining elements of an array to a new array:

const numbers = [1, 2, 3, 4, 5];
const [a, ...rest] = numbers;

console.log(a);    // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
