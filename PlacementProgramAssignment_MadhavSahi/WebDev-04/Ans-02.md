//Q.2 Explain Temporal Dead Zone?

//Solution--->

The Temporal Dead Zone is a concept in JavaScript that refers to a specific behavior related to variables declared with the let and const keywords. When a variable is declared using either of these keywords, it enters a phase called the TDZ until the point of declaration is reached during the program's execution.

During the Temporal Dead Zone , accessing the variable will result in a ReferenceError. This means that although the variable has been declared, it cannot be accessed or assigned any value until after the declaration statement. This behavior is different from variables declared with the var keyword, which are hoisted to the top of their scope and can be accessed before their declaration. (though they have an initial value of undefined).

The purpose of the Temporal Dead Zone  is to prevent the usage of variables before they are explicitly declared. It helps enforce better code quality and prevents issues that can arise from using variables before they have been properly initialized. By throwing a ReferenceError during the TDZ, JavaScript ensures that developers are aware of such mistakes and can fix them accordingly.

Example:-

console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

In the above code, the variable x is accessed before it is declared, resulting in a ReferenceError during the Temporal Dead Zone . Moving the console.log statement after the variable declaration would resolve the error:

let x = 10;
console.log(x); // Output: 10
