import React,{useState} from 'react';
import Axios from 'axios';
import Details from './Details';

const Hero = () => {

  const [dish,setDish]=useState("");
  const [details,setDetails]=useState({});

  const handleinput=(e)=>{
    setDish(e.target.value);
  }

  const handlesubmit=async(e)=>{

    e.preventDefault();

    if(!dish){
      alert("Please enter Dish Name");
    }
    else if(Number.isInteger(+dish)){
      alert("Please enter Text only");
    }
    const response=await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`);
    console.log(response.data.meals[0]);
    const details=response.data.meals[0];
    setDetails(details);

  }
  return (
    <>  
      <div className='flex flex-row justify-center gap-10 mt-32'>
        <input
        placeholder='Enter your favorite Dish...'
        className="border-1 border-black text-cyan-800 focus:bg-pink-100 rounded-md h-10 w-1/6 p-3 text-xl "        
        type="text"
        value={dish}
        onChange={handleinput}
        />
        <button
        onClick={handlesubmit}
        className='text-white bg-black text-md px-3 rounded-lg font-semibold hover:scale-110'
        >SEARCH
        </button>
      </div>
      <Details details={details}></Details>
    </>
  )
}

export default Hero