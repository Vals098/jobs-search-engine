const initialState = {
  // where to save my favourite jobs
  favourites: {
    content: [],
  },
}

// function automatically initialized at the start and at every dispatch
const mainReducer = (state = initialState, action) => {
  // what tipe of action? Cases all in the switch
  switch (action.type) {
    //We need to return a new state, NOT MODIFY the previous one
    case "ADD_TO_FAVOURITES":
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
    default:
      return state
  }
}

export default mainReducer
