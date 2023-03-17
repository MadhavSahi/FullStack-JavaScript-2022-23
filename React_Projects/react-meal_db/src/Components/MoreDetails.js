import React, { useContext } from 'react';
import { MyContext } from './Hero';

const MoreDetails = () => {
    const {details}=useContext(MyContext);
  return (
    <>  
        <div className='mt-10 bg-pink-600'>
            <div className='mt-10 bg-gray-300 flex flex-row justify-around'>
                <p className='text-3xl text-yellow-800'>Dish Name :-</p>
                <p className='text-3xl font-serif text-black'>{details.strMeal}</p>
            </div>
            <div className='mt-10 bg-gray-300 flex flex-row justify-around'>
                <p className='text-3xl text-yellow-800'>Country Origin :-</p>
                <p className='text-3xl font-serif text-black'>{details.strArea}</p>
            </div>
            <div className='mt-10 bg-gray-300 flex flex-row justify-around'>
                <p className='text-3xl text-yellow-800'>Country Origin :-</p>
                <p className='text-3xl font-serif text-black'>{details.strArea}</p>
            </div>
            <div className='mt-10 bg-gray-300 flex flex-row justify-around'>
                <p className='text-3xl text-yellow-800'>Country Origin :-</p>
                <p className='text-3xl font-serif text-black'>{details.strArea}</p>
            </div>
        </div>

    </>
  )
}

export default MoreDetails