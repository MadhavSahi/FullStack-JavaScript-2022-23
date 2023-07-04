//Q.7 What’s Async & Await Keyword in JavaScript

//Solution--->

Async and await keywords are part of the ECMAScript 2017 (ES8) update, providing a more readable and simplified syntax for working with Promises and handling asynchronous operations.

The async keyword is used to declare an asynchronous function. When a function is marked as async, it automatically returns a Promise. This enables you to use the await keyword within the function to pause the execution and wait for a Promise to resolve before proceeding further.

On the other hand, the await keyword is used to pause the execution of an async function until a Promise is fulfilled and to retrieve the resolved value of the Promise. When await is used with a Promise, it allows you to write asynchronous code in a more sequential and synchronous-like manner, enhancing code readability.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data';
      resolve(data);
    }, 2000);
  });
}

async function main() {
  try {
    const result = await fetchData();
    console.log('Result:', result);
    // Other sequential operations...
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

In the above example, the fetchData() function returns a Promise that resolves after a 2-second delay. The main() function is defined as an async function and utilizes the await keyword to pause its execution until the Promise returned by fetchData() is fulfilled. Once the Promise is resolved, the value is assigned to the result variable, and subsequent operations can be executed sequentially.