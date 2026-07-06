import { useState, useEffect } from "react"
import FilmCard from "../components/FilmCard"
import FilmForm from "../components/FilmForm"
import { data, Link } from "react-router-dom"
import FilmSearch from "../components/FilmSearch"
import axios from "axios"

function Home() {
      // const films = [
  //   {
  //   id: 1,
  //   title: "Interstellar",
  //   year: 2014,
  //   genre: "Sci-Fi",
  //   rating: 8.7,
  //   imageUrl: `https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/220x330`,
  //   }, 
  //     {
  //     id: 2,
  //     title: "1+1",
  //     year: 2014,
  //     genre: "Comedy",
  //     rating: 8.7,
  //     imageUrl: undefined
  //     }, 
  //     {
  //       id: 3,
  //     title: "Interstellar",
  //     year: 2014,
  //     genre: "Sci-Fi",
  //     rating: 8.7,
  //     imageUrl:undefined
  //     },
  //     {
  //       id: 4,
  //     title: "Interstellar",
  //     year: 2014,
  //     genre: "Sci-Fi",
  //     rating: 8.7,
  //     imageUrl: undefined
  //     }, 
  //     {
  //       id: 5,
  //     title: "Interstellar",
  //     year: 2014,
  //     genre: "Sci-Fi",
  //     rating: 8.7,
  //     imageUrl: undefined
  //     },
  //     {
  //       id: 6,
  //     title: "Interstellar",
  //     year: 2014,
  //     genre: "Sci-Fi",
  //     rating: 8.7,
  //     imageUrl: undefined
  //     }
  //   ]

  // const [searchFilm, setSearchFilm] = useState("")
  // const [price, setPrice] = useState("")
  // const [genre, setGenre] = useState("")
  // const [rating, setRating] = useState("")
  
  const [users, setUsers] = useState([])
  const [isLoad, setIsLoad] = useState(true)
  const [error, setError] = useState("")
  
  useEffect(() => {
      // fetch("https://jsonplaceholder.typicode.com/users")
      //   .then(response => response.json())
      //   .then(data => setUsers(data))
      async function loadUsers() {
        try {
        const  response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        setIsLoad(false) 
        console.log(users)
        } catch (error) {
          setError("Не удалось загрузить пользователей")
        } finally {
          setIsLoad(false)
        }
      }
      loadUsers()
  }, [])
  

const [films, setFilms] = useState([
    { id: 1, title: "Intersteller", genre: "Fantasy", price: 1200, rating: 8 },
    { id: 2, title: "Zoom", genre: "Comedy", price: 1333, rating: 6 }
])
const genres = [...new Set(films.map(film => film.genre))]

const count = films.length

const [activeGenre, setActiveGenre] = useState("all")
const [searchQuery, setSearchQuery] = useState("");
    const filteredFilms = films.filter(film => {
        const query = searchQuery.toLowerCase();
        const matchesTitle = film.title?.toLowerCase().includes(query);
        let matchesGenre = false 
        
        if (activeGenre === "all" || film.genre == activeGenre) {
          matchesGenre = true
        }
    
        return matchesTitle && matchesGenre;
    })


// function addMovie(newFilm) {
//   event.preventDefault()
//   let lastIndex = films.at(-1).id + 1
//   setFilms([...films, {
//                         id: lastIndex, 
//                         title: searchFilm, 
//                         genre: genre, 
//                         price: price, 
//                         rating: rating,
//   }])
// }
  function addFilm(newFilm){
    setFilms([...films, newFilm]);
  };

    return (
        <>
          { isLoad ? (
            <h3>Идёт загрузка...</h3>
          ) : (
          users.map(user => (
              <p key={user.id}>{user.name}</p>
            ))
          )
          }
          {error.length > 1 && (
            <div>
              {error}
            </div>
          )}

       <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
          <FilmSearch value={searchQuery} 
             UserInput={setSearchQuery}/>
             <button onClick={() => setActiveGenre(`all`)}>Все</button>
             <button onClick={() => setActiveGenre(`Fantasy`)}>Fantasy</button>
             <button onClick={() => setActiveGenre(`Comedy`)}>Comedy</button>
      <div className='FilmMain'> 
      {filteredFilms.length === 0 ? (
        <div className="no-results">
          <p>Фильмы не найдены</p>
        </div>
      ) : (
    filteredFilms.map(film => {
      return (
        <div key={film.id}>
          <FilmCard
            title={film.title}
            genre={film.genre}
            price={film.price}
            rating={film.rating}
          />
        </div>
      );
    })
  )}
      </div>
              {
                // films.map(film => {
                //   return(
                //     <div key={film.id}>
                //       <FilmCard
                //       title={film.title}
                //       genre={film.genre}
                //       price={film.price}
                //       rating={film.rating}
                //       />
                //     </div>
                //   )
                // })
              }
            <h2>Всего фильмов в каталоге: {count}</h2>
            <div>
              <FilmForm onAddFilm={addFilm} films={films} />
            </div>
        </>
    )
}
export default Home