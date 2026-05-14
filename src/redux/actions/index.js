export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"

export const addToFavouritesAction = (company) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: company,
  }
}

export const removeFromFavouritesAction = (company) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: company,
    }
}

export const getJobsAction = (company) => {
  return (dispatch, getState) => {
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Job Fetching Error")
        }
      })
      .then((data) => {
        dispatch({
          type: GET_JOBS,
          payload: data.data,
        })
      })
      .catch((error) => {
        console.log(error)

        dispatch({
          type: GET_JOBS_ERROR,
          payload: error,
        })
      })
  }
}
