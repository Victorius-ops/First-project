import { cardsMass } from "./data.js";
import { addGammes } from "./UI.js";
import { storage } from "./storage.js";
let area = document.querySelector(`.cardsArea`)
const ALLCARDS = cardsMass
console.log(ALLCARDS)
const VisibleCards = JSON.parse(localStorage.getItem(`Mass`))
console.log(VisibleCards)
function render(Cards) {Cards.forEach(addGammes)}
render(VisibleCards)
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
    render(cardsMass)
})
const form = document.querySelector(`.addGame`)
const targetObject  = VisibleCards.at(-1)
const message = document.querySelector(`.MSG`)
let i = targetObject.ID
console.log(i)
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
    if(name.value == `` || genre.value == `` || price.value == `` || price.value < 0|| rating.value == `` || rating.value < 0 || rating.value > 10  || year.value == `` || year.value < 1980 || description.value == ``) {
        console.log(`Проверьте заполнененные данные`)
        return
    } else {
    area.innerHTML = ``
    i++ 
    ALLCARDS.push({
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
    storage(ALLCARDS)
    render(VisibleCards)
    message.innerHTML = `Игра добавлена`
    setTimeout(() => {
        message.innerHTML = ``
    }, 5000)
    }
})
    let AllBTNDEL = document.querySelectorAll(`.DeleteGame`)
    AllBTNDEL.forEach (BTNDEL => {
        BTNDEL.addEventListener(`click`, () => {
            area.innerHTML = ``
            // render(VisibleCards)
        })
    })
      