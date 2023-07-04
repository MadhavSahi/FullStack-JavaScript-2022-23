//Q.1 Explain Hoisting in JavaScript

//Solution--->

Hoisting is a concept in JavaScript that refers to the behavior of moving variable and function declarations to the top of their containing scope during the compilation phase, before the code is executed.

In JavaScript, when you declare a variable or a function using the var keyword, the declaration is hoisted to the top of its scope. This means that you can use the variable or call the function before the actual declaration in your code, and it will still work.

Example:-

console.log(message); // Output: undefined
var message = "Hello, world!";
console.log(message); // Output: Hello, world!

Even though the variable message is used before its declaration, it does not result in an error. This is because the variable declaration is hoisted to the top of the scope, and the assignment (message = "Hello, world!") is executed in the order it appears in the code.

Similarly, function declarations are also hoisted to the top of their scope. This means that you can call a function before its actual declaration in the code.

greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}

In this example, the greet function is called before its declaration, but it still works because the function declaration is hoisted to the top.

However, it's important to note that hoisting only applies to variable and function declarations, not to initializations or assignments. If you declare a variable using let or const, they are hoisted as well but not initialized, so trying to use them before their declaration will result in a ReferenceError.

To avoid confusion and improve code readability, it's generally recommended to declare variables and functions at the beginning of their scope, even though hoisting allows you to use them before their actual declarations.
