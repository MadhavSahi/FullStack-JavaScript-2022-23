import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
// import { BsFillSunFill } from "react-icons/bs";
import { RxSun } from "react-icons/rx";
import "./DarkMode.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className={`App ${theme}`}>
        <div className="text-4xl text-blue-500 font-extrabold flex flex-row justify-center mt-5">
          ROCK-PAPER-SCISSOR using React
          <button
          className="text-black ml-20 font-bold text-3xl"
          onClick={toggleTheme}          
        ><RxSun/> 
        </button>
        </div>

        <Hero></Hero>
      </div>
    </>
  );
};

export default App;
