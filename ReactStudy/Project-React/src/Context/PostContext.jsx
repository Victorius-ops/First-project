import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export const PostContext = createContext()

function PostsProvider({children}) {
    const [posts, setPosts] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState("")
    const [catchError, setCatchError] = useState(false)
    const [postCount, setPostCount] = useState(10)

    const full_posts = {
        posts: posts,
        isLoad: isLoad,
        error: error,
        catchError: catchError,
        postCount: postCount
    }

    useEffect(() => {
        async function loadPosts() {
            try {
                setIsLoad(true)
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                setPosts(response.data)
            } catch (error) {
            setError("Не удалось загрузить список постов")
            setCatchError(true)
            } finally {
            setIsLoad(false)
            }
        }
        loadPosts()
        console.log (posts)
    }, [])

    return (
        <PostContext.Provider value={full_posts}>
            {children}
        </PostContext.Provider>
    )
}
export default PostsProvider