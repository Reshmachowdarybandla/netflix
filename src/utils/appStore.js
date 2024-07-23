import { configureStore } from "@reduxjs/toolkit";
import userRedcucer from "./userSlice"
import moviesReducer from "./moviesSlice"
const appStore = configureStore(
    {
        reducer:{
            user: userRedcucer,
            movies: moviesReducer
        },
    }
)

export default appStore;