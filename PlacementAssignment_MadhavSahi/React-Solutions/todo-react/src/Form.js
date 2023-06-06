import React,{useState} from 'react';
import "./Form.css";

function Form() {

  const [text,setText]=useState("");
  const [todos,setTodos]=useState([]);

  const classs = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  const changetext=(event)=>{
    setText(event.target.value);
  };

  const handlesubmit=()=>{
      setTodos((todos)=>{
        const newtodos=[...todos,text];
        setText("");
        return newtodos;

      });
  };

  const handledelete=(i)=>{
    const newtodos=todos.filter((val,id)=>{
        return (i!==id);
    })
    setTodos(newtodos);
  };

  const handledeleteall=()=>{
    setTodos([]) 
  };

  
  return (
    <>
        <div className='formdiv'>
            <label className='formlabel'>Enter Task :-
                <input
                    className='forminput'
                    onChange={changetext}
                    type="text" 
                    placeholder='Enter Task of the Day'
                    value={text}                
                >            
                </input>
            </label>
            <button className='formbtn' onClick={handlesubmit}>SUBMIT</button>
        </div>
       
        <ul>
            {todos!==[] && todos.map((val,i)=>{
                return (
                    <div key={i} className='ul-li'>
                        <li className={`li ${classs}`}>{val}</li>
                        <button onClick={()=>handledelete(i)} className='deleted'>Delete</button>
                    </div>
                )
            })}
        </ul>
        {todos.length>=2 && 
        <>
          <div className='deleteallbutton'>
              <button className='deleteallbutton-1' onClick={handledeleteall} >DELETE ALL Tasks</button>
          </div>
        </>
        }
        
    </>
  )
};

export default Form;