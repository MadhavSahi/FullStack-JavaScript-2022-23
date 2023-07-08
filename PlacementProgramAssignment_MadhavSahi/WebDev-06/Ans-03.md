Q.3 What’s Call Apply Bind Method & Difference Between them

Solution--->

The `call`, `apply`, and `bind` methods are integral features in JavaScript that allow for the manipulation of the `this` keyword and provide control over the execution context of a function.

1. `call()` method:
   - Syntax: `functionName.call(thisArg, arg1, arg2, ...)`
   - The `call()` method executes a function and explicitly sets the value of `this` inside the function to the provided `thisArg`.
   - Additional arguments can be passed individually after `thisArg` and will be passed to the function as separate arguments.
   - The `call()` method is typically employed when the function arguments are known in advance and need to be passed individually.

2. `apply()` method:
   - Syntax: `functionName.apply(thisArg, [argsArray])`
   - The `apply()` method executes a function and explicitly sets the value of `this` inside the function to the provided `thisArg`.
   - Arguments are passed as an array-like object or an actual array using the `argsArray` parameter.
   - The `apply()` method is commonly used when the function arguments are stored in an array or array-like object.

3. `bind()` method:
   - Syntax: `functionName.bind(thisArg, arg1, arg2, ...)`
   - The `bind()` method returns a new function that has the same function body as the original function but with `this` explicitly set to the provided `thisArg`.
   - Additional arguments can be passed to `bind()`, which will be prepended to the arguments passed to the bound function when it is invoked.
   - Unlike `call()` and `apply()`, the `bind()` method does not immediately execute the function but instead creates a new function with the desired bound context for later invocation.
