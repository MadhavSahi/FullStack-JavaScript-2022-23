// Given a number , write a program to reverse this number using stack.

// **Examples:**
// Input : 365
// Output : 563

// Input : 6899
// Output : 9986

// Solution--->

function reverseNumberUsingStack(number) {
  const stack = [];
  const numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    stack.push(numberString[i]);
  }

  let reversedNumber = "";

  while (stack.length > 0) {
    reversedNumber += stack.pop();
  }

  return parseInt(reversedNumber);
}

const inputNumber1 = 365;
console.log(reverseNumberUsingStack(inputNumber1));
// Output: 563

const inputNumber2 = 6899;
console.log(reverseNumberUsingStack(inputNumber2));
// Output: 9986
