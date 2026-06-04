const url = `https://jsonplaceholder.typicode.com/posts`;
let posts = []
let btn = document.querySelector(`#postload`)
btn.addEventListener(`click`, () => {
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
    a = 1
    const screen = document.querySelector(`#postsList`)
    posts.forEach((post) => {
        let card = document.createElement(`div`)
        card.innerHTML = `
        <h2>${a} ${post.title}</h2>
        <h3>${a} ${post.body}</h3>
        ` 
        a++
        screen.append(card)
    })
}