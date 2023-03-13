import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice';

export const store=configureStore({
    reducer:{
        counterok:counterSlice//the counter is any random name...counterSlice is the functionality file which helps in changing the value of state.
    }
});
