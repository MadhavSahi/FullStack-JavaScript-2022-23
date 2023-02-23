import React from "react";
// import { ReactDOM } from "react";
import { useState } from "react";
import "./App.css";

function App() {

  let [count,setCount]=useState(0);//using state
  let add=()=>{
    
    setCount(count+1);//updating the value using state

    // console.log(count);
  };//count is updated after end of line 14.
  // console.log(count);
  
  let sub=()=>{
    if(count-1<0){
      return setCount(100);
      // return;
    }
    return setCount(count-1);
    // console.log(count);
  };
  let reset=()=>{
    return setCount(0);//we can write or ignore return for useState.
    // console.log(count);
  };
   return(
    <>
      <h3>This is a counter App</h3>
      <p>Count is {count}</p>
      <button className="btn" onClick={add} >INCREASE THE COUNT</button>
      <button className="btn" onClick={sub} >DECREASE THE COUNT</button>
      <button className="btn" onClick={reset} >RESET THE COUNT</button>
      {/* whens using state...we have to put setCount inside a function and not use it */}
    </>
   )
};
export default App;

// - If use the component multiple time...then updation in 1 component won't effect the other components...it means that states are not shared..they are independent.
//- For diff. components...the state is obviously 1...but multiple copies are created in the memory.
//- Virtual DOM is basically creating the different copies of that state in the memory....so all the components are not sharing the same state values.