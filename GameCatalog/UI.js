export function addGammes(item) {
    const card = document.createElement(`div`)
    card.className = "card"
    card.dataset.category = `${item.genre}`
    card.innerHTML = `
    <h2>${item.title}</h2>
    <h2>${item.genre}</h2>
    <h2>${item.price}</h2>
    <h2>${item.platform}</h2>
    <h2>${item.release_date}</h2>
    <h2>${item.rating}</h2>
    <h2>${item.short_description}</h2>
    ${item.isFavorite}
    <button>Добавить в избранное</button>
    <button class="DeleteGame">Удалить игру</button>
    `
    area.append(card)
    
}
export function deleteGames() {
    const card = document.querySelector(`.cardsArea`) 
    card.innerHTML = ``
}
  function startClock() {
    function pad(n){ return n.toString().padStart(2, '0'); }
    let start = Date.now();
    setInterval(() => {
      const diff = Date.now() - start;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      Timer.textContent = `Вы просматриваете сайт ${pad(h)}:${pad(m)}:${pad(s)}`;
    }, 1000);
  }
  startClock()
  import { ApiMass } from "./storage.js"
  console.log(ApiMass)
import { Restor } from "./storage.js"
import { area } from "./storage.js"
import { Timer } from "./storage.js"
import { ActionBTN } from "./storage.js"
import { LiveSimBTN } from "./storage.js"
import { RaceBTN } from "./storage.js"
import { SurvivorBTN } from "./storage.js"
import { Outmass } from "./storage.js"
import { Card } from "./storage.js"
import { render } from "./app.js"
ActionBTN.addEventListener(`click`, () => {
    let NewMass = Outmass.filter(game => game.genre.includes(`Action`))
    ActionBTN.classList.toggle(`active`)
    if (ActionBTN.classList == `active`) {render(NewMass)
    } else {
        render(Outmass)
    }
    });
LiveSimBTN.addEventListener(`click`, () => {
    let NewMass = Outmass.filter(game => game.genre.includes(`LiveSim`))
        LiveSimBTN.classList.toggle(`active`)
    if (LiveSimBTN.classList == `active`) {render(NewMass)
    } else {
        render(Outmass)
    }
});
RaceBTN.addEventListener(`click`, () => {
    let NewMass = Outmass.filter(game => game.genre.includes(`Race`))
        RaceBTN.classList.toggle(`active`)
    if (RaceBTN.classList == `active`) {render(NewMass)
    } else {
        render(Outmass)
    }
});
SurvivorBTN.addEventListener(`click`, () => {
    let NewMass = Outmass.filter(game => game.genre.includes(`Survivor`))
        SurvivorBTN.classList.toggle(`active`)
    if (SurvivorBTN.classList == `active`) {render(NewMass)
    } else {
        render(Outmass)
    }
});