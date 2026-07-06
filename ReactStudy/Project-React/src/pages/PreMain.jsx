import { data, Link } from "react-router-dom"
import Home from "./Home"
function PreMain() {
    return(
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
        </>
    )
}
export default PreMain