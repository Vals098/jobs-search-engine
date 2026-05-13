// useSelector watches Redux and updates automatically
import { useSelector } from "react-redux"

const Favourites = function () {
  // favourites becomes the array "content[]"
  const favourites = useSelector((state) => state.favourites.content)

  console.log(favourites)

  return (
    <div>
      <h1>Favourites</h1>
    </div>
  )
}

export default Favourites
