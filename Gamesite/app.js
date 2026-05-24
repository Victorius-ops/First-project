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
    taska.textContent = inp.value
    taskList.append(taska)
    inp.value = null
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
