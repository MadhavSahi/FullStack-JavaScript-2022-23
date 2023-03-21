import React, { useEffect, useState } from "react";
import "./DarkMode.css";
import {RxSun} from 'react-icons/rx'
import Form from "./Components/Form";

const App = () => {
  const [theme, setTheme] = useState("light"); //code logic for toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    //this is for applying changes of dark theme.
    document.body.className = theme; // this is to apply the changes on whole body
    // document.body.className+="darkk";
  }, [theme]);
  return (
    <>
      <div className="text-4xl text-white font-extrabold flex flex-row justify-center mt-5">
        Pokemon API Project using React JS
        <button
          className=" text-black ml-20 font-bold text-3xl hover:scale-150"
          onClick={toggleTheme}
        >
          <RxSun />
        </button>
      </div>
      <Form></Form>

    </>
  );
};

export default App;
