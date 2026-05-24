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

function createTask() {
    let taska = document.createElement(`div`)
    taska.classList.add(`taska`)
    taskList.append(taska)
    let taskaText = document.createElement(`div`)
    taskaText.classList.add(`taskaText`)
    taskaText.textContent = inp.value
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
    })
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

// del.addEventListener(`click`, function() {
//     console.log(MD)
// })


