import { cardsMass } from "./data.js";
import { addGammes } from "./UI.js";
import { save } from "./storage.js";
let area = document.querySelector(`.cardsArea`)
function render() {cardsMass.forEach(addGammes)}
render()
let state = `ALL`
import { deleteGames } from "./UI.js";
let deleteAll = document.querySelector(`.DelAll`)
deleteAll.addEventListener(`click`, () => {
    state = `ALLDelete`
    cardsMass.forEach(deleteGames)
})
let Restor = document.querySelector(`.RestoreSTD`)
Restor.addEventListener(`click`, () => {
    state = `STDGames`
    area.innerHTML = ``
    render()
})
const form = document.querySelector(`.addGame`)
let i = 3
form.addEventListener(`submit`, (event) =>{
    area.innerHTML = ``
    event.preventDefault()
    const name = form.elements.name.value
    const genre = form.elements.genre.value
    const price = form.elements.price.value
    const platmorm = form.elements.Ptatforms
    const selectedOption = platmorm.options[platmorm.selectedIndex];
    const rating = form.elements.rating.value
    const year = form.elements.year.value
    const description = form.elements.description.value
    i++ 
    cardsMass.push({
        ID:i,
        title:name,
        genre:genre,
        price:price,
        platform:selectedOption.value,
        rating:rating,
        year:year,
        description:description,
        isFavorite:false
    })
    save
    render(cardsMass)
})