import React, { useEffect, useState } from "react";
import { RxSun } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
// import { Outlet } from "react-router-dom";
import "../DarkMode.css";
// import { useNavigate } from "react-router-dom";
// import SearchForm from "./SearchForm";

const Home = () => {
  const [theme, setTheme] = useState("light"); //code logic for toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // const navigate=useNavigate();
  const handlehome=()=>{
    // SetMovieList(true);
    window.location = "/";
    // ref3.current?.scrollIntoView({ behavior: "smooth" });
    // ref2.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    //this is for applying changes of dark theme.
    document.body.classList = theme; // this is to apply the changes on whole body
    // document.body.classList+= body; // this is to apply the changes on whole body
    // document.body.className+="darkk";
  }, [theme]);
  return (
    <>
      <div className="mt-10 flex flex-row justify-between">
        <button
          onClick={handlehome}
          className="bg-white text-2xl p-2 ml-10 hover:scale-95 rounded-lg"
        >
          <FaHome />
        </button>
        <p className="text-4xl text-red-700 font-bold text-center">
          Movie API using React JS
        </p>
        <button
          className="text-black mr-10 font-bold text-3xl hover:scale-150"
          onClick={toggleTheme}
        >
          <RxSun />
        </button>
      </div>

      {/* <div className="mt-10">
        <SearchForm></SearchForm>
      </div> */}
      {/* <Outlet></Outlet> */}
    </>
  );
};

export default Home;
