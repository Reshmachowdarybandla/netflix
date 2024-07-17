import { configureStore } from "@reduxjs/toolkit";
import userRedcucer from "./userSlice"

const appStore = configureStore(
    {
        reducer:{
            user: userRedcucer,
        }
    }
)

export default appStore;