import React from 'react';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {

    const navigate=useNavigate();
    const handleback=()=>{
        navigate("/");
    }
  return (
    <>
        <div className='flex flex-col justify-center items-center mt-60 text-5xl text-black'>
            <p>OOOOOOppppssss....No Page Found</p>
            <button
            className='text-lg text-red-200 bg-black rounded-lg p-2 mt-16 hover:scale-95 hover:bg-blue-800 hover:text-white'
            onClick={handleback}
            >Go To Search Page</button>
        </div>

    </>
  )
}

export default ErrorPage