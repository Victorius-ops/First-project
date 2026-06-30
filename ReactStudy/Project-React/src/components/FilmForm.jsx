import { useState } from "react"
function FilmForm({onAddFilm, films}) {
    //     function handleSubmit(event) {
    //     event.preventDefault()
    //     let lastIndex = films.at(-1).id + 1
    //     if (searchFilm.trim() == "") {
    //         alert("Введите название")
    //         return
    //     }
    //     if (genre.trim() == "") {
    //         alert("Введите жанр")
    //         return
    //     }
    //     if (price.trim() == "" || Number(price) < 0) {
    //         alert("Введите цену")
    //         return
    //     }
    //     onAddFilm(newFilm)
              
    // }
const [searchFilm, setSearchFilm] = useState("")
const [price, setPrice] = useState("")
const [genre, setGenre] = useState("")
const [rating, setRating] = useState("")

    function handleSubmit(event){
    event.preventDefault();
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
        if(rating.trim() == "" || Number(rating) < 0 || Number(rating) > 10){
            alert(`Оценка не может быть меньше 0 или больше 10`)
            return
        }
     const maxId = films.length > 0 
      ? Math.max(...films.map(f => f.id)) 
      : 0;

    const newFilmObject = {
      id: maxId + 1,
      title: searchFilm,
      price: price,
      genre: genre,
      rating: rating
    };

    onAddFilm(newFilmObject);
    // onAddFilm(searchFilm, price, genre, rating); // 3. Invoke the parent function here!
    setSearchFilm("")
    setPrice("")
    setGenre("")
    setRating("")
  };
    return(
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
                    type="number" 
                    placeholder="Введите оценку" 
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Введите жанр" 
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>
        )
}
export default FilmForm