import React, { useState } from "react";
import "./App.css";
import * as math from "mathjs";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = math.evaluate(displayValue);
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  return (
    <>
      <h1 className="heading">Calculator App using React JS</h1>
      <div className="calculator">
        <div className="row">
          <div className="display">{displayValue}</div>
          <button className="clearbtn" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="buttons">
          <div className="row">
            <button className="orange" onClick={() => handleClick("+")}>
              +
            </button>
            <button className="orange equalbtn" onClick={handleCalculate}>
              =
            </button>
          </div>
          <div className="row">
            <button className="orange" onClick={() => handleClick("*")}>
              *
            </button>
            <button className="orange" onClick={() => handleClick("-")}>
              -
            </button>
            <button className="orange" onClick={() => handleClick("/")}>
              /
            </button>
          </div>
          <div className="row">
            <button className="whitebtn" onClick={() => handleClick("1")}>
              1
            </button>
            <button className="whitebtn" onClick={() => handleClick("2")}>
              2
            </button>
            <button className="whitebtn" onClick={() => handleClick("3")}>
              3
            </button>
          </div>
          <div className="row">
            <button className="whitebtn" onClick={() => handleClick("4")}>
              4
            </button>
            <button className="whitebtn" onClick={() => handleClick("5")}>
              5
            </button>
            <button className="whitebtn" onClick={() => handleClick("6")}>
              6
            </button>
          </div>
          <div className="row">
            <button className="whitebtn" onClick={() => handleClick("7")}>
              7
            </button>
            <button className="whitebtn" onClick={() => handleClick("8")}>
              8
            </button>
            <button className="whitebtn" onClick={() => handleClick("9")}>
              9
            </button>
          </div>
          <div className="row">
            <button
              className="whitebtn zerobtn"
              onClick={() => handleClick("0")}
            >
              0
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
