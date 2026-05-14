import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

// contains the global state
const store = configureStore({
    reducer: rootReducer
})

export default store