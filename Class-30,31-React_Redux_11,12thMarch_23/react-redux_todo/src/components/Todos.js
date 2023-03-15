import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToDo, deleteAllToDo, deleteToDo,completeToDo } from '../features/todoSlice';

const Todos = () => {

    // const [classs,setClasss]=useState(false);
    const valToDo=useSelector((state)=>state.slice.todo);
    const dispatch=useDispatch();
    const [input,setInput]=useState("");

    const textchange=(e)=>{
        setInput(e.target.value);

        setTimeout(()=>{
            setInput("")
        },10000);
    }

    // const completeToDo=()=>{
    //     setClasss(!classs);
    // }

  return (
    <>
        <div className='mt-10 text-2xl mx-10'>ToDos List</div>
        <input
            className='bg-gray-400 mx-10 px-4 rounded-md mt-10'
            type="text"
            placeholder='ENTER ToDo HERE'
            value={input}
            onChange={textchange}
        />
        <button
            className='bg-gray-300 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-blue-400'
            onClick={()=>dispatch(addToDo(input))}
        >
        SUBMIT ToDo
        </button>
        <div className='m-5 text-red-500 font-medium  '>
            {
                valToDo.map((eachtodo)=>(
                    (   
                        <div className="mx-5" key={eachtodo.id}>
                            <h1 className='px-10 text-2xl' key={eachtodo.id}>{eachtodo.text}
                            <span>
                                <button
                                    onClick={()=>dispatch(deleteToDo(eachtodo.id))}
                                    className='text-xs mx-10 bg-gray-200 rounded-lg text-red-700'>
                                DELETE
                                </button>
                                {/* <button
                                    // onClick={()=>dispatch(completeToDo(eachtodo.text))}
                                    onClick={()=>dispatch(completeToDo(eachtodo))}
                                    className='text-xs mx-3 bg-gray-200 rounded-lg text-green-700'>
                                DONE
                                </button> */}
                            </span>
                            </h1>                                
                        </div>                        
                    )
                ))
            }
        </div>
        { valToDo.length>=2 &&
            <button
                onClick={()=>dispatch(deleteAllToDo())}
                className='bg-orange-200 px-5 mt-5 mx-20'
            >
                DELETE ALL
            </button>
        }
    </>
  )
}

export default Todos