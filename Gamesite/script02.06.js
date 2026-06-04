const tasks = [{
    title: `Сделать ДЗ`,
    category: `study`,
    time: 45,
    important: 'важно'
},
{
    title: `Помыть посуду`,
    category: `home`,
    time: 15,
    important: 'не важно'
},
{
    title: `Сделать зарядку`,
    category: `sport`,
    time: 20,
    important: 'важно'
},
{
    title: `Повторить JavaScript`,
    category: `study`,
    time: 30,
    important: 'важно'
},{
    title: `Убраться в комнате`,
    category: `home`,
    time: 25,
    important: 'не важно'
},{
    title: `Прогулка`,
    category: `sport`,
    time: 45,
    important: 'не важно'
}]
let currentCategory = "all"
let div = document.querySelector(`#taskList`)
function createTaskCard(task)  { 
    task.forEach((element) =>  {
    let a = document.createElement(`div`)
    div.append(a)
    a.className = `task-card`
    a.dataset.category = element.category
    a.dataset.important = element.important
    if (a.dataset.important == `важно`) {
        a.innerHTML = `
        <h2>${element.title}</h2>
        <h3>Категория ${element.category}</h3>
        <h3>Время: ${element.time} минут</h3>
        <span>Это важная задача<\span>
        `
    } else{
        a.innerHTML = `
        <h2>${element.title}</h2> <p>
        <h3>Категория ${element.category}</h3><p>    
        <h3>Время: ${element.time} минут</h3>
        `
    }
    })
}
let wholebtns = document.querySelectorAll(`button`)
function render(card) {
    div.innerHTML = ``
    createTaskCard(tasks)
    const b = document.querySelectorAll(`.task-card`)
    b.forEach((task) => {
        if (currentCategory == `all`){
            div.innerHTML = ``
            createTaskCard(tasks)
        } else  if (task.dataset.category != currentCategory) {
            task.classList.add(`hidden`)
        }
    })
}
function clear() {
    wholebtns.forEach((btn) => {
        btn.classList.remove(`active`)
    })
}
// Задание 1

// tasks.forEach((task) => {
//     console.log(`${task.title} - ${task.category} - ${task.time} минут - ${task.important}`)
// })

// Задание 2
// function createTaskCard(task)  { 
//     task.forEach((element) =>  {
//     let a = document.createElement(`div`)
//     document.body.append(a)
//     a.className = `task-card`
//     a.dataset.category = element.category
//     a.dataset.important = element.important
//     if (a.dataset.important == `важно`) {
//         a.innerHTML = `
//         <h2>${element.title}</h2>
//         <h3>Категория ${element.category}</h3>
//         <h3>Время: ${element.time} минут</h3>
//         <span>Это важная задача<\span>
//         `
//     } else{
//         a.innerHTML = `
//         <h2>${element.title}</h2> <p>
//         <h3>Категория ${element.category}</h3><p>    
//         <h3>Время: ${element.time} минут</h3>
//         `
//     }
//     })
// }
// createTaskCard(tasks)

// Задание 3

// let div = document.querySelector(`#taskList`)
// let a = document.createElement(`div`)
// function render(card) {
//     div.innerHTML = ``
//     createTaskCard(card)
// }
// render(tasks)
// render(tasks)
// render(tasks)
// render(tasks)

// Задание 4,5,6,7
const btnAll = document.querySelector(`#All`)
const btnStudy = document.querySelector(`#Study`)
const btnHome = document.querySelector(`#Home`)
const btnSport = document.querySelector(`#Sport`)
const btnimportant = document.querySelector(`#Important`)

btnAll.onclick = () => {
    currentCategory = `all`
    render(tasks)
    console.log(currentCategory)
    clear()
    btnAll.classList.add(`active`)
}
btnStudy.onclick = () => {
    currentCategory = `study`
    render(tasks)
    console.log(currentCategory)
    clear()
    btnStudy.classList.add(`active`)
}
btnHome.onclick = () => {
    currentCategory = `home`
    render(tasks)
    console.log(currentCategory)
    clear()
    btnHome.classList.add(`active`)
}
btnSport.onclick = () => {
    currentCategory = `sport`
    render(tasks)
    console.log(currentCategory)
    clear()
    btnSport.classList.add(`active`)
}
btnimportant.onclick = () => {
    currentCategory = `important`
    div.innerHTML = ``
    tasks.forEach((task) => {
        if (task.important == `важно`) {
            let a = document.createElement(`div`)
            a.innerHTML = `
           <h3> ${task.title} - ${task.important} </h3>`
            div.append(a)
        }
    })
    clear()
    btnimportant.classList.add(`active`)
}

const form = document.querySelector(`#taskings`)

form.addEventListener('submit', (event) => {
    // console.log(event)
    // console.log(event.target)
    event.preventDefault()
    const name = form.elements.name.value
    const category = form.elements.category.value
    const minute = form.elements.minute.value
    const important = document.querySelector(`#important`)
    const msg = document.querySelector(`#ErrMsg`)
    
    if(name.trim() == ``) {
        msg.textContent = `Введите название задачи`
        return
    }
    if(Number(minute) <= 0) {
        msg.textContent = `Укажите корректное время`
        return
    }
    if (category == ``) {
        msg.textContent = `Выберите категорию`
        return
    }
    if (important.checked) {
        check = true
    } else {
        check = false
    }
    console.log(category, check)

    tasks.push({
        title:name,
        category:category,
        time:minute,
        important:check
    })
    console.log(tasks)
    render(tasks)
//     if (search.trim() == "") {
//         alert("Введите название товара")
//         return
//     }

//     if (Number(price) <= 0) {
//         alert("Введите корректную цену")
//         return
//     }

//     console.log(search, category, price)
})

// localStorage.setItem("tasks", JSON.stringify([1,2,2,3,4,5,67,7]))

// let a = localStorage.getItem("tasks")
// console.log(a)
// console.log(typeof a)

// let b = JSON.parse(a)
// console.log(b)
// console.log(typeof b)

localStorage.setItem("games", JSON.stringify([
    {
        title: "The Witcher 3",
        genre: "RPG",},
    {
        title: "Cyberpunk 2077",
        genre: "RPG",},
    {
        title: "Minecraft",
        genre: "Sandbox",},
]))

function loadGames() {
    const data = localStorage.getItem("games")
    console.log(!data)
    if (!data) {
        return []
    }
    try {
        return JSON.parse(data)
    } catch (error) {
        console.log("Ошибка при загрузке данных из localStorage:", error)
        return [];
    }
}


let b = loadGames()
console.log(b)

// Сайт -> делает запрос -> API -> сервер -> данные -> API -> сайт -> render() -> карточки на странице
// https://jsonplaceholder.typicode.com/users

const url = "https://jsonplaceholder.typicode.com/users"

let users = []

async function loadUsers() {
    const response = await fetch(url)
    let result = await response.json()
    return result
}
async function main() {
    let c = await loadUsers()

    c.forEach((user) => {
        users.push(user)
    })
    renderUsers()
    console.log(users)
}

function renderUsers() {
    const usersDiv = document.querySelector(`#users`)
    users.forEach((user) => {
        let a = document.createElement(`div`)
        a.innerHTML = `
        <h2>${user.name}</h2>
        <h3>${user.email}</h3>
        <h3>${user.phone}</h3>
        `
        usersDiv.append(a)
    })
}

// let d = loadGames()
// d.forEach((name) => {
//     console.log(name.name)
// })

main()

const form = document.querySelector(`#taskings`)

form.addEventListener('submit', (event) => {
    // console.log(event)
    // console.log(event.target)
    event.preventDefault()
    const name = form.elements.name.value
    const category = form.elements.category.value
    const minute = form.elements.minute.value
    const important = document.querySelector(`#important`)
    const msg = document.querySelector(`#ErrMsg`)
    
    if(name.trim() == ``) {
        msg.textContent = `Введите название задачи`
        return
    }
    if(Number(minute) <= 0) {
        msg.textContent = `Укажите корректное время`
        return
    }
    if (category == ``) {
        msg.textContent = `Выберите категорию`
        return
    }
    if (important.checked) {
        check = true
    } else {
        check = false
    }
    console.log(category, check)

    tasks.push({
        title:name,
        category:category,
        time:minute,
        important:check
    })
    console.log(tasks)
    render(tasks)
//     if (search.trim() == "") {
//         alert("Введите название товара")
//         return
//     }

//     if (Number(price) <= 0) {
//         alert("Введите корректную цену")
//         return
//     }

//     console.log(search, category, price)
})

// localStorage.setItem("tasks", JSON.stringify([1,2,2,3,4,5,67,7]))

// let a = localStorage.getItem("tasks")
// console.log(a)
// console.log(typeof a)

// let b = JSON.parse(a)
// console.log(b)
// console.log(typeof b)

localStorage.setItem("games", JSON.stringify([
    {
        title: "The Witcher 3",
        genre: "RPG",},
    {
        title: "Cyberpunk 2077",
        genre: "RPG",},
    {
        title: "Minecraft",
        genre: "Sandbox",},
]))

function loadGames() {
    const data = localStorage.getItem("games")
    console.log(!data)
    if (!data) {
        return []
    }
    try {
        return JSON.parse(data)
    } catch (error) {
        console.log("Ошибка при загрузке данных из localStorage:", error)
        return [];
    }
}


let b = loadGames()
console.log(b)

// Сайт -> делает запрос -> API -> сервер -> данные -> API -> сайт -> render() -> карточки на странице
// https://jsonplaceholder.typicode.com/users

const url = "https://jsonplaceholder.typicode.com/users"

let users = []

async function loadUsers() {
    const response = await fetch(url)
    let result = await response.json()
    return result
}
async function main() {
    let c = await loadUsers()

    c.forEach((user) => {
        users.push(user)
    })
    renderUsers()
    console.log(users)
}

function renderUsers() {
    const usersDiv = document.querySelector(`#users`)
    users.forEach((user) => {
        let a = document.createElement(`div`)
        a.innerHTML = `
        <h2>${user.name}</h2>
        <h3>${user.email}</h3>
        <h3>${user.phone}</h3>
        `
        usersDiv.append(a)
    })
}

// let d = loadGames()
// d.forEach((name) => {
//     console.log(name.name)
// })

main()

const form = document.querySelector(`#taskings`)
form.addEventListener(`submit`, (event) => {
    event.preventDefault()
    const names = form.elements.names.value
    const categorys = form.elements.category.value
    const minutes = form.elements.minute.value
    const importants = form.elements.important.value
    console.log(importants, categorys)

})