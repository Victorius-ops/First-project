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
// Секция переменных
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
let spendCoins = document.querySelector(`.coins-spend`)
let themeChange = document.querySelector(`.theme-btn`)
let superHeal = document.querySelector(`.super-heal`)
let card = document.querySelector(`.card`)
let MSG = document.querySelector(`.message`)
// 
// Секция функций

function renderHero(object) {
    heroName.textContent = `Герой: ${object.name}`
    clas.textContent = `Класс героя: ${object.className}`
    HP.textContent = `Зоровье героя: ${object.hp}`
    level.textContent = `Уровень героя: ${object.level}`
    coins.textContent = `Золото героя: ${object.coins}`
}
function HPbar() {
    if(hero.hp >= 60 ) {
        HP.style.color = `lime`
    } else if (hero.hp >= 30 && hero.hp <= 60) {
        HP.style.color = `orange`
    }
    else {  HP.style.color = `red`}
}

function HPcheck() {
    if (hero.hp >= 100) {
        return hero.hp = 100
    }
}
renderHero(hero)
HPbar()
// 
// Секция onclicl-ов
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
    HPbar()
}

heal.onclick = function() {
    if (hero.hp >= 100) {
        MSG.textContent =`Ты полностью здоров!`
    } else {
        hero.hp = hero.hp + 10
        MSG.textContent = `Герой восстановил здоровье!`
        renderHero(hero)
    }
    HPbar()
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
        card.style.backgroundImage = `url(https://avatars.mds.yandex.net/i?id=12766fce2b5f1bebe49b1f0fd5f168e0_l-5447391-images-thumbs&n=13)`
        card.style.boxShadow = `deepskyblue 8px 8px 12px`
        card.style.color = `white`
        MSG.textContent = `Темная тема включена`
        i = 0
    } else {
        card.style.background = `url(https://img.freepik.com/premium-photo/snow-sky-clouds-background-abstract-beautiful-landscape-in-the-clouds-abstract-snowflakes_548821-18947.jpg?size=626&ext=jpg)`
        card.style.backgroundPosition = `center`
        card.style.boxShadow = `white 8px 8px 12px`
        card.style.color = `black`
        MSG.textContent = `Светлая тема включена` 
        i++
    }
}
superHeal.onclick = function() {
    if (hero.hp >= 100) {
        MSG.textContent =`Ты полностью здоров!`
    } else if ( hero.hp < 100 && hero.coins >= 20) {
        hero.hp = hero.hp + 30
        hero.coins = hero.coins - 20
        MSG.textContent = `Герой приобрел и использовал зелье здоровья!`
        HPcheck()
        renderHero(hero)
    }  else {
        MSG.textContent = `Недостаточно монет для покупики зелья здоровья!`
    }
    HPbar()
}
spendCoins.onclick = function() {
    if (hero.coins < 10) {
      MSG.textContent = `Недостаточно монет для кутежа!`  
    } else {
        hero.coins -= 10
        MSG.textContent = `Вы хорошо покутили на 10 монет!`
        renderHero(hero)
    }
}