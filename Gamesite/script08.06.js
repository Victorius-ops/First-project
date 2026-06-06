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

const input = document.querySelector(".number-input");
const startBtn = document.querySelector(".start-btn");
const timer = document.querySelector(".timer");
const message = document.querySelector(".message");
let intervalId = null;

startBtn.addEventListener("click", () => {
    inputnum = Number(input.value)
    timer.textContent = inputnum
        if(input.value = ``){
            alert(`Укажите число`)
        } intervalId =  setInterval(() => {
        inputnum--
        timer.textContent = inputnum
    }, 1000)
// 1. Получи число из input
// 2. Преобразуй его через Number()
// 3. Покажи число на странице
// 4. Запусти setInterval
// 5. Каждую секунду уменьшай число
// 6. На 0 останови таймер
});