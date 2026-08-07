import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import PostDetails from "../components/PostDetails"
import PostInfo from "../components/PostInfo"
import { PostContext } from "../Context/PostContext"
import PostsProvider from "../Context/PostContext"
import { PostsCardContext } from "../Context/PostCardContext"
function Posts() {
    // const { postId } = useParams()
    // const navigate = useNavigate()
    // const [post, setPost] = useState(null)
    // const [isLoad, setIsLoad] = useState(true)
    // const [error, setError] = useState("")
    // const [catchError, setCatchError] = useState(false)
    
  //   useEffect(() => {
  //     async function loadUsers() {
  //       try {
  //           setIsLoad(true)
  //           const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //           setPost(response.data)
  //       } catch (error) {
  //         setError("Не удалось загрузить посты")
  //         setCatchError(true)
  //       } finally {
  //         setIsLoad(false)
  //       }
  //     }
  //     loadUsers()
  // }, [])
  const { posts, isLoad, error, catchError, postCount} = useContext(PostContext)
  // const {loadMore, clearPost, showDefault } = useContext(PostsCardContext)
  const postsList = posts.slice(0, postCount);
  console.log(postsList)
    return(
        <>
        <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
        {error.length > 1 && (
            <div>
              <h2>{error}</h2>
            </div>
          )}
        {/* {
          isLoad ? (<h2>Загрузка постов... </h2>) : (post.map((value, index, array) => (
            <div key={post.id} className="userCard">
              <PostInfo 
              userId = {post.id}
              num = {post.id}
              title = {post.title}/>
            </div>
          )))
        } */}
        {
          isLoad ? (
            <h2>Загрузка постов... </h2>
          ) : (
            <>
              {/* <button onClick={() => loadMore()}> Загрузить новые посты</button>
              <button onClick={clearPost}>Сбросить посты</button>
              <button onClick={showDefault}>Вернуть стандарт</button> */}
              {isLoad ? (<h2>Загрузка постов... </h2>) : 
                  (  postsList.map(post => (
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
        
        </>
    )
}
export default Posts