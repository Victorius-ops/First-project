
function Card({ title, price, rating, id }) {
  return (
    <div className="back">
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  )
}

export default Card