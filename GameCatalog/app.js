import { cardsMass } from "./data.js";
import { addGammes } from "./UI.js";
import { storage } from "./storage.js";
import { Outmass } from "./storage.js";
import { deleteGames } from "./UI.js";
import { Restor } from "./storage.js";
import { area } from "./storage.js";
import { deleteAll } from "./storage.js";
// localStorage.setItem(`Mass`, JSON.stringify(cardsMass))
let state = `ALL`
export function render(Cards) {Cards.forEach(addGammes)}
render(Outmass)
deleteAll.addEventListener(`click`, () => {
    state = `ALLDelete`
    cardsMass.forEach(deleteGames)
})
Restor.addEventListener(`click`, () => {
    storage(cardsMass)
    state = `STDGames`
    area.innerHTML = ``
    render(cardsMass)
})
const form = document.querySelector(`.addGame`)
const targetObject  = Outmass.at(-1)
const message = document.querySelector(`.MSG`)
let i = targetObject.ID
console.log(i)
form.addEventListener(`submit`, (event) =>{
    i++ 
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
    Outmass.push({
        ID:i,
        title:name.value,
        genre:genre.value,
        price:price.value,
        platform:selectedOption.value,
        rating:rating.value,
        release_date:year.value,
        short_description:description.value,
        isFavorite:false
    })
    name.value = ``
    genre.value = ``
    price.value = ``
    rating.value = ``
    year.value = ``
    description.value = ``
    storage(Outmass)
    // const VisibleCards = JSON.parse(localStorage.getItem(`Mass`))
    render(Outmass)
    message.innerHTML = ` <h3> Игра добавлена</h3>`
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
      