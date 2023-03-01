import React from 'react';
// import "./Form"

function ToDos({todos}) {
  return (
    <>
        <p>Hey ToDo App</p>
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