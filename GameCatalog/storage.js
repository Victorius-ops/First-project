import { cardsMass } from "./data.js";
export  function storage (Mass) {
    localStorage.setItem(`Mass`, JSON.stringify(Mass))
}
export function storage2 (Mass) {
    localStorage.setItem(`ApiMass`, JSON.stringify(Mass))
}
export let Outmass = JSON.parse(localStorage.getItem(`Mass`))
export let ApiMass = JSON.parse(localStorage.getItem(`ApiMass`))
export let API = document.querySelector(`.API`)
export let APIFetch = document.querySelector(`.fetch`)
export let Timer = document.querySelector(`.Timer`)
export const Restor = document.querySelector(`.RestoreSTD`)
export const area = document.querySelector(`.cardsArea`)
export const deleteAll = document.querySelector(`.DelAll`)
