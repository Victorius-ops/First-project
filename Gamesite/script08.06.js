// Задание 1
// let a = document.querySelector(`#seconds`)
// let b = document.querySelector(`#MSG`)
// a.onclick = ()=> {
//      b.textContent = `Ждём 3 секунды..`
//      setTimeout(() => {
//         b.textContent = `Сообщение появилось!`
//      }, 3000)
// }

// Задание 2
// a.onclick = ()=> {
//     setInterval(() => {
//     if (value > 5) {
//         return
//     } else {
//         console.log(value)
//         b.textContent = value
//         value++
//     }}, 1000)
// }

// Задание 3
// let a = document.querySelector(`.start`)
// let b = document.querySelector(`#Counter`)
// let c = document.querySelector(`.stop`)
// let timerId = null
// value = 0
// b.textContent = value
// a.onclick = ()=> {
//     if (timerId !== null ) {
//         return
//     } timerId = setInterval(() => {
//         value++
//         console.log(`Прошло ${value} секунд`)
//         b.textContent = value
        
//     // else {
//     //     console.log(value)
//     //     b.textContent = value
//     //     value++
//     // }
// }, 1000)
// }
// c.onclick = () => {
//     if (timerId === null) {
//         return;
//     }
//     clearInterval(timerId)
//     console.log(value)
//     timerId = null
//     console.log(`Таймер остановлен`)
// }

// Задание 4
// const input = document.querySelector(".number-input");
// const startBtn = document.querySelector(".start-btn");
// const timer = document.querySelector(".timer");
// const message = document.querySelector(".message");
// let intervalId = null;

// startBtn.addEventListener("click", () => {
//     inputnum = Number(input.value)
//     input.value = `Введите число`
//     if(inputnum < 1 || input == ``) {
//         alert(`Укажите корректное число`)
//     } else {
//         timer.textContent = inputnum
//         intervalId =  setInterval(() => {
//         inputnum--
//         timer.textContent = inputnum
//         if (inputnum <= 3){
//             timer.style.color = `red`
//         }
//         if(inputnum === 0) {
//             clearInterval(intervalId)
//             message.textContent = `Время вышло`
//         }
//     }, 1000)}

// // 1. Получи число из input
// // 2. Преобразуй его через Number()
// // 3. Покажи число на странице
// // 4. Запусти setInterval
// // 5. Каждую секунду уменьшай число
// // 6. На 0 останови таймер
// });

const time = document.querySelector(`.time`)
const score = document.querySelector(`.score`)
const startBtn = document.querySelector(`.start-btn`)
const clickBtn = document.querySelector(`.click-btn`)
const result = document.querySelector(`.result`)
const best = document.querySelector(`.best`)
const hard = document.querySelector(`.hard-btn`)
let gameInterval = null
let isGameActive = false
let bestScore = 0
let isHardMode = false
best.textContent = localStorage.getItem(`bestScore`)
hard.onclick = () => {
    isHardMode = !isHardMode
    console.log(isHardMode)
    hard.classList.toggle(`active`)
}
function startGame() {
let timeCount = 10
let scoreCount = 0
isGameActive = true
time.style.color = null
if(hard.classList.contains(`active`)){
    console.log(`Включен сложный режим`)
    timeCount = 5
    time.textContent = timeCount
}
if (isGameActive == true){
    clickBtn.removeAttribute('disabled')
}
if (gameInterval !== null) {
    return
}
gameInterval = setInterval(() => {
    timeCount--
    console.log(timeCount)
    time.textContent = timeCount
    if (timeCount <= 3 && timeCount > 0) {
        time.style.color = `red`
    }
    else if(timeCount <= 0){
        finishGame(gameInterval)
        if(scoreCount > localStorage.getItem(`bestScore`)) {
        localStorage.setItem(`bestScore`, scoreCount)
        best.textContent = localStorage.getItem(`bestScore`)
    } 
    }
    clickBtn.onclick = () =>{
        scoreCount++
        score.textContent = scoreCount
    }}, 1000)
}
function finishGame() {
    if (gameInterval === null) {
        return
    }
    clearInterval(gameInterval)
    gameInterval = null
    clickBtn.setAttribute(`disabled`, ``)
    result.textContent = `Ваш результат: ${score.textContent}`
}
startBtn.addEventListener(`click`, () => {
    startGame()
})