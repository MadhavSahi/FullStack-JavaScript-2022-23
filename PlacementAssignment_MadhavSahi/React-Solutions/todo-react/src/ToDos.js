import React from 'react';
// import "./Form"

function ToDos({todos}) {
  return (
    <>
        <p>Hey Task Manager App</p>
        <ul>
            {todos.map(val=>{
                return (
                    <li key={val}>{val}</li>
                )
            })}
        </ul>
    </>
  );
};

export default ToDos;