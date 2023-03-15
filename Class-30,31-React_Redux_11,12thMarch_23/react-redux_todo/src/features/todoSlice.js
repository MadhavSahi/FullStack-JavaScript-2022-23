import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todo:[]
};

export const todoSlice=createSlice({
    name:"ToDo",
    initialState,
    reducers:{

        addToDo:(state,actionokay)=>{
            const newtodo={
                id:nanoid(),
                text:actionokay.payload,
            }
            state.todo.push(newtodo);
        },

        deleteToDo:(state,action)=>{
            state.todo = state.todo.filter((todo)=>{
                return (todo.id !== action.payload)//will receive id parameter in payload
            })
        },

        completeToDo:(state,action)=>{
            // action.payload="s"
            let obj = state.todo.find(o => o.text === action.payload.text);
            console.log(state.todo.indexOf(obj));
            console.log(obj.text);
            obj.text="DONE";
            // console.log(action.payload);
            // console.log(state.todo.text);
            // console.log(state.todo.indexOf(action.payload));
            // console.log(state.todo.id);
            // state.todo[i]="s";
            // console.log(i);
            // console.log(action);
        },

        deleteAllToDo:(state,action)=>{
            state.todo=[];
        }
    }
})

export const {addToDo,deleteAllToDo,deleteToDo,completeToDo} = todoSlice.actions;
export default todoSlice.reducer;