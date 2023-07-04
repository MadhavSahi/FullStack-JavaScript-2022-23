//Q.6 What are Promises & Explain Some Three Method of Promise

//Solution--->

Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation. They provide a structured and readable way to handle asynchronous code. Promises have three states: pending, fulfilled, and rejected. When a Promise is pending, the asynchronous operation is ongoing. When it is fulfilled, the operation is successfully completed, and when it is rejected, an error occurs.

Promises offer several methods to interact with and handle asynchronous operations. Here are three important Promise methods:

1. then():
The then() method is used to handle the fulfillment of a Promise. It takes two optional callback functions as arguments: onFulfilled and onRejected. The onFulfilled callback is executed when the Promise is fulfilled (resolved), and the onRejected callback is executed when the Promise is rejected.

Example:
fetchData()
  .then((result) => {
    console.log('Fulfilled:', result);
  })
  .catch((error) => {
    console.error('Rejected:', error);
  });

2. catch():
The catch() method is used to handle the rejection of a Promise. It takes a single onRejected callback function as an argument. It is equivalent to calling then(null, onRejected). The catch() method is commonly used to handle errors or exceptions that occur during the Promise chain.

Example:
fetchData()
  .then((result) => {
    console.log('Fulfilled:', result);
  })
  .catch((error) => {
    console.error('Rejected:', error);
  });

3. finally():
The finally() method is used to specify a callback function that will be executed regardless of whether the Promise is fulfilled or rejected. This method is useful for performing cleanup operations or releasing resources after an asynchronous operation completes, regardless of its outcome.

Example:
fetchData()
  .then((result) => {
    console.log('Fulfilled:', result);
  })
  .catch((error) => {
    console.error('Rejected:', error);
  })
  .finally(() => {
    console.log('Cleanup operations');
  });
