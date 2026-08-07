import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export const UserContext = createContext()

function UserProvider({children}) {
    const [users, setUsers] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState("")
    const [catchError, setCatchError] = useState(false)

    const full_user = {
        users: users,
        isLoad: isLoad,
        error: error,
        catchError: catchError,
    }

    useEffect(() => {
        async function loadUsers() {
            try {
                setIsLoad(true)
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
                setUsers(response.data)
            } catch (error) {
            setError("Не удалось загрузить список пользователей")
            setCatchError(true)
            } finally {
            setIsLoad(false)
            }
        }
        loadUsers()
    }, [])

    return (
        <UserContext.Provider value={full_user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider