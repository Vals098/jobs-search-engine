import { combineReducers } from "@reduxjs/toolkit";

import favouritesReducer from "./favouritesReducer";
import jobsReducer from "./jobsReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
})

export default rootReducer