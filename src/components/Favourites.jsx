// useSelector watches Redux and updates automatically
import { useSelector, useDispatch } from "react-redux"
import { removeFromFavouritesAction } from "../redux/actions"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const Favourites = function () {
  // favourites becomes the array "content[]"
  const favourites = useSelector((state) => state.favourites.favourites.content)

  const dispatch = useDispatch()

  console.log(favourites)

  return (
    <div>
      <h1>Favourites</h1>

      {favourites.map((company, index) => (
        <div key={index}>
          {<Link to={`/${company}`}>{company}</Link>}
          <Button
          variant="danger"
          size="sm"
            onClick={() => {
              dispatch(removeFromFavouritesAction(company))
            }}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Favourites
