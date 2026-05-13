// let a = 2
// while (a <= 10) {
//     console.log(a)
//     a += 2
// }

// for (let i = 2; i <= 20; i+= 2) {
//     console.log(i)
// }

// let a = Number(prompt(`Введите число`))
// for(let b = 1; b <= 5; b++) {
//     console.log(`${a} * ${b} = ${a * b}`)
// }

// let a = Number(prompt(`Введите число`))
// let b = 1
// while (b <= 5) {
//     console.log(`${a} * ${b} = ${a * b}`)
//     b++
// }

// let b = 1
// console.log(`${b + 1} is greater than ${b}`)
// b = b + 1
// console.log(`${b} is greater than ${b}`)
// c = 5
// b += c
// console.log(`${b} is greater than ${b}`)
// b++
// console.log(`${b} is greater than ${b}`)

// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
// 7 * 4 = 28
// 7 * 5 = 35


// year = Number(prompt(`Введите год`))
// age = 2026 - year
// if (age >= 18) {
//     console.log(`Вы совершеннолетний`)
//     console.log(`Ваш возраст: ${age}`)
// } else {
//     console.log(`Вы несовершеннолетний`)
//     console.log(`Ваш возраст: ${age}`)
// }

// function sayHello(name, age) {
//     console.log(`Hello ${name} you are ${age} years old`)
// }

// sayHello(20, "Dmitry")
// sayHello("Dmitry", 25)

// greet
// function greet(name, age) {
//     console.log(`Добро пожаловать ${name} вам ${age}`)
// }
// greet(`Егор`, 20)
// greet(`Виктор`, 23)
// greet(`Анна`, 38)


// function showTable(a, b) {
//     let c = 1
//     while (c <= b) { 
//         console.log(`${a} * ${c} = ${a * c} `)
//         c++
//     }
// }
// showTable(3, 6)
// showTable(12, 3)
// showTable(2, 84)
// 3, 6 
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18

function multiply (a,b) {
    return a * b
}
console.log(multiply(4, 5))
console.log(multiply(12, 5))
console.log(multiply(10, 8))


function printEvenNumbers (n) {
    let p = 1
    while (p < n) {
        p++
        if (p % 2 == 0) {
            console.log(p);
        }
    }
}
printEvenNumbers(10)
printEvenNumbers(8)
printEvenNumbers(15)

function askNumber (text) {
    let a = Number(prompt(`Введите число a`)) 
    let b = Number(prompt(`Введите число b`))
    console.log(a,b)
}

function askOperation() {
    let op = prompt(`Укажите действие`)
    // if (a == `+`) {
    //     console.log(`corrrect`)
    // } else if (a == `-`) {
    //     console.log(`corrrect`)
    // } else if (a == `*`) {
    //     console.log(`corrrect`)
    // } else if (a == `/`) {
    //     console.log(`corrrect`)
    // } else {
    //     return console.log(`Invalid operation`)
    // }
    return op
}
function add(a,b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
 function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
function calculate(a, b, operation) {
    if (askOperation == `+`) {
        console.log(add)
    } else if (askOperation == `-`) {
        console.log(subtract)
    } else if (askOperation == `*`) {
        console.log(multiply)
    } else if (askOperation == `/`) {
        console.log(divide)
    } else {
        console.log(`Unknown operation`)
    }
    
}
askNumber()
askOperation()
calculate()
console.log(divide(6,3))
