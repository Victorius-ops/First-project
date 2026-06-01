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
form.addEventListener(`submit`, (event) => {
    event.preventDefault()
    const names = form.elements.names.value
    const categorys = form.elements.category.value
    const minutes = form.elements.minute.value
    const importants = form.elements.important.value
    console.log(importants, categorys)

})