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

// Улучшить функцию так, чтобы она определяла самое большее значение (по длинне символов в одной строке) в массиве и возвращало его
function printGames (games) {
    let i = 0
    while (i < games.length) {
      console.log(games[i])
      i++
    }
}
let game = ["Minecraft", "Roblox", "Battlefield", "Skyrim"]
console.log("Egor".length)
printGames(game)