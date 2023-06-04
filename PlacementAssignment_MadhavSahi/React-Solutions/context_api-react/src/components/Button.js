import React, { useContext } from 'react'
import { MyContext } from '../App'
import './Button.css';

const Button = () => {

const data=useContext(MyContext);

  return (
    <>  
        {   
            data.boool && 
            <>
                <br></br>
                <br></br>
                <button className='new-btn' style={{backgroundColor:data.colortwo}}>{data.mobile}</button>
            </>
        }
    </>
  )
}

export default Button