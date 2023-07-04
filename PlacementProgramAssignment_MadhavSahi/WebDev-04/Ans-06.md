//Q.6  What is template literals in ES6 and how do you use them?

//Solution--->

1. Basic string interpolation: Template literals enable you to embed variables or expressions within the string using ${}. The expressions inside ${} are evaluated and their values are inserted into the resulting string.

const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

2. Multiline strings: With template literals, creating multiline strings becomes effortless, as line breaks and indentation are preserved without the need for escape characters.

const multiline = 
` This is a
  multiline
  string.
`;
console.log(multiline);
/* Output:
   This is a
   multiline
   string.
*/

3. Expression evaluation: Template literals allow for the evaluation of expressions within ${}. This enables calculations or function calls directly within the template literal.

const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

4. Tagged templates: Template literals can be used with a function, known as a "tag," to customize the evaluation and manipulation of the template. The tag function receives the template literal as separate arguments and can perform custom operations on the strings and values.

function customTag(strings, ...values) {
  // Manipulate the strings and values as needed
  return 'Customized result';
}

const result = customTag`This is a ${variable} template`;
console.log(result); // Output: Customized result

