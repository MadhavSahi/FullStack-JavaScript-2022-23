//Q.5 What are Callbacks & Explain Callback Hell ?

//Solution--->

Callbacks in JavaScript refer to functions that are passed as arguments to other functions and are executed later, usually after an asynchronous operation or a certain event occurs. They allow you to define the behavior that should happen after a particular operation completes. Callbacks enable asynchronous programming, where code execution continues while waiting for certain operations to finish.

Callback Hell, also known as the Pyramid of Doom, is a term used to describe a situation in JavaScript where multiple nested callbacks are used, leading to code that becomes difficult to read, understand, and maintain. This situation arises when there are multiple asynchronous operations that depend on the results of previous operations, resulting in deeply nested callback functions.

Example of callback hell:
asyncOperation1((error1, result1) => {
  if (error1) {
    console.error('Error:', error1);
  } else {
    asyncOperation2(result1, (error2, result2) => {
      if (error2) {
        console.error('Error:', error2);
      } else {
        asyncOperation3(result2, (error3, result3) => {
          if (error3) {
            console.error('Error:', error3);
          } else {
            // ...and so on
          }
        });
      }
    });
  }
});

In the above example, there are multiple async operations (asyncOperation1, asyncOperation2, asyncOperation3, etc.) that depend on the results of previous operations. Each operation is passed a callback function to handle the result or error. As more operations are added, the code becomes deeply nested and difficult to follow, leading to maintenance issues, code duplication, and decreased readability.

To mitigate callback hell, several approaches have been introduced, such as using Promises, async/await, or modularizing code with named functions. These techniques provide better code organization, readability, and error handling, making asynchronous code easier to write and maintain.

Using Promises, the example above can be rewritten as:
asyncOperation1()
  .then((result1) => {
    return asyncOperation2(result1);
  })
  .then((result2) => {
    return asyncOperation3(result2);
  })
  .then((result3) => {
    // ...and so on
  })
  .catch((error) => {
    console.error('Error:', error);
  });

Here, Promises allow chaining of operations using .then(), making the code more readable and avoiding excessive nesting. The .catch() method is used to handle any errors that occur during the asynchronous operations.

Alternatively, with async/await:
async function performAsyncOperations() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    // ...and so on
  } catch (error) {
    console.error('Error:', error);
  }
}

performAsyncOperations();

In this example, the performAsyncOperations() function uses the await keyword to pause the execution until each asynchronous operation completes. The try...catch block is used to handle any errors that occur during the operations.