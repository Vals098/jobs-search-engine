import { GET_JOBS, GET_JOBS_ERROR } from "../actions"

// contains fetched jobs and errors
const initialState = {
  jobs: [],
  error: false,
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      }
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}

export default jobsReducer
