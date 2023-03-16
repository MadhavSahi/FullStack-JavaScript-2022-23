import React, { useEffect, useState } from "react";
// import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
// import { BsFillSunFill } from "react-icons/bs";
import { RxSun } from "react-icons/rx";
import "./DarkMode.css";

const App = () => {
  const [theme, setTheme] = useState("light"); //code logic for toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => { //this is for applying changes of dark theme.
    document.body.className = theme; // this is to apply the changes on whole body
    // document.body.className+="darkk";
  }, [theme]);
  return (
    <>
      <div className={`App ${theme}`}>
        <div className="text-4xl text-blue-500 font-extrabold flex flex-row justify-center mt-5">
          ROCK-PAPER-SCISSOR using React
          <button
          className="text-black ml-20 font-bold text-3xl hover:scale-150"
          onClick={toggleTheme}          
        ><RxSun/> 
        </button>
        </div>

        {/* <Hero></Hero> */}
        <Hero2></Hero2>
      </div>
    </>
  );
};

export default App;
