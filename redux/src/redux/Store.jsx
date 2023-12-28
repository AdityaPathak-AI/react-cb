import { configureStore } from "@reduxjs/toolkit";
import stdReducer from './Slice'

const store = configureStore(
    {
        reducer : {
            stud:stdReducer
        }
    }
)
export default store;