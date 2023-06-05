import React from "react";
import { createContext,useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
import UserCard from "./components/UserCard";
import './App.css';
import { ThemeProvider } from "./ThemeContext"; 

// eslint-disable-next-line
export const MyContext=createContext();//we need to export from here only as we can't export default more than 1 at bottom.

function App() {

  const [name,setName]=useState("");
  const [color,setColor]=useState("");
  const [colortwo,setColortwo]=useState("");
  const [mobile,setMobile]=useState("");
  const [boool,setBoool]=useState(false);

  const namechange=(e)=>{
    setName(e.target.value);
  };
  const colorchange=(e)=>{
    setColor(e.target.value);
  };
  const color2change=(e)=>{
    setColortwo(e.target.value);
  };
  const mobilechange=(e)=>{
    setMobile(e.target.value);
  };

  const submitbtn=(e)=>{ //this is for using the if-else in HTML..to show divs on click only.
    e.preventDefault();
    setBoool(true);
  };

  return (
    <>
     <ThemeProvider>
      <MyContext.Provider value={{name,color,colortwo,mobile,boool,setColor}}>
        <Header></Header>

        <div className="div-hero">
            <div className="div-app">
              <form className="form-app">
                <label className="label-name">UserName:-
                  <input
                    type={"text"}
                    placeholder="Enter your name here"
                    value={name}
                    onChange={namechange}
                    >
                  </input>
                </label>
                <label className="label-color">Color Name:-
                  <input
                    type={"text"}
                    placeholder="Enter your fav color here"
                    value={color}
                    onChange={colorchange}
                  >
                  </input>
                </label>
                <label className="label-color">2nd Color Name:-
                  <input
                    type={"text"}
                    placeholder="Enter your 2nd fav color here"
                    value={colortwo}
                    onChange={color2change}
                    >
                  </input>
                </label>
                <label className="mobile-name">Mobile:-
                  <input
                    type={"number"}
                    placeholder="Enter your mobile num here"
                    value={mobile}
                    onChange={mobilechange}
                  >
                  </input>
                </label>
                {/* <br/><br/> */}
                <button className="btn-form" onClick={submitbtn}>SUBMIT</button>
              </form>
            </div>
            <UserCard></UserCard>
        </div>
        <Footer></Footer>
      </MyContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
// export default ;
