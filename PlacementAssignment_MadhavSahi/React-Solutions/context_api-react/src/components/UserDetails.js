import React, { useContext } from 'react'
import { MyContext } from '../App'
import './UserDetails.css';

const UserDetails = () => {

const data=useContext(MyContext);

  return (
    <>  
        {data.boool &&  //this is to display the info on click only.
        <>
            <p className='text-p'>Your entered Name is :- <span>{data.name}</span></p>
            <p className='text-p'>Your entered Color is :-<span> {data.color}</span> </p>
            <p className='text-p'>Your 2nd entered Color is :-<span> {data.colortwo}</span> </p>
            <p className='text-p'>Your entered Mobile Number is :-<span> {data.mobile}</span> </p>
            <button className='btn-ud' style={{backgroundColor:data.color}}>{data.name}</button>
        </>
        }
    </>
  )
}

export default UserDetails