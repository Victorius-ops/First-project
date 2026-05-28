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
// console.log(all)
// games.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Game`) {
//             elemets.classList.add(`hidden`)
//         }
//         if (games.classList == `active`) {
//                 films.classList.remove(`active`)
//                 musics.classList.remove(`active`)
//             }
//         games.classList.add(`active`)
//     })
// })
// films.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Film`) {
//             elemets.classList.add(`hidden`)
//             if (films.classList == `active`) {
//                 games.classList.remove(`active`)
//                 musics.classList.remove(`active`)
//             }
//         }
//         films.classList.add(`active`)
//     })
// })
// musics.addEventListener(`click`, () => {
//     card.forEach((elemets) => {
//         elemets.classList.remove(`hidden`)
//         if(elemets.dataset.category != `Song`) {
//             elemets.classList.add(`hidden`)
//         }
//         if (musics.classList == `active`) {
//                 games.classList.remove(`active`)
//                 films.classList.remove(`active`)
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
key.addEventListener(`click`, () => {
    cards.forEach((card) => {
        card.classList.remove(`hidden`)
        if (card.dataset.category != `keyboard`) {
            card.classList.add(`hidden`)
        }
    })
})
mouse.addEventListener(`click`, () => {
    cards.forEach((card) => {
        card.classList.remove(`hidden`)
        if (card.dataset.category != `mouse`) {
            card.classList.add(`hidden`)
        }
    })
})
mon.addEventListener(`click`, () => {
    cards.forEach((card) => {
        card.classList.remove(`hidden`)
        if (card.dataset.category != `monitor`) {
            card.classList.add(`hidden`)
        }
    })
})
price.addEventListener(`click`, () => {
    cards.forEach((card) => {
        card.classList.remove(`hidden`)
        if (card.dataset.price >= 5000) {
            card.classList.add(`hidden`)
        }
    })
})