// useSelector watches Redux and updates automatically
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Favourites = function () {
  // favourites becomes the array "content[]"
  const favourites = useSelector((state) => state.favourites.favourites.content)

  console.log(favourites)

  return (
    <div>
      <h1>Favourites</h1>

      {favourites.map((company, index) => (
        <div key={index}>
          {<Link to={`/${company}`}>{company}</Link>}
        </div>
      ))}
    </div>
  )
}

export default Favourites
