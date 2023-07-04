//Q.10 How do you define an asynchronous function in JavaScript using async/await?

//Solution--->

To define an asynchronous function in JavaScript using async and await, you can simply prepend the async keyword before the function declaration. This informs JavaScript that the function contains asynchronous operations and will always return a Promise.

Example:-
async function fetchData() {
  // Asynchronous code goes here
  // For instance, fetching data from an API
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

In the above example, the fetchData() function is declared as an asynchronous function using the async keyword. Within this function, you can write code that involves asynchronous operations. In this case, it utilizes the fetch() function to make an HTTP request and retrieve data from 'https://api.example.com/data'.

The await keyword is used to pause the execution of the function until the Promise returned by fetch() resolves and the response is available. By employing await, you can write code in a more sequential and synchronous-like style, enhancing readability.

In the example, await is used twice: first to await the resolution of the fetch() Promise and assign the resulting response object, and then to await the resolution of the response.json() Promise and assign the parsed data.

Finally, the function returns the fetched data as a Promise. Since an async function always returns a Promise, you can use it with then() or await when invoking the function.

Example:-

fetchData()
  .then((data) => {
    console.log('Fetched data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

In this above example, the fetchData() function is called, and the returned Promise is handled using the then() method. The fetched data is then logged to the console. If any errors occur during the execution of the async function, they are caught and handled in the catch() block.