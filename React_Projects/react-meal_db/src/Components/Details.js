import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import Footer from './Footer';
import { MyContext } from './Hero';

// import { useOutletContext } from "react-router-dom";

const Details = () => {
    const navigate= useNavigate();
    const {details}=useContext(MyContext);
    window.onload = function () {
        window.location = "/";
      }
    // console.log({details});
    // if({details}){
    //     alert("Try Something else");
    // }
    // const Ingredients=[];
    // for(let i=1;i<=20;i++){
    //     let variable=details.strIngredient1;
    //     console.log(variable);
    //     Ingredients.push(variable)
    // }
    // const [details,setDetails]=useOutletContext();
    // console.log(details);
  return (
    <>
    {   details && 
        <div className='mt-10  text-black font-bold text-2xl'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img
                role="button"
                onClick={()=>{navigate("moredetails")}}
                className='rounded-lg border-black hover:border-2 hover:scale-110 cursor-pointer h-56 w-56' alt='dish' src={details.strMealThumb}/>
                <p 
                onClick={()=>{navigate("moredetails")}}
                className='hover:scale-95 cursor-pointer text-3xl font-serif text-black'>{details.strMeal}</p>
            </div>
            {/* <div className='flex flex-row justify-center gap-5'>
                <p className='text-2xl text-black'>Dish Name</p>
                <p className='text-xl color-gray-400'>{details.strMeal}</p>
            </div>
            <div className='flex flex-row justify-center gap-5'>
                <p className='text-2xl text-black'>Recipee</p>
                <p className='text-xl color-gray-800'>{details.strInstructions}</p>
            </div>
            <div className='flex flex-row justify-center gap-5'>
                <p className='text-2xl text-black'>Country</p>
                <p className='text-xl color-gray-800'>{details.strArea}</p>
            </div>
            <div className='flex flex-row justify-center gap-5'>
                <p className='text-2xl text-black'>Category</p>
                <p className='text-xl color-gray-800'>{details.strCategory}</p>
            </div>
            <div className='flex flex-row justify-center gap-5'>
                <p className='text-2xl text-black'>Reference</p>
                <a target="_blank" rel="noreferrer" className='text-blue-700' href={details.strYoutube}  title="Dish Video">YouTube Link</a>
            </div>
            <div className='flex flex-row justify-center gap-5'>
                <p className='text-2xl text-black'>Ingredients used</p>
                
            </div> */}
        </div>
    }
    <Outlet></Outlet>
    {/* for MoreDetails */}

    {/* <Footer></Footer> */}
   </>

  )
}

export default Details;