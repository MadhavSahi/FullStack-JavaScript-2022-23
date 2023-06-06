import React, { useState, useReducer } from 'react';
import './Form.css';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.payload);
    case 'DELETE_ALL_TODOS':
      return [];
    default:
      return state;
  }
}

function Form() {
  const [text, setText] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const classs = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  const handleDeleteAll = () => {
    dispatch({ type: 'DELETE_ALL_TODOS' });
  };

  return (
    <>
      <div className="formdiv">
        <label className="formlabel">
          Enter Task:
          <input
            className="forminput"
            onChange={handleChangeText}
            type="text"
            placeholder="Enter Task of the Day"
            value={text}
          />
        </label>
        <button className="formbtn" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>

      <ul>
        {todos.length > 0 &&
          todos.map((val, i) => (
            <div key={i} className="ul-li">
              <li className={`li ${classs}`}>{val}</li>
              <button onClick={() => handleDelete(i)} className="deleted">
                Delete
              </button>
            </div>
          ))}
      </ul>

      {todos.length >= 2 && (
        <div className="deleteallbutton">
          <button className="deleteallbutton-1" onClick={handleDeleteAll}>
            DELETE ALL Tasks
          </button>
        </div>
      )}
    </>
  );
}

export default Form;
