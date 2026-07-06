import { useState, useEffect } from "react"
import axios from "axios"
import PostDetails from "../components/PostDetails"
import PostInfo from "../components/PostInfo"
function Posts() {
    // const { postId } = useParams()
    // const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState("")
    const [catchError, setCatchError] = useState(false)
    
    useEffect(() => {
      async function loadUsers() {
        try {
            setIsLoad(true)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
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
    return(
        <>
        {error.length > 1 && (
            <div>
              <h2>{error}</h2>
            </div>
          )}
        {isLoad ? (<h2>Загрузка постов... </h2>) : 
        (
            post.map(post => (
          <div key={post.id} className="userCard">
              <PostInfo 
              userId = {post.id}
              num = {post.id}
              title = {post.title}/>
          </div>
            ))
        // <PostInfo/>
    )}
        </>
    )
}
export default Posts