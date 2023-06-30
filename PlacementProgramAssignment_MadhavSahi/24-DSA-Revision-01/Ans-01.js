// 1. **Roman to Integer**

// Roman numerals are represented by seven different symbols:`I`,`V`,`X`,`L`,`C`,`D`and`M`.

// SymbolValue
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example,`2`is written as`II`in Roman numeral, just two ones added together.`12`is written as`XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not`IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

// - `I`can be placed before`V`(5) and`X`(10) to make 4 and 9.
// - `X`can be placed before`L`(50) and`C`(100) to make 40 and 90.
// - `C`can be placed before`D`(500) and`M`(1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// **Example 1:**
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// **Constraints:**

// - `1 <= s.length <= 15`
// - `s`contains onlythe characters`('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
// - It is**guaranteed**that`s`is a valid roman numeral in the range`[1, 3999]`.

//Solution--->
function romanToInteger(s) {
  const romanValues = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result = 0;
  let previousValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentSymbol = s.charAt(i);
    const currentValue = romanValues.get(currentSymbol);

    if (currentValue >= previousValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    previousValue = currentValue;
  }

  return result;
}

console.log(romanToInteger("III")); 
// Output: 3

console.log(romanToInteger("LVIII")); 
// Output: 58
