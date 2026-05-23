// let a = document.querySelector(`p`)
// let b = document.querySelector(`button`)

// let c = document.querySelectorAll(`p`)

// for (let item of c) {
//     let isActive = item.classList.contains("active")
//     console.log(isActive)
//     // item.classList.remove("test")
// }

// b.onclick = function() {
//     for (let item of c) {
//         item.classList.toggle("active")
//         // item.classList.remove("test")
//     }
//     a.textContent = `Hello world!`
// }


// let user = {
//     name: "Name",
//     age: 25,
//     city: "Baku"
// }

// for (let key in user) {
//     console.log(user[key])
// }


// let btn = document.querySelector(`.test`)

// a.onclick = function() {
//     a.textContent = `Светлая тема`
//     a.classList.toggle(`black`)
// }

// a.onclick = function() {
//     a.textContent = `Светлая тема`
//     a.classList.toggle(`black`)
// }

// btn.addEventListener("click", function() {
//     console.log("Нажато!")
// })

// btn.addEventListener("mouseover", function() {
//     console.log("Навели мышь!")
// })

// btn.addEventListener("mouseout", function() {
//     console.log("Убрали мышь!")
// })

// input.addEventListener("keydown", function() {
//     console.log("Нажатие клавиши!")
// })

// let newDiv = document.createElement("div")
// newDiv.textContent = "Я новая карточка!"
// newDiv.classList.add("active")
// document.body.append(newDiv)

// let item = document.querySelector("#test")
// item.append(newDiv)

let games = [
    { name: "Minecraft", rating: 10 },
    { name: "Roblox",    rating: 8  },
    { name: "CS2",       rating: 9  }
]

let container = document.querySelector("#test")

for (let game of games) {
    let card = document.createElement("div")
    let p = document.createElement("p")
    card.classList.add("game-card")
    p.textContent = game.name
    card.append(p)
    container.append(card)
}