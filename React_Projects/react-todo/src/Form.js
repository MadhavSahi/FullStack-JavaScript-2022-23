import React,{useState} from 'react';
import "./Form.css";
// import ToDos from './ToDos';

function Form() {

  const [text,setText]=useState("");
  const [todos,setTodos]=useState([]);
  // const [classs,setClasss]=useState("xyz");
  // const [tellcomplete,setTellComplete]=useState("Completed");

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
      // setTodos([...todos,text]);//it will work asynchronously
    //   console.log([todos]);
      // setText("");
      setTodos((todos)=>{
        const newtodos=[...todos,text];
        setText("");
        return newtodos;

      });
  };

  // const handlecomplete=(i)=>{

  //   const neww=document.querySelectorAll(".li");
  //   // console.log(neww);
  //   neww[i].classList.toggle("crossed-line");//for strikethrough
  //   const btn=document.querySelectorAll(".completed");
  //   // btn[i].innerHTML="kk"
  //   // console.log(btn[i]);
  //   // setTellComplete(tellcomplete=>(btn[i].innerHTML === "Completed" ? "Not Completed" : "Completed" ));
  //   if(btn[i].innerHTML==="Completed"){
  //     btn[i].innerHTML = "Not Completed";
  //   }
  //   else{
  //     btn[i].innerHTML = "Completed";
  //   }
  //   // setTellComplete(tellcomplete=>(tellcomplete === "Completed" ? "Not Completed" : "Completed" ));

  // };
  const handledelete=(i)=>{
    const newtodos=todos.filter((val,id)=>{
        return (i!==id);
    })
    setTodos(newtodos);
  };

  const handledeleteall=()=>{
    // const newtodos=[];
    // setTodos(newtodos);
    setTodos([]) //for making the entire todo array empty
  };

  // const handlecompleteall=()=>{
  //   const neww=document.querySelectorAll(".li");
  //   console.log(neww);
  //   neww.forEach((val,i) => {
  //     neww[i].classList.toggle("crossed-line");//for strikethrough
  //   });
  // };
  
  // const handleedit=(i)=>{
    // setText("");
    // console.log(e.target);
    // const neww=document.querySelectorAll(".li");
    // neww[i].innerHTML=""
    // setText("h");
    // return (
    //     <>
    //         <h1>{text}</h1>
    //     </>
    // );
    // setText(event.target.value);
  // };

//   const crossLine = (event) => {

//   };

  return (
    <>
        <div className='formdiv'>
            <label className='formlabel'>Enter ToDo :-
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
        {/* <ToDos 
            list={todos}
        >
        </ToDos> */}
        <ul>
            {todos!==[] && todos.map((val,i)=>{
                return (
                    <div key={i} className='ul-li'>
                        <li className={`li ${classs}`}>{val}</li>
                        {/* <button onClick={()=>handleedit(i)} className='edit'>Edit</button> */}
                        {/* <button onClick={()=>handlecomplete(i)} className='completed'>Completed</button> */}
                        <button onClick={()=>handledelete(i)} className='deleted'>Delete</button>
                    </div>
                )
            })}
        </ul>
        {todos.length>=2 && 
        <>
          <div className='deleteallbutton'>
              <button className='deleteallbutton-1' onClick={handledeleteall} >DELETE ALL ToDos</button>
          </div>
          {/* <div className='completeallbutton'>
              <button className='completeallbutton-1' onClick={()=>handlecompleteall()} >COMPLETE ALL</button>
          </div> */}
        </>
        }
        
    </>
  )
};

export default Form;