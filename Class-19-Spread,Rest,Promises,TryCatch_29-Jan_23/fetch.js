import fetch from "node-fetch";
const url="https://restcountries.com/v2/all"; // api countries

//The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.

//Template on how to use fetch

// fetch(url).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Something went wrong');
//   })
//   .then((responseJson) => {
//     // Do something with the response
//   })
//   .catch((error) => {
//     console.log(error)
//   });


fetch(url)
.then((res)=>{ //1st then is for getting the response and making it as json obj.
    return res.json();
})
.then((data)=>{ // this is for doing anything with the response.
    console.log(data);
})
.catch((err)=>{
    console.log(err.name);
});