import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };
  return <>
    <div className="reddiv">
        <div className="text-counter">
            {counter}
        </div>
        <div className="buttons">
          <button className="btn" onClick={handleIncrement}>Increment</button>
          <button className="btn" onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  </>;
};

export default App;
