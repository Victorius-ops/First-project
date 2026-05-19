// const name = "Victor "
    // let age = 23
    // let Pskov = "Город"
    // let city = Pskov
    // console.log(name)
    // console.log( name + age + city)
    // let btn = document.getElementsByClassName("btn") 
    // let text =  document.getElementById("text")
    // btn.onclick = function() {
    //     text.textContent = "Any text"
    // }
    // console.log(btn)
    

// let a = Number(prompt("Введи первое число"))
// let b = Number(prompt("Введи второе число"))
// console.log(a + b)

// console.log(typeof "5")
// 5 - число number 
// "5" - строка string


    // let a = document.getElementById("title")
    // let b = document.getElementById("description")
    // let c = document.getElementById("btn")
    // console.log(a, b, c)
    // title.onclick = function() {
    //     a.textContent = "JavaScript работает!"
    //     b.textContent = "Я нашёл элемент по id"
    //     c.textContent = "Готово"
    //     f.textContent = "Text"
    // }
    // let f = document.getElementsByClassName("card")
    // console.log(f)
    // let t = document.getElementById("test")
    // test.onclick = function() {
    //     t.textContent = "Купить"
    // }

// console.log(2 + 3)


{/* < > <= >= == != */} 
// abc123
// let money = 500
// console.log(money > 500)
// let a = prompt("Введите пароль")
// if (pass == "abc123") {
//     console.log("Можете войти")
// } else {
//     console.log("Пароль неверный")
// }

// true - это логическое значение boolean Правда
// false - это логическое значение boolean Ложь

// && - И - Оба условия должны быть правдивыми true
// || - ИЛИ - Достаточно одного условия для правды true

// let money = Number(prompt("Сколько шекелей?"))
// let age = Number(prompt("Введите возраст"))
// if (age >= 12 && money >= 300) {
//     console.log("Можете войти")
// } else {
//     console.log("Не тот возраст")
// }

// let age = Number(prompt("Введите возраст"))
// if (age >= 18) {
    
// } else if (age >= 16) {
//     console.log("Вы можете получить водительские права")
// } else if () {
   
// } else {
    
// }

// let a = Number(prompt("Введите 1-ое число"))
// let b = Number(prompt("Введите 2-ое число"))
// let action = prompt("Какое действие необходимо выполнить")
do {
 a = Number(prompt("Введите 1-ое число"))
 b = Number(prompt("Введите 2-ое число"))
 action = prompt("Какое действие необходимо выполнить")
if (action == "+" || action =="Сложить") {
    alert(`Сумма равна ${a + b}`)
} else if (action == "-" || action == "Вычесть") {
    alert(`Разность равна ${a - b}`)
} else if (action == "*" || action == "Умножить") {
    alert(`Произведение равно ${a * b}`)
} else if (action == "/" || action == "Разделить") {
    alert(`Частное равно ${a / b}`)
} else {
    alert(`Некорректные вводные, попробуйте снова`)
    action = null
} } while(action == null)
// alert(a+b)
// alert(a-b)
// alert(a*b)
// Создай калькулятор, который:
// 1. Спрашивает два числа
// 2. Выводит их сумму
// 3. Выводит их разность
// 4. Выводит их произведение
// Используй Number()!


// Создай калькулятор, который:
// 1. Спрашивает два числа и оператор (+, -, *, /)
// 2. Выводит их сумму
// 3. Выводит их разность
// 4. Выводит их произведение
// 5. Выводит их деление
// Используй Number(), if, else if, else!


// Запиши, что выведет код (не запускай сразу):
// console.log(10 > 5)?
// console.log(3 == 3) ?
// console.log("car" == "dog")?
// console.log(100 != 50)?
// console.log(18 >= 18)?
// Потом проверь запуском!


// Напиши условие для каждого случая:
// 1. Купить игру: возраст >= 10 И деньги >= 500
// 2. Бесплатный вход: возраст < 7 ИЛИ возраст >= 65
// 3. Доступ к аккаунту: пароль == "1234"; И имя == "Антон"
// Для каждого — спроси данные у пользователя и выведи результат!

console.log(10 > 5)
// Число а больше b
console.log(3 == 3) 
// Число а равно b
console.log("car" == "dog") 
// Строка а не соответсвует(не равна) строке b
console.log(100 != 50)
// Число а НЕ равно чилслу b
console.log(18 >= 18) 
// Число b не меньше числа а 