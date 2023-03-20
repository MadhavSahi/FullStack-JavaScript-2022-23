import React, { useState } from 'react'
import {FormGroup,Input,InputGroup,Button, Form} from 'reactstrap';
import {v4} from 'uuid';

const ToDoForm = ({addToDos}) => { //here we are receiving the fxn as prop from other component...we have to use same name of variable

    const [input,setInput]=useState("");
    const handleinputToDo=(e)=>{
        e.preventDefault();
        setInput(e.target.value);
    };
    const onsubmit=(e)=>{
        e.preventDefault();
        if(!input || input===""){
             return alert("Plz enter some text");
        };
        const todo={
            // todotext:"",
            input, // we r reffering it like this - todotext:input,
            id:v4(),
        };

        addToDos(todo); //from props we are receiving a function which will have todo as a parameter

        setInput("");
        // console.log(localStorage);
        // console.log({localStorage});
    };
  return (
    <>
        <Form>
            <FormGroup>
                <InputGroup>
                    <Input 
                        type='text'
                        name='todo'
                        id='todo'
                        placeholder='Enter ToDO'
                        value={input}
                        onChange={handleinputToDo}
                    />
                    <Button
                        color='success'
                        onClick={onsubmit}
                    >Add ToDo
                    </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    </>
  )
}

export default ToDoForm