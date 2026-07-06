import { Link } from "react-router-dom"
function PostInfo({userId, num, title}) {
    return(
        <>
        <div>
        <h2>Заголовок: {num}</h2>
        <h3>Коротокий текст: {title}</h3>
        <button className="GoTo"><Link to={`/Posts/${userId}`} className="clear">Подробнее</Link>  </button>
        </div>
        </>
    )
}
export default PostInfo