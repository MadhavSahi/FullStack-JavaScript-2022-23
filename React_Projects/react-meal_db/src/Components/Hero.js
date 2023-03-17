import React,{createContext, useState} from 'react';
import Axios from 'axios';
// import Details from './Details';
import { Outlet, useNavigate } from 'react-router-dom';

export const MyContext=createContext();
const Hero = () => {

  const navigate=useNavigate();
  const [dish,setDish]=useState("");
  const [details,setDetails]=useState({});

  const handleinput=(e)=>{
    setDish(e.target.value);
  }

  const handlesubmit=async(e)=>{

    // e.preventDefault();
    if(!dish){
      alert("Please enter Dish Name");
    }
    else if(Number.isInteger(+dish)){
      alert("Please enter Text only");
    }
    const response=await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`);
    console.log(response);
    if(response.data.meals===null){//if no dish found from API
      alert("No Dish Found.")
    }
    console.log(response.data.meals[0]);
    const details=response.data.meals[0];
    setDetails(details);
    navigate("/details");

  }
  return (
    <>  
    <MyContext.Provider value={{details}}>
      <div className='flex flex-row justify-center gap-10 mt-32'>
        <input
        placeholder='Enter your favorite Dish...'
        className="border-1 border-black text-cyan-800 focus:bg-pink-100 rounded-md h-10 w-1/6 p-3 text-xl "        
        type="text"
        value={dish}
        onChange={handleinput}
        onKeyDown={(e)=>{e.key==="Enter" && handlesubmit()}}//to use enter for submit
        />
        <button
        onClick={handlesubmit}
        className='text-white bg-black text-md px-3 rounded-lg font-semibold hover:scale-110'
        >SEARCH
        </button>
      </div>
      <Outlet></Outlet>
      </MyContext.Provider>
    </>
  )
}

export default Hero