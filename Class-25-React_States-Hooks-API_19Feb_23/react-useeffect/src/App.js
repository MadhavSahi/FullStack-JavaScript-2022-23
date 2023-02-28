import React,{useState,useEffect} from 'react';

function App() {

  const [val,setVal]=useState("");
  const [windowWidth,setWindowWidth]=useState(window.innerWidth);
  // console.log("Hey I just rendered");

  //Every lifecycle event will fire up once always on the 1st render...except the return

  useEffect(()=>{ // Lifecycle event :- When component Renders anytime...or means on every render
    console.log("Hey I just rendered");
    // window.addEventListener("resize",changeWidth);
  });

  useEffect(()=>{ //Lifecycle event :- When component Firstly Mounts/Renders first time only...it will not work when the component Re-renders
    //alternative to componentDidMount
    console.log("Hey I just Mounted");
    // window.addEventListener("resize",changeWidth);
  },[]);  

  useEffect(()=>{ // Lifecycle event :- On first render + When component Re-Renders(when dependency changes)
    // commponentDidUpdate alternative
    console.log(`Hey I just RE-rendered and value is ${val}`);
    // window.addEventListener("resize",changeWidth);
  },[val,windowWidth]);

  useEffect(()=>{// Lifecycle event :- When component Un-Mounts/CleanUp
    //componentWillUnmount alternative
    window.addEventListener("resize",changeWidth);
    console.log("Hey I will work normally as all above...componentDidMount");

    return()=>{//return is only used in Un-Mount event....below code will run when component cleans up/Un Mounts..it WONT run on 1st render
      console.log("Hey I just UN-Mounted/CleaningUp");
      window.removeEventListener("resize",changeWidth);
    };
  },[]);
//basically what we can do is replace this logic of unmount with the componentDidUpdate having value as 2nd parameter...so that only when component mounts for the 1st time we can do any thing.

  const changeWidth=()=>{
    setWindowWidth(window.innerWidth);
  };

  const newVal=(e)=>{
    setVal(val=>e.target.value);//using val=> is optional
    // console.log(e.target.value);//from e.target.value we get the values which are dynamically being entered by user in the input box.
  };

  const hello=(event)=>{
    event.preventDefault();
  };

  return (
    <>
      <h3>All about useEffect Hook and Lifecycle events</h3>
      <br></br>
      <h3>WINDOW WIDTH SIZE IS:-</h3>
      <p>{windowWidth}</p>
      <form onSubmit={hello}>
        <label>ENTER DETAILS :- 
          <input 
            type="text"
            value={val}
            onChange={newVal} 
            placeholder="ENTER NAME PLZ" 
          >
          </input>
        </label>
      </form>
    </>
  )
};

export default App;