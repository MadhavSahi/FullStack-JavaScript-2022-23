import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice';
// import counterReducer from '../features/counterSlice';

export const store=configureStore({
    reducer:{
        counterok:counterSlice//the counterok is any random name...counterSlice is the functionality file which helps in changing the value of state...we can change this name at import..like below
        
        // counterok:counterReducer
    }
});
