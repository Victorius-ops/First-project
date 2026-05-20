let hero = {
    name: `Alex`,
    className: `Mage`,
    hp: 100,
    level: 1,
    coins: 28
}
// let hero2 = {
//     name: `Mark`,
//     className: `Warrior`,
//     hp: 126,
//     level: 1,
//     coins: 12
// }
let heroName = document.querySelector(`.hero-name`)
let clas = document.querySelector(`.hero-class`)
let HP = document.querySelector(`.hero-hp`)
let level = document.querySelector(`.hero-level`)
let coins = document.querySelector(`.hero-coins`)
let newName = document.querySelector(`.name-input`)
let rename = document.querySelector(`.change-name-btn`)
let damage = document.querySelector(`.damage-btn`)
let heal = document.querySelector(`.heal-btn`)
let levelUp = document.querySelector(`.level-up-btn`)
let getCoins = document.querySelector(`.coins-btn`)
let themeChange = document.querySelector(`.theme-btn`)
let card = document.querySelector(`.card`)
let MSG = document.querySelector(`.message`)

function renderHero(object) {
    heroName.textContent = `Герой: ${object.name}`
    clas.textContent = `Класс героя: ${object.className}`
    HP.textContent = `Зоровье героя: ${object.hp}`
    level.textContent = `Уровень героя: ${object.level}`
    coins.textContent = `Золото героя: ${object.coins}`
}
renderHero(hero)
rename.onclick = function () {
    if (newName.value == 0 ) { 
        MSG.textContent = `Сначала введи имя!`
    } else {
    hero.name = newName.value
    newName.value = null
    MSG.textContent = `Имя героя изменено!`
    renderHero(hero)
    }
}
damage.onclick = function() {
    if (hero.hp <= 0) {
        alert(`You die`)
    } else {
        hero.hp = hero.hp - 10
        MSG.textContent = `Герой получил урон!`
        renderHero(hero)
    }
}
heal.onclick = function() {
    if (hero.hp >= 100) {
        MSG.textContent =`Ты полностью здоров!`
    } else {
        hero.hp = hero.hp + 10
        MSG.textContent = `Герой восстановил здоровье!`
        renderHero(hero)
    }
}
levelUp.onclick = function() {
    // Проверить или узнать будет ли работать функция в случае если задать
    // изначальное значение через цикл. Главный вопрос будет ли цикл срабатывать 
    // если значение подходит под условия цикла
    if (hero.level == 5) {
        MSG.textContent =`Ты стал сильнее! Максимальный уровень!`
        levelUp.textContent =`Максимальный уровень`
        return
    } else {
        hero.level++
        MSG.textContent = `Уровень повышен!`
        renderHero(hero)
    }
}
getCoins.onclick = function() {
    if (hero.coins >= 175) {
        MSG.textContent =`Твой кошелек переполнен`
    } else {
        hero.coins = hero.coins + 25
        MSG.textContent = `Ты получил 25 монет!`
        renderHero(hero)
    }
}
let i = 0
themeChange.onclick = function() {
    if (i == 1) {
        card.style.background = `crimson`
        card.style.boxShadow = `crimson 8px 8px 12px`
        card.style.color = `white`
        console.log(`Темная тема включена`)
        i = 0
    } else {
        card.style.background = `white`
        card.style.boxShadow = `white 8px 8px 12px`
        card.style.color = `black`
        console.log(`Светлая тема включена`)
        i++
    }
}