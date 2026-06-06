const url = `https://jsonplaceholder.typicode.com/posts`;
let posts = []
let btn = document.querySelector(`#postload`)
let state = `Main`
const screen = document.querySelector(`#postsList`)
btn.textContent = `Нажми кнопку, чтобы загрузить посты`
const searchbtn = document.createElement(`button`)
searchbtn.textContent = `Найти посты`
let search = document.createElement(`input`)
search.placeholder = `Что ищем?`
document.body.append(search)
document.body.append(searchbtn)
searchbtn.onclick = async () => {
    screen.innerHTML = ``
    loadPosts()
    await main2()
    let searchitem = search.value
    let foundItems = posts.filter(post => post.title.includes(searchitem))
    console.log(`foundItems: ${foundItems}`)
    console.log(Array.isArray(foundItems))
    if (foundItems.length <= 0) {
        console.log(`Не найдено элементов с указанным текстом`)
    } else{
        foundItems.forEach((post) => {
            let card = document.createElement(`div`)
            card.innerHTML = `
                <h2>${post.title}</h2>
                <h3>${post.body}</h3>
            `
            screen.append(card)
    })
    }
}
 
btn.addEventListener(`click`, () => {
    state = `Download`
    posts = []
    btn.textContent = `Загрузка постов...`
    console.log(btn.textContent)
    loadPosts()
    main()
})
async function loadPosts() {
    const response = await fetch(url)
    let result = await response.json()
    return result
}
async function main() {
    let c = await loadPosts()

    c.forEach((post) => {
        posts.push(post)
    })
    // renderUsers()
    renderPosts(posts)
    console.log(posts)
}
async function main2() {
    let c = await loadPosts()

    c.forEach((post) => {
        posts.push(post)
    })
    // renderUsers()
    console.log(posts)
}

function renderPosts(posts){
    // screen.innerHTML = ``
    // let a = 0
    // while (a < posts.length) {
    // posts.forEach((post) => {
    // screen.append(card)
    // card.innerHTML = `<h4>Title${post.title}</h4> 
    // <h4>Body${post.body}</h4>`
    // a++
    // })
    // }
    btn.textContent = `Посты загружены`
    a = 1
    screen.innerHTML = ``
    const postbreak = posts.slice(0,10)
    postbreak.forEach((post) => {
        let card = document.createElement(`div`)
        card.innerHTML = `
        <h2>${a}.1 ${post.title}</h2>
        <h3>${a}.2 ${post.body}</h3>
        ` 
        a++
        screen.append(card)
    })
}
// console.log("1")
// setTimeout(() => {
//     console.log(`2`)
// }, 0)
// console.log("3")


// let count = 0
// let timerID = setInterval(() => {
//     count++
//     console.log(count)
//     if (count == 5) {
//         clearInterval(timerID)
//         console.log(`Таймер остановлен: ${timerID}`)
//     }
// }, 1000)
// console.log(`Таймер запущен: ${timerID}`)


// let seconds = 0
// let timerId = null

// startBtn.addEventListener(`click`, () => {
//     if (timerId !== null) {
//         return;
//     }
//     timerId = setInterval(() => {
//         seconds++
//         console.log(`Прошло ${seconds} секунд`)
//     }, 1000)
// })

// stopBtn.addEventListener(`click`, () => {
//     if (timerId === null) {
//         return;
//     }
//     clearInterval(timerId)
//     timerId = null
//     console.log(`Таймер остановлен`)
// })

console.log("A")

setTimeout(() => {
    console.log(`B`)
}, 0)

setTimeout(() => {
    console.log(`C`)
}, 0)

console.log("D")





