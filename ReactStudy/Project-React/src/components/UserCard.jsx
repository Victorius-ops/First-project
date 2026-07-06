import { Link } from "react-router-dom"

function UserCard({id, name, city, mail}) {
    return(
        <>
            <h3>Имя: {name}</h3>
            <h4>Город: {city}</h4>
            <h5>Email: {mail}</h5>
            <Link to={`/Users/${id}`}>Подробнее</Link>
        </>
    )
}
export default UserCard