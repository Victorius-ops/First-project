import { useState } from "react";
import { Link } from "react-router-dom";
import TSFunctions from "./TSFunctions";

function TSTry() {

    let ages:number = 28
    let name:string = "NameType"
    let isStudent:boolean = false
    let Test:string = "Test"
    if (isStudent === true) {
        Test = "Студент"
    } else {
        Test = "Не студент"
    }
    const status: "online" = "offline"
    const prices: number[] = [145, 261, 389, 473, 567, 683, 746]
    console.log(prices)
    console.log(prices[0])
    console.log(prices[2])
    prices.push("500")
    console.log(prices)
    const games: string[] = ["Half-Life", "Witcher", "NFS: Carbon", "Dark Messiah", "Borderlands"]
    console.log(games)
    type Product = {
    title: string,
    price: number,
    onStock: boolean}
    const product1: Product = {
    title: "Игровая мышь",
    price: 826,
    onStock: true
    }
    const product2: Product = {
    title: "НеИгровая мышь",
    price: "Восемьсот рублей",
    onStock: 15}
    const product3: Product = {
    title: 1589,
    price: 826,
    onStock: "Есть немного"
    }
    console.log(product1.title)
    console.log(product2.onStock)
    console.log(product3.price)
    type Car = {
    brand: string
    year: number
    isElectric?: boolean
    }
    const car1: Car = {
        brand:"Audi Q8 e-tron",
        year:2018,
        isElectric: true
    }
    const car2: Car = {
        brand:"Запорожец",
        year:1989,
    }
    console.log(car1.isElectric)
    console.log(car2.isElectric)

    // Задание 9 
    // Изначальный вариант
    let age: number = "18"
    let nickname: string = 123
    let isOnline: boolean = "true"
    const numbers: number[] = [10, 20, "30"]

// Исправленный вариант
    let age2: number = 18
    let nickname2: string = "123"
    let isOnline2: boolean = true
    const numbers2: number[] = [10, 20, 30]

    type Player = {
    nickname: string
    level: number
    isAdmin?: boolean
}
    // Задание 9 
    // Изначальный вариант
    // const player1: Player = {
    //     nickname: "Alex",
    //     level: "10"
    // }

    // const player2: Player = {
    //     level: 25
    // }

    // const player3: Player = {
    //     nickname: "George",
    //     level: 15,
    //     isAdmin: "false"
    // }
// Исправленный вариант с комментариями
    const player1: Player = {
        nickname: "Alex",
        level: 10 //Были  данные указаны в "" что приравнивается к string, данные ожидались в формате number
    }

    const player2: Player = {
        nickname: "Victor", // Отсутсвовал обязательный в типе Player параметр nickname
        level: 25
    }

    const player3: Player = {
        nickname: "George",
        level: 15,
        isAdmin: false //Были  данные указаны в "" что приравнивается к string, данные ожидались в формате boolean
    }

        type Game = {
    title: string,
    price: number,
    isOnline: boolean,
    rating: number,
    isFree?: boolean
}
const game1: Game = {title: "Witcher",
    price: 1200,
    isOnline: false,
    rating: 8.9,
    isFree: false}
const game2: Game = {title: "Grid",
    price: 0,
    isOnline: true,
    rating: 6,
    isFree: true}
const game3: Game = {title: "Borderlands",
    price: 800,
    isOnline: true,
    rating: 8}
const game4: Game = {title: "The bag outside the bag of milk outside the bag of milk",
    price: 200,
    isOnline: false,
    rating: 7.2,
    isFree: false}
const game5: Game = {title: "NFS: Carbon",
    price: 400,
    isOnline: false,
    rating: 8,
}

    return(
        <>
               <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
               <form action="">
                <label >Введите ваш возраст:</label>
                <input type="number" />
                <button type="submit">Отправить</button>
               </form>
        <h3>{ages}
            <br />
            {name}
            <br />
            {Test}
            <br />
            Статус в сети: {status}
        </h3>
        <TSFunctions />
        </>
    )
}
export default TSTry