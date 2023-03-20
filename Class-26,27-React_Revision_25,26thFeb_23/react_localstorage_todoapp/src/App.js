import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import ToDoForm from './Components/ToDoForm';
import ToDo from './Components/ToDo';

const App = () => {

  const [todos,setTodos]=useState([]);

  useEffect(() => {

    const localStorageToDos=localStorage.getItem("ToDos");

    console.log(localStorageToDos);

    if(localStorageToDos){

      setTodos(JSON.parse(localStorageToDos));
      // setTodos(localStorageToDos);

    };

  },[]);


  const addToDos=async(todo)=>{

    setTodos([...todos,todo]);
    // console.log(todo.input);

  }


  useEffect(()=>{

    localStorage.setItem("ToDos",JSON.stringify(todos));

  },[todos]);


  const markcomplete=(id)=>{

    setTodos(todos.filter(todo=>(todo.id!==id)));

  } 

  return (
    <>
        <Container fluid>

          <h1>ToDo App using Local Storage and ReactJS by Madhav Sahi</h1>

          
          <ToDo
            todos={todos}
            markcomplete={markcomplete}
          >
          </ToDo>        

          <ToDoForm
            addToDos={addToDos}
          >            
          </ToDoForm>

        </Container>
    </>
    
  )
}

export default App