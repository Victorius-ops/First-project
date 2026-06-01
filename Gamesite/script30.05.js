// let games = [1, 2, 3, 4, 5, 6, 7, 8]

// games.forEach(function(game) {
//     console.log(game)
// })


// const cards = document.querySelectorAll(".card")

// // cards.forEach(function(card) {
// //     console.log(`Карточка: ${card.textContent}`)
// // })
// cards.forEach(function(x) {
//     x.classList.add(`Test`)
// })
// console.log(cards)

// const prices = [100, 200, 300]

// const newPrices = prices.map(function(price) {
//     return price * 2
// })

// console.log(prices)
// console.log(newPrices)



// const test = function() {
//     console.log("Работает")
// }



// const test = () => {

// }


// let a = [1,2,3]

// a.forEach((number) => {
//     console.log(number)
// })


// name()

// function name() {
//     console.log("Работает")
// }


// let a = document.querySelectorAll(`.card`)
// const btn = document.querySelector("#button")
// function categorys(text){
//    let cards = document.querySelectorAll(`.card`)
//    cards.forEach((card) => {
//     if (text == `all`) {
//         card.classList.remove(`hidden`)
//     } else if (card.dataset.category == text) {
//         card.classList.remove(`hidden`)
//     } else {
//         card.classList.add(`hidden`)
//     }
//    })
// }

// categorys("all")
// categorys("movie")
// categorys("game")

// btn.addEventListener(`click`, () => {
//    a.forEach((category) => {
//     console.log(category.dataset)
//     console.log(category.dataset.category)
//     if (category.dataset.category == "game") {
//         category.classList.add("hidden")
//     }
// })
// })

// a.forEach((category) => {
//     console.log(category.dataset)
//     console.log(category.dataset.category)
//     if (category.dataset.category == "game") {
//         category.classList.add("hidden")
//     }
// })
// Задание 1
// let cards = document.querySelectorAll(`.card`)
// cards.forEach((cardsmeaning) => {
//     console.log(`Карточка: ${cardsmeaning.textContent}`)
// })
// Задание 2
// let cards = document.querySelectorAll(`.card`)
// cards.forEach((cardsmeaning) => {
//     console.log(`Карточка: ${cardsmeaning.textContent} из категории ${cardsmeaning.dataset.category}`)
// })
// Задание 3 
// let a = document.querySelectorAll(`.card`)
// let hide = document.querySelector(`#HideGames`)
// let show = document.querySelector(`#ShowAll`)
// hide.addEventListener(`click`, () => {
//     a.forEach((elemets) => {
//         if(elemets.dataset.category == `Game`) {
//         elemets.classList.add(`hidden`)
//        }
//     })
// })
// show.addEventListener(`click`, () => {
//     a.forEach((elemets) => {
//         if(elemets.classList == `card hidden`) {
//             elemets.classList.remove(`hidden`)
//         }
//     })
// })
// Задание 4 
// let card = document.querySelectorAll(`.card`)
// let all = document.querySelector(`#All`)
// let games = document.querySelector(`#Games`)
// let films = document.querySelector(`#Films`)
// let musics = document.querySelector(`#Musics`)
// console.log(all)
// games.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Game`) {
//             elemets.classList.add(`hidden`)
//         }
//     })
// })
// films.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Film`) {
//             elemets.classList.add(`hidden`)
//         }
//     })
// })
// musics.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Song`) {
//             elemets.classList.add(`hidden`)
//         }
//     })
// })
// all.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         if(elemets.classList == `card hidden`) {
//             elemets.classList.remove(`hidden`)
//         }
//     })
// })

// Задание 5 
// let card = document.querySelectorAll(`.card`)
// let all = document.querySelector(`#All`)
// let games = document.querySelector(`#Games`)
// let films = document.querySelector(`#Films`)
// let musics = document.querySelector(`#Musics`)
// let btns = document.querySelectorAll(`button`)
// console.log(all)
// games.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Game`) {
//             elemets.classList.add(`hidden`)
//         }
//         if (games.classList == `active`) {
//                 // films.classList.remove(`active`)
//                 // musics.classList.remove(`active`)
//                 btns.forEach((style) => {
//                 style.classList.remove(`active`)
//                 })
//             }
//         games.classList.add(`active`)
//     })
// })
// films.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Film`) {
//             elemets.classList.add(`hidden`)
//         }
//             if (films.classList == `active`) {
//                 // games.classList.remove(`active`)
//                 // musics.classList.remove(`active`)
//                 btns.forEach((style) => {
//                     style.classList.remove(`active`)
//                 })
//             }
//         films.classList.add(`active`)
//     })
// })
// musics.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Song`) {
//             elemets.classList.add(`hidden`)
//         }
//             if (musics.classList == `active`) {
//                 // games.classList.remove(`active`)
//                 // films.classList.remove(`active`)
//               btns.forEach((style) => {
//                 style.classList.remove(`active`)
//                 })
//             }
//         musics.classList.add(`active`)
//     })
// })
// all.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         if(elemets.classList == `card hidden`) {
//             elemets.classList.remove(`hidden`)
//         }
//         games.classList.remove(`active`)
//         films.classList.remove(`active`)
//         musics.classList.remove(`active`)
//     })
// })
// Задание 6
let cards = document.querySelectorAll(`.card`)
let key = document.querySelector(`#keyboards`)
let mouse = document.querySelector(`#mouses`)
let mon = document.querySelector(`#monitors`)
let price = document.querySelector(`#lowprice`)
let currentCategory = `all`

// function filterCategory(category) {
//     currentCategory = category
//     cards.forEach((card) => {
//         card.classList.remove(`hidden`)
//         if (card.dataset.category != category) {
//             card.classList.add(`hidden`)
//         }
//     })
// }

let items = [
{
    name: `Клавиатура Razer BlackWidow V3 Pro`,
    category: `keyboard`,
    price: 3000
},
{
    name: `Мышь Logitech G Pro X Superlight`,
    category: `mouse`,
    price: 4000
},
{
    name: `Монитор ASUS ROG Swift PG259QN`,
    category: `monitor`,
    price: 6000
},
{
    name: `Клавиатура HyperX Alloy Origins 60`,
    category: `keyboard`,
    price: 6000
},
{
    name: `Мышь Razer DeathAdder V2 Pro`,
    category: `mouse`,
    price: 6000
}]

function createCard(item) {
    const card = document.createElement(`div`)
    card.className = "card"
    card.dataset.category = item.category
    card.innerHTML = `
        <h3>${item.name}</h3>
        <span>${item.price}</span>
    `
    return card
}

function render() {
    catalog.innerHTML = ''

    const filteredItems = items.filter((item) => {
        return currentCategory == "all" || item.category == currentCategory
    })

    filteredItems.forEach((item) => {
        catalog.append(createCard(item))
    })
}

render()

key.addEventListener(`click`, () => {
    // filterCategory(`keyboard`)
    currentCategory = `keyboard`
    render()
})
mouse.addEventListener(`click`, () => {
    // filterCategory(`mouse`)
    currentCategory = `mouse`
    render()
})
mon.addEventListener(`click`, () => {
    // filterCategory(`monitor`)
    currentCategory = `monitor`
    render()
})
price.addEventListener(`click`, () => {
    cards.forEach((card) => {
        card.classList.remove(`hidden`)
        if (card.dataset.price >= 5000) {
            card.classList.add(`hidden`)
        }
    })
})

const form = document.querySelector(`#formItems`)

form.addEventListener('submit', (event) => {
    // console.log(event)
    // console.log(event.target)
    event.preventDefault()
    const search = form.elements.search.value
    const category = form.elements.category.value
    const price = form.elements.price.value


    if (search.trim() == "") {
        alert("Введите название товара")
        return
    }

    if (Number(price) <= 0) {
        alert("Введите корректную цену")
        return
    }

    console.log(search, category, price)
})

// State - Состояние сайта
// Рендер функция
// 1. Очищает конейтер, чтобы старые карточки не дублировались
// 2. Проходит по массиву данных 
// 3. Проверяет, подходит ли карточка под текущий фильтр
// 4. Создаёт DOM-карточку 
// 5. Добавляет карточку в контейнер
// 
