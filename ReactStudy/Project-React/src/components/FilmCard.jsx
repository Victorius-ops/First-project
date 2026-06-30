import { useState } from "react"
function FilmCard ({id, title, genre, price, rating}) {
    function showMore() {
    setShowInfo(!showInfo)
}
const [showInfo, setShowInfo] = useState(false)
const isHighRating = Number(rating) >= 8;
    return(
        <>
        <div className= {`FilmCard ${isHighRating ? 'high-rating' : ''}`} key={id}>
        {
          isHighRating && (
            <span className="star-badge" title="Высокий рейтинг">
              👑 ★ Популярное
            </span>
          )
        }
        <h4>Film : {title}</h4>
        <h4>Price: {price}</h4>
        {
        showInfo && (
          <div>
            <h4>Genre: {genre}</h4>
            <h4>Rating: {rating}</h4>
          </div> 
        )
        }
        <button className="Info" onClick={showMore}>Подробнее</button>
        </div>
        </>
    )
}
export default FilmCard