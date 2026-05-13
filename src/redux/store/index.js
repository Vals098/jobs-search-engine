import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

// contains the global state
const store = configureStore({
    reducer: mainReducer
})

export default store