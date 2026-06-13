import { Game } from "./Game.js";
import { APIFetch } from "./storage.js";
import { API } from "./storage.js";
import { Outmass } from "./storage.js";
import { storage2} from "./storage.js";
import { render } from "./app.js";
import { ApiMass } from "./storage.js";
const url = `https://www.freetogame.com/api/games`
APIFetch.onclick = () => {
    APIFetch.textContent = `Идёт загрузка...`    
  try {
    main()
  } catch (error) {
    console.log("Error encountered. Stopping background loop:", error.message);
    APIFetch.textContent = `Ошибка при загрузке игр`
    setTimeout(() => {
    }, 5000)
  }
  render(ApiMass)
APIFetch.textContent = `Запрос к Api`
}
let Games = []
async function main(game) {
    let c = await loadGames()

    c.forEach((game) => {
        Games.push(game)
    })
    console.log(Games)
    storage2(Games)
    return
}
    async function loadGames() {
            const response = await fetch(url)
            let result = await response.json()
            return result}