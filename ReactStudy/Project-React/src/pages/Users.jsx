import { useState, useEffect } from "react"
import axios from "axios"
import UserCard from "../components/UserCard"
import React from "react"
import UsersData from "../data-20267281450.json"
import { Link } from "react-router-dom"

function UsersList() {
    const [users, setUsers] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState("")
    const [catchError, setCatchError] = useState(false)
    console.log(users)
    useEffect(() => {
      async function loadUsers() {
        try {
        const  response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        setIsLoad(false)
        } catch (error) {
          setError("Не удалось загрузить список пользователей")
          setUsers(UsersData)
          setIsLoad(false)
          setCatchError(true)
        } finally {
          setIsLoad(false)
        }
      }
      loadUsers()
  }, [])

    return(
        <>
        <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
        {error.length > 1 && (
            <div>
              <h2>{error}</h2>
                {catchError && (<h2>Последний сохранённый список пользователей:</h2>)}
            </div>
          )}
        { isLoad ? (<h2>Загрузка пользователей</h2>) :
        ( users.map(user => (
          <div key={user.id} className="userCard">
              <UserCard 
              id={user.id}
              name={user.name}
              city={user.address.city}
              mail={user.email}/>
          </div>
            ))
    )}
        </>
    )
}
export default UsersList