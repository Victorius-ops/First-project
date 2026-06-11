export function addGammes(item) {
    const area = document.querySelector(`.cardsArea`)
    const card = document.createElement(`div`)
    card.className = "card"
    card.innerHTML = `
    <h2>${item.title}</h2>
    <h2>${item.genre}</h2>
    <h2>${item.price}</h2>
    <h2>${item.platform}</h2>
    <h2>${item.rating}</h2>
    <h2>${item.description}</h2>
    ${item.isFavorite}
    <button>Добавить в избранное</button>
    <button>Удалить игру</button>
    `
    area.append(card)
    
}
export function deleteGames() {
    const card = document.querySelector(`.cardsArea`) 
    card.innerHTML = ``
}