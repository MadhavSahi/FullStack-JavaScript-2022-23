import React, { useEffect, useState } from 'react';
import Axios from 'axios';
// import axios from 'axios';
import Card from './Card';

//Axios - Promise based HTTP client for the browser and node.js
function App() {

  const [details,setDetails]=useState({});

  //inside we will be using axios with await...so on the outer side we have to declare async arrow fxn...(Promises concept)
  const fetchdetails = async () => {

    //from Axios we will be getting 6 things in return from browser..- config,data,headers,request,status,statusText...so we can do like below...or we can destructure as const {data}...mind u that we have to specify the exact name when destructuring...otherwise it will show undefined...(IMPORTANT)

    const response = await Axios.get('https://randomuser.me/api');//browser by default can only send get request...but we can send more requests - get,put,post,delete etc.
    // console.log("Response of data: ",response.data);

    // console.log(response.data.results[0]);
    const details=response.data.results[0];
    // setDetails(response.data.results[0]);
    setDetails(details);

    //OR

    // const {data}= await Axios.get('https://randomuser.me/api');
    // console.log(data);

  };
  //Data in results array.
  // {
// "results": [
//   {
//   "gender": "male",
//   "name": {},
//   "location": {},
//   "email": "armyn.rdyyn@example.com",
//   "login": {},
//   "dob": {},
//   "registered": {},
//   "phone": "030-88200891",
//   "cell": "0934-676-7797",
//   "id": {},
//   "picture": {},
//   "nat": "IR"
//   }
//   ],
//   "info": {}
//   }


  //we were getting the data from Random user API on click..only then it was showing data...but to display this data on at starting of reload of page once...then we have to use useEffect hook with nothing inside dependency array(componentDidMount). So we called the fetchdetails() inside the useEffect in App component...so that that function gets loaded once whe component mounts.

  //if we were using useEffect hook for displaying data on first mount..it was getting loaded twice...so told by Hitesh sir that this is bcz of StrictMode...so we removed the StrictMode and it was working fine.
  useEffect(() => {
    fetchdetails();
  }, [])
  
  return (
    <>
      <button 
      onClick={fetchdetails}
      >ClickMe</button>
      <Card name="Madhav Sahi" details={details}/>
    </>
  );
};

export default App;