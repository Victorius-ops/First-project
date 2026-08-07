import { data, Link } from "react-router-dom"
import Home from "./Home"
import { useUsersFavFilms } from "../data/useUsersFavFilms"
import { useRef, useState } from "react"
import Regestration from "../components/Regestration"
function PreMain() {

    const [count, setCount] = useState(0)

    let isReg = useUsersFavFilms((store) => store.isReg)
    let changeIsReg = useUsersFavFilms((store) => store.changeIsReg)
    function change() {
        changeIsReg(false) 
        console.log(isReg)
    }
    if(isReg === false) {
        console.log(`Пользовтаель не зарегестрирован`)
    } else{
        console.log(`Пользователь зарегестрирован`)
    }
    const intervalRef = useRef(null)
   
    return(
        <>
       { !isReg ? (<> <Regestration/>
       </>) : (
        <>
        <div className="Catalog">
            <h1>Здесь находится приложение для поиска фильмов</h1>
            <button className="GoTo"><Link to = "/Home" className="clear">К фильма</Link></button>
        </div>
        <div className="About">
            <button className="GoTo"><Link to = "/About" className="clear">О проекте</Link></button>
        </div>
        <div className="Contacts">
            <button className="GoTo"><Link to= "/Contacts" className="clear">Контакты</Link></button>
        </div>
        <div className="UserList">
            <button className="GoTo"><Link to= "/Users" className="clear">Пользователи сервиса</Link></button>
        </div>
        <div className="PostsList">
            <button className="GoTo"><Link to= "/Posts" className="clear"> Посты</Link></button>
        </div>
        <button onClick={() => change()}>Сменить пользователя</button>     
       </>)}
        
        </>
    )
}
export default PreMain