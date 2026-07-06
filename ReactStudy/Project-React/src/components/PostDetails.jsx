import { Link,  useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
function PostDetails() {
    const { searchId } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState("")
    const [catchError, setCatchError] = useState(false)
    
    useEffect(() => {
      async function loadUsers() {
        try {
            setIsLoad(true)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            setPost(response.data)
        } catch (error) {
          setError("Не удалось загрузить посты")
          setCatchError(true)
        } finally {
          setIsLoad(false)
        }
      }
      loadUsers()
  }, [])

    if (isLoad) {
    return (
        <>
            <h3>Загрузка...</h3>
            <Link to="/Posts">Назад</Link>
        </>
    )
  }

  if(!post) {
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
            <h2>{post.body}</h2>
            <Link to="/Users">Назад</Link>
        </>
    )
}
export default PostDetails