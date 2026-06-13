import { Game } from "./Game.js";
import { APIFetch } from "./storage.js";
import { API } from "./storage.js";
import { Outmass } from "./storage.js";
import { storage2} from "./storage.js";
import { render } from "./app.js";
import { ApiMass } from "./storage.js";
import { rates } from "./storage.js";
import { reload } from "./storage.js";
import { reloadExternal } from "./storage.js";
import { Card } from "./storage.js";
const url = `https://www.freetogame.com/api/games`
APIFetch.onclick = () => {
    APIFetch.textContent = `Идёт загрузка...`    
  try {
    main()
  } catch (error) {
    console.log("Error encountered. Stopping background loop:", error.message);
    APIFetch.textContent = `Ошибка при загрузке игр`
    setTimeout(() => {
        Card.forEach((card) => {
            card.classList.add(`APICard`)
        })
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
reload.textContent = ``
async function loadExternalInfo() {
    reloadExternal.textContent = 'Загрузка информации…';
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
      if (!resp.ok) throw new Error('Ошибка сети');
      const data = await resp.json();
      const snippets = data.slice(0, 3).map(d => `"${d.name}": ${d.body}`).join('\n\n');
      reload.textContent = snippets;
    } catch (e) {
      reload.textContent = 'Не удалось загрузить данные: ' + e.message;
    }
    reloadExternal.textContent = `Обновить`
  }

  reloadExternal.addEventListener('click', () => loadExternalInfo());