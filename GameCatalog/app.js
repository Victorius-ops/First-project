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
    event.preventDefault()
    const name = form.elements.name
    const genre = form.elements.genre
    const price = form.elements.price
    const platmorm = form.elements.Ptatforms
    const selectedOption = platmorm.options[platmorm.selectedIndex];
    const rating = form.elements.rating
    const year = form.elements.year
    const description = form.elements.description
    if(name == `` || genre == `` || price == `` || rating == `` || year == `` || description == ``) {
        console.log(`Проверьте заполнененные данные`)
        return
    } else {
    area.innerHTML = ``
    i++ 
    cardsMass.push({
        ID:i,
        title:name.value,
        genre:genre.value,
        price:price.value,
        platform:selectedOption.value,
        rating:rating.value,
        year:year.value,
        description:description.value,
        isFavorite:false
    })
    name.value = ``
    genre.value = ``
    price.value = ``
    rating.value = ``
    year.value = ``
    description.value = ``
    save
    render(cardsMass)}
})