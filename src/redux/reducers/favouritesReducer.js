import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions"

const initialState = {
  // where to save my favourite jobs
  favourites: {
    content: [],
  },
}

// function automatically initialized at the start and at every dispatch
const favouritesReducer = (state = initialState, action) => {
  // what tipe of action? Cases all in the switch
  switch (action.type) {
    //We need to return a new state, NOT MODIFY the previous one
    case ADD_TO_FAVOURITES:
      return {
        // copy all the previous state
        ...state,

        favourites: {
          // copy all the favourites
          ...state.favourites,
          // create a new array with old favourites and new
          content: [...state.favourites.content, action.payload],
        },
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,

          content: state.favourites.content.filter(
            // keep only the ones different from the action.payload, or, in other words, the one clicked
            (company) => company !== action.payload,
          ),
        },
      }
    default:
      return state
  }
}

export default favouritesReducer
