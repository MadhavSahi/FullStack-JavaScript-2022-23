import React, { useState } from "react";
import {
  incByValue,
  increment,
  decrement,
  DecByValue,
} from "../features/counterSlice";
// import { incByValue } from './features/counterSlice';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const [input, setInput] = useState("");
  const val = useSelector((state) => state.counterok.value); //this is a bit odd..to get the value from the counterSlice we have to use useSelector.
  const dispatch = useDispatch(); //to use the functions(action creators) from counterSlice.
  const changeinput = (e) => {
    setInput(e.target.value);

    setTimeout(() => {
      //to make the entered num go away
      setInput("");
    }, 5000);
  };

  return (
    <>
      <div className="bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-6">
        <div className="space-x-3">
          <button
            onClick={() => dispatch(incByValue(+input))}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Increment by Value
          </button>
          <input
            type="number"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a number..."
            value={input}
            onChange={changeinput}
          />
          <button
            onClick={() => dispatch(DecByValue(+input))}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Decrement by Value
          </button>
        </div>
        <div className="space-x-6">
          <button
            onClick={() => dispatch(increment())}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Increment by 1
          </button>
          <span>{val}</span>
          <button
            onClick={() => dispatch(decrement())}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Decrement by 1
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
