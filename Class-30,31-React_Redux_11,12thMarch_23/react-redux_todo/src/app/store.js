import {configureStore} from "@reduxjs/toolkit";
import  todoSlice  from "../features/todoSlice";

export const createstore=configureStore({
    reducer:{
        slice:todoSlice
    }
});