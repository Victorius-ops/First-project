import { useState, useEffect } from "react"
import axios from "axios"
function UsersList() {
    const [users, setUsers] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
      async function loadUsers() {
        try {
        const  response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        setIsLoad(false) 
        console.log(users)
        } catch (error) {
          setError("Не удалось загрузить пользователей")
        } finally {
          setIsLoad(false)
        }
      }
      loadUsers()
  }, [])

    return(
        <>
        { isLoad ? (<h2>Загрузка пользователей</h2>) :
        ( users.map(user => {
        <userCard 
        id = {user.id}/>
        })
    )}
    {error.length > 1 && (
            <div>
              {error}
            </div>
          )}
        </>
    )
}
export default UsersList