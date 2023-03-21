import React, { useEffect, useState } from "react";
import { RxSun } from "react-icons/rx";
import "../DarkMode.css";

const Home = () => {
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
    document.body.classList = theme; // this is to apply the changes on whole body
    // document.body.classList+= body; // this is to apply the changes on whole body
    // document.body.className+="darkk";
  }, [theme]);
  return (
    <>
      <div className=" mt-10">
        <p className="text-4xl text-red-700 font-bold text-center">
          Movie API using React JS
        </p>
        <button
          className="text-black -mt-10 float-right mr-10 font-bold text-3xl hover:scale-150"
          onClick={toggleTheme}
        >
          <RxSun />
        </button>
      </div>
    </>
  );
};

export default Home;
