import { useState } from "react"

function Film ( {id, title, year, genre, rating, imageUrl} ) {

    const [count, setCount] = useState(0)
    // const [likes, setLikes] = useState(0)
    const [isOpen, setIsOpen] = useState(true)
    const [status, setStatus] = useState("offline")

    function decrease() {
        if (count <= 0) {
            setCount(0)
            return
        } else{setCount(count - 1)}
    }

    function changeStatus() {
        if (status == "offline") {
            setStatus("online")
        } else {
            setStatus("offline")
        }
    }

    return(
        <>
            <div className="FilmCard">
                {
                    isOpen && (
                        <>
                            <h1>Статус: {status}</h1>
                            <p>Film : {title}</p>
                            <p>Rating: {rating}</p>
                            <p>Releas Date: {year}</p>
                            <span className="Cover"><img src={imageUrl} alt="Описание картинки" /></span>
                            <p>Genre: {genre}</p>
                            <h1>{count}</h1>
                        </>
                    )
                }
                <button onClick={() => setIsOpen(!isOpen)}>Change Visible</button>
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={decrease}>-1</button>
                <button onClick={changeStatus}>Сменить статус</button>
            </div>
        </>
    )
}
export default Film