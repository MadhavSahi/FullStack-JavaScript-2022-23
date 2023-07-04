//Q.4 What are the ways we have to handle Async Code in JS?

//Solution--->

Callbacks:
Callbacks are a traditional way to handle asynchronous operations in JavaScript. With this approach, you pass a function as a callback to an asynchronous function. When the operation completes, the callback function is invoked to process the result or handle any errors.

Example:
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = 'Some data';
    callback(null, data); // Call the callback with the result
  }, 2000);
}

// Usage
fetchData((error, result) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Result:', result);
  }
});

Promises:
Promises provide a more structured and readable approach to handle asynchronous code. A Promise represents the eventual completion or failure of an asynchronous operation. It allows chaining operations using .then() and .catch() to handle successful and failed outcomes, respectively.

Example:
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = 'Some data';
      resolve(data); // Resolve the promise with the result
      // or reject(new Error('Error message')) for error handling
    }, 2000);
  });
}

// Usage
fetchData()
  .then((result) => {
    console.log('Result:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

Async/await:
Async/await is a modern syntax introduced in ES2017 (ES8) that simplifies handling asynchronous code. It allows you to write asynchronous code in a more sequential and synchronous-like manner, enhancing code readability.

Example:
async function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = 'Some data';
      resolve(data); // Resolve the promise with the result
      // or reject(new Error('Error message')) for error handling
    }, 2000);
  });
}

// Usage
async function main() {
  try {
    const result = await fetchData();
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
