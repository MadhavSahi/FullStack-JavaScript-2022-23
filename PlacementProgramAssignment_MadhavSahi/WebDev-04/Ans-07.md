//Q.7 What’s difference between map & forEach?

//Solution--->

The map() and forEach() methods are both array iteration methods in JavaScript, but they differ in their behavior and the values they return. Here are the main differences between map() and forEach():

1. Return value:

map(): The map() method returns a new array by applying a provided function to each element of the original array. It creates a new array of the same length, with each element being the result of the callback function applied to the corresponding element of the original array.
forEach(): The forEach() method does not return anything. It iterates over each element of the array and executes a provided callback function on each element.

2. Purpose:

map(): map() is typically used when you need to transform each element of an array and collect the transformed values into a new array. It is useful for creating a new array based on the original array.
forEach(): forEach() is commonly used when you want to perform an action or execute a function for each element of the array without creating a new array. It is suitable for operations that do not require the creation of a new array.

3. Modification of the original array:

map(): The map() method does not modify the original array. Instead, it returns a new array containing the transformed values, leaving the original array unchanged.
forEach(): The forEach() method does not create a new array. However, it allows you to modify the elements of the original array directly within the callback function. It is not intended for transforming array elements like map().

4. Handling the result:

map(): Since map() returns a new array, you can assign its result to a variable or use it directly in further operations.

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

forEach(): As forEach() does not return anything, you cannot directly capture its result. It is primarily used for its side effects, such as logging or modifying array elements.

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // Output: 1, 2, 3