//Q.9 Whats fetch in JavaScript?

//Solution--->

In JavaScript, the fetch() function is a built-in API that enables making asynchronous HTTP requests and interacting with web resources. It offers a straightforward and flexible way to fetch data from a specified URL.

When invoked with a URL, fetch() returns a Promise that resolves to a Response object representing the response to the request. The Response object contains various methods and properties to access and process the response data.

Example:-

fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data:', data);
    // Process the retrieved data
  })
  .catch((error) => {
    console.error('Error:', error);
  });

In the above example, fetch() is used to initiate a GET request to the URL 'https://api.example.com/data'. The resulting Promise is then chained with a then() method to handle the response. The first then() block checks if the response was successful (response.ok). If it is not, an error is thrown. When the response is successful, the json() method is used to extract and parse the response data as JSON. The second then() block receives the parsed data, allowing you to further process it according to your requirements. In case any errors occur during the fetch or response handling, the catch() block is executed to handle and log the error.