import React, { createContext, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import Axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
// useNavigate
export const MyContext = createContext();

const SearchForm = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  //   const [inputImg, setInputImg] = useState(null);
  const [details, setDetails] = useState({});

  const handleinput = (e) => {
    setInput(e.target.value);
  };

  const handlesubmit = async () => {
    // e.preventDefault();

    const response = await Axios.get(
      ` https://www.omdbapi.com/?i=tt3896198&apikey=404a2bb7&t=${input}`
    );

    // const image = await Axios.get(`http://img.omdbapi.com/?apikey=404a2bb7&t=${input}`);

    // const imgdata=image.data;
    // console.log(imgdata);
    // console.log(image);
    
    // const navigate=useNavigate();
    const details = response.data;

    if (!input) {
      alert("Please enter Movie Name");      
      return navigate("/");
    }
    if (details.Error === "Movie not found!") {
        alert("No Movie Found..Search some other Movie");
        setInput("")
        return navigate("/");
    }
    window.onload = function () {
        window.location = "/";
      };

    console.log(details);

    setDetails(details);

    navigate("/movie");
    ref.current?.scrollIntoView({ behavior: "smooth" });
    // setInput("");
  };

  return (
    <MyContext.Provider value={{ details }}>
      <div className="mt-20 flex flex-row justify-center gap-3">
        <input
          className="rounded-md p-3 w-80 text-cyan-800"
          type="text"
          placeholder="Enter Movie/Series Name"
          value={input}
          onChange={handleinput}
          onKeyDown={(e) => {
            e.key === "Enter" && handlesubmit();
          }}
        />
        <button
          className="rounded-md p-3 text-2xl bg-blue-200 hover:cursor-pointer hover:scale-95"
          onClick={handlesubmit}
        >
          <BiSend />
        </button>
      </div>
      <div ref={ref}>
        <Outlet></Outlet>
      </div>
    </MyContext.Provider>
  );
};

export default SearchForm;
