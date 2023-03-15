import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
};

export const counterSlice=createSlice({
    name:'COUNTEr',
    initialState,
    reducers:{//these below are the action creators functions
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incByValue:(state,action)=>{//state holds the urrent value of the variable.
            state.value+=action.payload;
        },
        DecByValue:(state,action)=>{//action has 2 properties...typeof and payload 
            state.value-=action.payload;
            console.log(state.value);
            console.log(action.type);
            console.log(state.value);
            console.log(counterSlice);//it is big object having many things...
            console.log(counterSlice.actions);//these are the fxn(action creators)names
            console.log(counterSlice.caseReducers);//these are the actul fxns...so we need to export them
            console.log(action.payload);
            console.log(counterSlice.getInitialState());//to get the inital state defined
        }
    }
});

//these 2 lines are must.
export const {increment,decrement,incByValue,DecByValue} = counterSlice.actions
export default counterSlice.reducer;//here only reduce"r" will work...nothing else

// Each function defined in the reducers argument will have a corresponding action creator generated using createAction and included in the result's actions field using the same function name.
// The generated reducer function is suitable for passing to the Redux combineReducers function as a "slice reducer".
// You may want to consider destructuring the action creators and exporting them individually, for ease of searching for references in a larger codebase.
// The functions passed to the reducers parameter can be accessed through the caseReducers return field. This can be particularly useful for testing or direct access to reducers created inline.
// Result's function getInitialState provides access to the initial state value given to the slice. If a lazy state initializer was provided, it will be called and a fresh value returned.

// - Steps on how to use REDUX in our App.

//  1. Create a Redux store with configureStore
        // 	configureStore accepts a reducer function as a named argument
        // 	configureStore automatically sets up the store with good default settings
//  2. Provide the Redux store to the React application components
        // 	Put a React-Redux <Provider> component around your <App />
        // 	Pass the Redux store as <Provider store={store}>
//  3. Create a Redux "slice" reducer with createSlice
        // 	Call createSlice with a string name, an initial state, and named reducer functions
        // 	Reducer functions may "mutate" the state using Immer Library
        // 	Export the generated slice reducer and action creators
//  4. Use the React-Redux useSelector/useDispatch hooks in React components
        // 	Read data from the store with the useSelector hook
        // 	Get the dispatch function with the useDispatch hook, and dispatch actions as needed
