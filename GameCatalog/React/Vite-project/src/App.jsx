import "./App.css"
import Card from './Card.jsx'

function App() {
  console.log(`1,2,3`)
  const games = [
    {
      id: 1,
      title: "Terraria",
      price: 1200,
      rating: 4.9
    },
    {
      id: 2,
      title: "Terraria1",
      price: 1200,
      rating: 4.9
    },
    {
      id: 3,
      title: "Terraria2",
      price: 1200,
      rating: 4.9
    },
    {
      id: 4,
      title: "Terraria3",
      price: 1200,
      rating: 4.9
    },
    {
      id: 5,
      title: "Terraria4",
      price: 1200,
      rating: 4.9
    },
  ]
  return (
    <>
      <p className="Count">1,2,3</p> 
      {
        games.map(value => {
          return (
            <Card 
              key={value.id}
              title = {value.title}
              price = {value.price}
              rating = {value.rating}
              id = {value.id}
            />
          )
        })
      }
    </>
  )
}

export default App
