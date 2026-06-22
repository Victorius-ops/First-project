import './App.css'
import Film from './Film.jsx'
import Pet from './Pet.jsx'
function App() {
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
  return (
    <>
    {/* <div className='FilmMain'>
    {
      films.map(Each => {
        return (
        <h3 key={Each.id}>
            <Film 
              title={Each.title}
              rating={Each.rating}
              genre={Each.genre}
              year={Each.year}
              imageUrl={Each.imageUrl}
            />
        </h3>
        )
      })
    }
    </div> */}
    <Pet/>
    </>
  )
}

export default App
