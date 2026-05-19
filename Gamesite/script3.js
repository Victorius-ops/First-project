// function a(text) {
//     console.log(text)
// }
// a(`text`)


// function mathSumm(a, b) {
//     console.log(a + b)
// }

// let result = mathSumm(2, 5)
// console.log(result)


// function sum(a, b) { 
//     let message = prompt("Сколько тебе лет?")
    
// }

// let result2 = sum()
// console.log(result2)

// function isEven(number) {
//     return number % 2 == 0
// }

// console.log(isEven(4))
// console.log(isEven(7))

// let game1 = "Minecraft"
// let game2 = "Roblox"
// let game3 = "Battlefield 6"
// let game4 = "Skyrim"

// let games = ["Minecraft", "Roblox", "Battlefield", "Skyrim"]
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9000]

// games[1] = "Terraria"
// console.log(games)
// console.log(games[-1])

// console.log(games.length)
// for (let i = 0; i < games.length; i++) {
//     console.log(games[i])
// }

// console.log(games[games.length - 1])

// function printArray(items) {
//     for (let i = 0; i < items.length; i++) {
//         console.log(items[i])
//     }
// }


// let animals = ["Кот", "Собака", "Тигр"]
// printArray(animals)

// Улучшить функцию так, чтобы она определяла самое большее значение (по длинне символов в о) в массиве и возвращало его

// function printGames (games) {
//     let i = 0
//     while (i < games.length) {
//       console.log(games[i])
//       i++
//     }
// }

// Задание 1

// let game = ["Minecraft", "Roblox", "Battlefield", "Skyrim"]
// printGames(game)
// console.log(game[0])
// console.log(game[2])
// console.log(game[game.length - 1])

// Задание 2

// let games = ["Minecraft", "Roblox", "CS2"]
// console.log(games[0])
// console.log(games[games.length - 1])
// for (let i = 0; i < games.length; i++) {
//   console.log(games[i])
// }

// Задание 3

// let names = ["Кристина","Егор","Елена", "Игорь"]
// console.log(names)
// names[1] = "Виктор"
// names[names.length - 1] = "Максим"
// console.log(names)

// Задание 4

// let movies = ["Интерстеллар", "Аватар", "Шрек", "Безумный Макс", "Эквилибриум"]
// for (i = 0; i < movies.length; i++) {
//     console.log(`Фильм ${i + 1} : ${movies[i]}`)
// }

// Задание 5

// let scores = [5, 2, 4, 1, 3]
// sum = 0 

// for (i = 0; i < scores.length; i++) {
//    sum += scores[i]
// }
// console.log(sum)

// Задание 6

// let scores = [5, 2, 4, 1, 3]
// let sum = 0
// for (i = 0; i < scores.length; i++) {
//    sum += scores[i]/scores.length
// }
// console.log(sum)

// Задание 7

// let animals = ["Кот", "Собака", "Черепаха", "Воробей", "Конь"]
// function printArray(items) {
//     let arr = items
//     let i = 0
//     while (i < arr.length) {
//         console.log(arr[i])
//         i++
//     }
// }
// printArray(animals)

// Задание 8

// let arr = [1, 9, 3, 2, 15, 76]
// function getSum(numbers) {
//     let sum = 0
//     for (i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//     }
//     console.log(sum)
// }
// getSum(arr)

// Задание 9 (Главное задание)

// let favoriteGames = ["Minecraft", "Roblox", "CS2", "Witcher", "Skyrim"]
// console.log(favoriteGames.length)
// console.log(favoriteGames[0])
// console.log(favoriteGames[favoriteGames.length - 1])
// for (i = 0; i < favoriteGames.length; i++) {
//     console.log(`${i + 1}. ${favoriteGames[i]}`)
// }
// favoriteGames[1] = "Blacksad - Under the skin"
// console.log(favoriteGames)
// function printGames(games) {
//     for (i = 0; i < favoriteGames.length; i++) {
//     console.log(`${i + 1}. ${favoriteGames[i]}`)
//     } 
// }
// printGames(favoriteGames)

// // Задание 10 (Доп)

// let grade = [1, 2, 3, 4, 5]
// let quality = [180, 12, 56, 53, 91]
// function averageScore(scores) {
//     let sum = 0
//     for (i = 0; i < scores.length; i++) {
//     sum += scores[i]
//     }
//     console.log(`Сумма оценок: ${sum}`)
//     console.log(`Средняя оценка: ${sum/scores.length}`)
    
// }
// averageScore(grade)
// averageScore(quality)

// let playerName = "Alex"
// let playerHp = 100
// let playerLevel = 5
// let playerCoins = 50



// let player = {
//     nickName: "Alex",
//     hp: 100,
//     level: 5,
//     coins: 50
// }
// console.log(player.nickName)

// let alex_array = ["Alex", 100, 5, 50]
// let alex_array_obj = {
//     "0": "Alex",
//     "1": 100,
//     "2": 5,
//     "3": 50
// }

// player.hp
// player["hp"]

// console.log(`Test: ${player["hp"]}`)
// console.log(`NickName: ${alex_array[0]}`)

// const pet = {
//     name: `Alice`,
//     race: `Cat`,
//     age: `4`,
//     live: true
// }
// console.log(pet.live)
// console.log(pet.race)
// pet.race = `dog`
// console.log(pet.race)

// const users = [
//   {
//     name: "Егор",
//     age: 25
//   },
//   {
//     name: "Аня",
//     age: 20
//   },
//   {
//     name: "Максим",
//     age: 30
//   }
// ];

// console.log(users[0].name)

// const student = {
//   name: "Егор",
//   skills: ["HTML", "CSS", "JavaScript"],
//   scores: {
//     name: {

//     }
//   }
// };

// console.log(student.skills[0])

// let i = 0
// while(i < users.length) {
//     console.log(users[i].name)
//     i++
// }


// let title = {
//     text: "123123",
//     color: "#000",
//     fontSize: 123
// }

// title.textContent = "!123a"

// console.log(document)

// // let button = {
// //     textContent = "123",
// //     onclick = () => {

// //     },
    
// // }
// console.log(title.textContent)
// title.textContent = `TEST`
// console.log(title.textContent)
let title = document.querySelector("#test")
let input = document.querySelector(".name-input")
let button = document.querySelector("#button_name")

button.onclick = function() {
    title.textContent = `Привет, ${input.value} !`
}

title.style.color = "red"
title.style.fontSize = "40px"
title.style.background = "blue"
title.style.borderRadius = "48px"