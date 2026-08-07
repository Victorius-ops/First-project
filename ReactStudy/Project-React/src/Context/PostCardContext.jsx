import { useContext, useReducer } from "react"
import { PostContext } from "./PostContext"
import { createContext } from "react"

export const PostsCardContext = createContext()

// function postReducer(state, action) {
//     const { posts, postCount} = useContext(PostContext)
//     switch (action.type) {
//         case "LOAD_MORE": {
//             const product = action.payload
//             const alreadyInCart = state.some(item => item.id == product.id)
//             if (alreadyInCart) {
//                 return state
//             }
//             setpostCount(postCount + 10)
//             return [...state, action.payload]
//         }
//         case "CLEAR_POST": {
//             return setpostCount(postCount)
//         }
//         case "SHOW_DEFAULT": {
//             return setpostCount(10)
//         }
//         default:
//             return state
//     }
// }

function postReducer(state, action) {
    const {postCount} = useContext(PostContext)
    switch (action.type) {
        case "LOAD_MORE": {
            return state + 10
        }
        case "CLEAR_POST": {
            return 0
        }
        case "SHOW_DEFAULT": {
            return 10
        }
        default:
            return state
    }
}

export function PostsProvider({ children }) {
    const [postCount, dispatch] = useReducer(postReducer, 10)

    function loadMore() {
        dispatch({type: "LOAD_MORE"})
    }

    function clearPost() {
        dispatch({type: "CLEAR_POST"})
    }

    function showDefault() {
        dispatch({type: "SHOW_DEFAULT"})
    }
    return (
        <PostsCardContext.Provider
            value={{
                postCount,
                loadMore,
                clearPost,
                showDefault
            }}
        >
            {children}
        </PostsCardContext.Provider>
    )
}
