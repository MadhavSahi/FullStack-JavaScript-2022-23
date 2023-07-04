//Q.3 Difference between var & let?

//Solution--->

In JavaScript, 'var' and 'let' are both used to declare variables, but they have some differences in terms of scope and behavior:

1. Scope: Variables declared with 'var' have function scope or global scope, meaning they are accessible throughout the entire function or global environment. On the other hand, variables declared with 'let' have block scope, which means they are only accessible within the nearest enclosing block (usually a pair of curly braces {}).

2. Hoisting: Variables declared with 'var' are hoisted to the top of their scope, which means they can be accessed before their declaration (although they have an initial value of 'undefined'). This behavior is known as "hoisting." On the contrary, variables declared with 'let' are not hoisted, and accessing them before their declaration results in a 'ReferenceError' within the Temporal Dead Zone.

3. Re-declaration: Variables declared with 'var' can be re-declared multiple times within the same scope without raising an error. The subsequent declarations override the previous ones. Conversely, variables declared with 'let' cannot be re-declared within the same block scope. Attempting to do so will result in a 'SyntaxError'.

4. Function-scoped vs. block-scoped loops: When using 'var', loop counters declared within a loop (for example, a 'for' loop) are accessible outside the loop, retaining their value after the loop exits. This is because 'var' variables have function scope. In contrast, 'let' variables have block scope, so loop counters declared with 'let' are only accessible within the loop block and do not persist after the loop ends.

'var' has function scope, is hoisted, allows re-declaration, and has different behavior in loops. 'let', on the other hand, has block scope, is not hoisted (leading to the Temporal Dead Zone), does not allow re-declaration, and behaves consistently in loops. It is generally recommended to use 'let' (or 'const' for constants) instead of 'var' for more predictable and localized variable scoping.