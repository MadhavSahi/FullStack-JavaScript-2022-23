import React, { useState } from "react";
import './App.css';

const App = () => {
  let [inputone, setInputOne] = useState(null);
  let [inputtwo, setInputTwo] = useState(null);
  let [operator, setOperator] = useState(null);
  let [result,setResult]=useState(null);

  const handleInputOne=(e)=>{
    setInputOne(e.target.value);
  }
  const handleInputTwo=(e)=>{
    setInputTwo(e.target.value);
  }
  const handleDropdownChange = (event) => {
    setOperator(event.target.value);
    if(operator==="Chose"){
      setOperator(null);
    }
  };

  const handleResult=()=>{
    if(operator==="Chose"){
      setOperator(null);
    }
    else if(operator==='+'){
      // result=inputone+inputtwo
      setResult((+inputone)+(+inputtwo))
    }
    else if(operator==='-'){
      setResult(inputone-inputtwo)
    }
    else if(operator==='*'){
      setResult(inputone*inputtwo)
    }
    else if(operator==='/' && inputtwo!==0){
      setResult(inputone/inputtwo)
    }
  };
  
  return (
    <>
      <div className=" w-auto bg-cyan-300 flex flex-col gap-3 justify-center items-center mt-10 py-5">
        <div className="flex flex-row justify-evenly gap-5">
          <p >Enter Input 1</p>
          <input name="input1" type="number" value={inputone} onChange={handleInputOne} />
          <p>Select Operator:</p>
          <select value={operator} onChange={handleDropdownChange} name="operator" id="operator">
            <option selected value="Chose">Chose</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <p>Enter Input 2</p>
          <input name="input2" type="number" value={inputtwo} onChange={handleInputTwo} />
        </div>

        <div className="flex flex-row justify-between gap-5">
          <button disabled={operator ? "" : "disabled"} onClick={handleResult} 
          className={ operator ? "bg-green-300 px-3 py-2" : "bg-red-400 px-3 py-2"}>SUBMIT</button>
          <p className=" text-orange-700">Result is : {result}</p>
        </div>
      </div>
    </>
  );
};

export default App;
