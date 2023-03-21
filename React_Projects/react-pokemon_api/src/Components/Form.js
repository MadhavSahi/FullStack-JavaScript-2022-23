import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import Axios from 'axios';
import Pokemon from "./Pokemon";

const Form = () => {
  const [input, setInput] = useState("");
  const [handle, setHandle] = useState(false);
  const handleinput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const [details,setDetails]=useState({});

//   let response={};
  const searchPokemonFunc=async(e)=>{
    e.preventDefault();
    if(!input || input==="" || input===null){
        alert("Please enter Pokemon Name or ID");
      }
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
    //   if(response.error){//if no dish found from API
    //     alert("No Pokemon Found.")
    //   }
    //   console.log(response?.data);
      const data=response.data;
      setDetails(data);
      setHandle(true);
  }

  return (
    <>
      <div className="mt-20 flex flex-row justify-center gap-3">
        <input
          className="h-10 text-2xl text-blue-400 pl-3 rounded-lg"
          type="text"
          placeholder="Enter Pokemon Name or ID..."
          value={input}
          onChange={handleinput}
          onKeyDown={(e) => (e.key === "Enter" && searchPokemonFunc(e))}
        />
        <button 
            onClick={searchPokemonFunc}
            className="hover:scale-105 text-3xl bg-blue-200 rounded-md px-3">
          <MdSend></MdSend>
        </button>
      </div>
      {handle && <Pokemon details={details} ></Pokemon>}
      
    </>
  );
};

export default Form;
