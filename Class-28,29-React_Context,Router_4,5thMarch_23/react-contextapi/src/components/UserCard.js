import React, { useContext } from 'react';
import Button from './Button';
import UserDetails from './UserDetails';
import './UserCard.css';
import { MyContext } from '../App';

const UserCard = () => {
    const data=useContext(MyContext);
    // data.setColor("yellow"); if we do this...then the code is not working properly...passing states is somewhat ajeeb.
  return (
    <>  
        {            
            data.boool && //this is for to display the 2nd card on click of Submit only.
            <>
                <div className='div-usercard'>
                    <div className='usercard-div'>
                        <UserDetails></UserDetails>
                        <Button></Button>   
                    </div>
                </div>
            </>
        } ;
    </>
  );
};

export default UserCard;