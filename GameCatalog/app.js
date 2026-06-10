import { cardsMass } from "./data.js";
import { addGammes } from "./UI.js";
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
// addGammes(cardsMass[0])
// addGammes(cardsMass[1])