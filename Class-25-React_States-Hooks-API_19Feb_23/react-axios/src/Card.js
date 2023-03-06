import React from 'react';

function Card({name,details}) {
  return (
    <>
        {/* these ? are necessary otherwise we will get the JS error - Cannot read properties of undefined */}
        {/* to prevent long chaining errors..Dependency Chaining */}
        <br></br>
        <br></br>
        <br></br>
        <h1> Boss is : {name}</h1>
        <span>
            <h1>{details?.gender}</h1>
            <h1>{details?.name?.first} &nbsp; 
            {details?.name?.last}</h1>
        </span>
    </>
  );
};

export default Card;