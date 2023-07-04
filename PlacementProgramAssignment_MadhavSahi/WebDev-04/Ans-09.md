//Q.9 How can you define default parameter values in ES6 functions?

//Solution--->

In ECMAScript 2015 (ES6) and subsequent versions of JavaScript, you can define default parameter values for function parameters. Default parameters allow you to set a default value that will be used if no argument or an undefined argument is passed for that parameter. Here's how you can define default parameter values in ES6 functions:
function myFunction(param1, param2 = defaultValue) {
  // function body
}
In the above syntax:

param1 is a required parameter that must be provided when calling the function.
param2 is an optional parameter with a default value of defaultValue. If no argument is passed for param2 or if undefined is explicitly provided, the default value will be used.
Let's look at some examples to understand how default parameter values work:
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet();           // Output: Hello, Guest!
greet('Alice');    // Output: Hello, Alice!
greet(undefined);  // Output: Hello, Guest! (default value)

function addNumbers(a, b = 0) {
  console.log(a + b);
}

addNumbers(5, 10);    // Output: 15
addNumbers(5);        // Output: 5 (default value of 0 is used)
In the first example, the greet() function has a default parameter name set to 'Guest'. If no argument is provided, the default value is used. In the second example, the addNumbers() function has a default parameter b set to 0. If the second argument is not provided, the default value is used.