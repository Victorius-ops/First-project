let main = document.querySelector(`body`)
main.classList.add(`mainScreen`)
let MD = document.createElement(`div`)
MD.classList.add(`mainDiv`)
document.body.append(MD)
let tsk = document.createElement(`div`)
tsk.classList.add(`tasks`)
MD.append(tsk)
let taskList = document.createElement(`div`)
taskList.classList.add(`taskList`)
MD.append(taskList)
let inp = document.createElement(`input`)
// a.value = `Поле для ввода`
inp.placeholder = `Создайте задачу`
inp.classList.add(`input`)
tsk.append(inp)
let btn = document.createElement(`button`)
btn.textContent = `Добавить задачу`
btn.classList.add(`button`)
tsk.append(btn)
let themeChange = document.createElement(`button`)
themeChange.textContent = `Сменить тему`
themeChange.classList.add(`button`)
tsk.append(themeChange)
let clear = document.createElement(`button`)
clear.textContent = `Удалить все задачи`
clear.classList.add(`button`)
tsk.append(clear)
let i = 0
let counter = document.createElement(`div`)
counter.textContent = `Всего задач: ${i}`
counter.classList.add(`counter`)
tsk.append(counter)
function createTask() {
    let taska = document.createElement(`div`)
    taska.classList.add(`taska`)
    taskList.append(taska)
    let taskaText = document.createElement(`div`)
    taskaText.classList.add(`taskaText`)
    // taskaText.textContent = inp.value
    const result = inp.value.match(/.{1,20}/g).join('\n');
    taskaText.textContent = result
    taska.append(taskaText)
    let del = document.createElement(`div`)
    del.classList.add(`delete`)
    del.textContent = `🗑️`
    taska.append(del)
    // Возможно тут необходимо создать функцию
    // inp.placeholder = `Создайте задачу`
    // const allElements = document.querySelectorAll('.taska');
    // const counted = allElements.length;
    // console.log(counted);
    // //
    // let count = document.createElement(`div`)
    // let i = 0
    // i = taskList.lenght
    // count = `Всего задач создано: ${counted}`
    // document.body.append(count)
    //
    inp.value = null
    del.addEventListener(`click`, function () {
    taska.remove()
    i--
    counter.textContent = `Всего задач: ${i}`
    })
    del.addEventListener(`mouseover`, function() {
        del.classList.add(`deleteCheck`)
    })
    del.addEventListener(`mouseout`, function() {
        del.classList.remove(`deleteCheck`)
    })
    taska.addEventListener(`click`, function() {
        // функция для смены активности задачи
        taska.classList.toggle(`taskDone`)
        taskaText.classList.toggle(`taskaTextDone`)
    })
    clear.addEventListener(`click`, function(){
        document.querySelectorAll(".taska").forEach(list => {
        list.remove()})
        i = 0
        counter.textContent = `Всего задач: ${i}`
    })
    i++
    counter.textContent = `Всего задач: ${i}`
}
btn.addEventListener(`click`, function() {
    if(inp.value == 0) {
        inp.classList.add(`warning`)
        inp.placeholder = `Введите название задачи`
    } else {
        inp.classList.remove(`warning`)
        createTask()
    }
})
inp.addEventListener(`keyup`, function(e) {
  if(inp.value == 0) {
        inp.classList.add(`warning`)
        inp.placeholder = `Введите название задачи`
    }   else if  (e.key === `Enter`) {
        inp.classList.remove(`warning`)
        createTask()
    }   else{}
})

 themeChange.addEventListener(`click`, function() {
        if (taskList.classList == `taskList`) {
            // let list = document.querySelectorAll(`.taska`)
            // taska.classList.toggle(`taskaDark`)
            // console.log(list)
            taskList.classList.replace(`taskList`, `taskListDark`)
            main.classList.replace(`mainScreen`, `mainScreenDark`)
        } else {
            taskList.classList.replace(`taskListDark`, `taskList`)
            main.classList.replace(`mainScreenDark`, `mainScreen`)
        }
})
// del.addEventListener(`click`, function() {
//     console.log(MD)
// })
// Для кнопки удалени нужно 
// 1. найти все элементы на странице в переменной
// 2. удалить переменную