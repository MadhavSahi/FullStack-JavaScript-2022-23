//Q.10 What is the purpose of the spread operator (...) in ES6?

//Solution--->

The spread operator (...) introduced in ECMAScript 2015 (ES6) and later versions of JavaScript serves various purposes and offers useful functionalities. Let's explore the purpose of the spread operator:

1. Array Spreading:
The spread operator allows you to unpack elements from an array or an iterable object. It expands an array into individual elements, which can be useful in scenarios where multiple arguments or elements are expected.

const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

const str = 'Hello';
console.log(...str);     // Output: H e l l o

2. Object Spreading:
The spread operator is also applicable to objects. It enables the spreading of properties from one object into another, allowing you to create a shallow copy or merge multiple objects together.

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { x: 1, y: 2, z: 3 }

3. Function Argument Spreading:
Within function calls, the spread operator can be used to spread out the elements of an array as individual arguments to the function.

function addNumbers(a, b, c) {
  console.log(a + b + c);
}

const numbers = [1, 2, 3];
addNumbers(...numbers); // Output: 6

4. Array and Object Literal Spreading:
The spread operator can be used within array and object literals to clone or create new arrays/objects by spreading the elements/properties of existing ones.

const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];

const originalObject = { x: 1, y: 2 };
const clonedObject = { ...originalObject };

By using the spread operator in array and object literals, we can easily clone arrays or objects and create new ones by spreading the elements or properties of existing ones.
