import React from 'react'

const Details = ({details}) => {
  return (
    <>
        <div className='mt-20 mb-10 text-black font-bold text-2xl'>
            <div className='flex flex-row justify-center gap-5'>
                <p className='text-2xl text-black'>Dish Image</p>
                <img className='h-36 w-auto' alt='dish' src={details.strMealThumb}/>
            </div>
            <div className='flex flex-row justify-center gap-5'>
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
                <p className='text-2xl text-black'>Season</p>
                <p className='text-xl color-gray-800'>{details.strCategory}</p>
            </div>
        </div>
 
   </>
  )
}

export default Details;