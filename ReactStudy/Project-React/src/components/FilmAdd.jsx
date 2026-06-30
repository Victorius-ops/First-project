import { useState } from "react"

function FilmAdd () {

    const [searchFilm, setSearchFilm] = useState("")
    const [price, setPrice] = useState("")
    const [genre, setGenre] = useState("")

    const [films, setFilms] = useState([
        { id: 1, title: "Intersteller", genre: "Fantasy", price: 1200 },
        { id: 2, title: "Zoom", genre: "Comedy", price: 1333 }
    ])

    function handleSubmit(event) {
        event.preventDefault()
        let lastIndex = films.at(-1).id + 1
        if (searchFilm.trim() == "") {
            alert("Введите название")
            return
        }
        if (genre.trim() == "") {
            alert("Введите жанр")
            return
        }
        if (price.trim() == "" || Number(price) < 0) {
            alert("Введите цену")
            return
        }
        setFilms([...films, { 
                                id: lastIndex, 
                                title: searchFilm, 
                                genre: genre, 
                                price: price 
                            }
                        ]
                    )                   
    }
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Введите название фильма" 
                    value={searchFilm}
                    onChange={(event) => setSearchFilm(event.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Введите цену" 
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Введите жанр" 
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                />
                <button>Добавить</button>
            </form>
            <div> 
                Фильмы: {
                films.map(film => (
                    <div key={film.id}>
                        <h2>{film.title}</h2>
                        <p>Жанр: {film.genre}</p>
                        <p>Цена: {film.price}</p>
                    </div>
                ))
                }
            </div>
            <p>Ты ввёл: {searchFilm}</p>
        </>
    )
}
export default FilmAdd