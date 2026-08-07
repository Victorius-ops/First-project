import { Link,  useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
function PostDetails() {
    const { userId } = useParams()
    const navigate = useNavigate()
    const [posts, setPostsId] = useState(null)
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState("")
    const [catchError, setCatchError] = useState(false)
    
    useEffect(() => {
      async function loadUsers() {
        try {
            setIsLoad(true)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            setPostsId(response.data)
        } catch (error) {
          setError("Не удалось загрузить посты")
          setCatchError(true)
        } finally {
          setIsLoad(false)
        }
      }
      loadUsers()
  }, [])

if (isLoad === true) {
    return (
        <>
            <h3>Загрузка...</h3>
            <Link to="/Posts">Назад</Link>
        </>
    )
  }

  if(!posts) {
    return (
    <>
        <h3>Пользователь не найден</h3>
        <Link to="/Posts">Назад</Link>
    </>
    )
  }

  if(error) {
    return <h3>{error}</h3>
  }



    return(
        <>
            {/* <h3>Имя: {user.name}</h3>
            <h4>City: {user.address.city}</h4>
            <h5>Email: {user.email}</h5>
            <p>Phone {user.phone}</p>
            <p>Website {user.website}</p>
            <p>Company {user.company.name}</p> */}
            <h2>{posts.body}</h2>
            <Link to="/Posts">Назад</Link>
        </>
    )
}
export default PostDetails