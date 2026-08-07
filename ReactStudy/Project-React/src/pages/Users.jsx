import { useState, useEffect, useContext } from "react"
import axios from "axios"
import UserCard from "../components/UserCard"
import React from "react"
import UsersData from "../data-20267281450.json"
import { Link } from "react-router-dom"
import { UserContext } from "../Context/UserContext"
import {useUserData} from "../data/useUserData"

function UsersList() {
    // const [users, setUsers] = useState([])
    // const [isLoad, setIsLoad] = useState(true)
    // const [error, setError] = useState("")
    // const [catchError, setCatchError] = useState(false)
    // console.log(users)
  //   useEffect(() => {
  //     async function loadUsers() {
  //       try {
  //       const  response = await axios.get("https://jsonplaceholder.typicode.com/users")
  //       setUsers(response.data)
  //       setIsLoad(false)
  //       } catch (error) {
  //         setError("Не удалось загрузить список пользователей")
  //         setUsers(UsersData)
  //         setIsLoad(false)
  //         setCatchError(true)
  //       } finally {
  //         setIsLoad(false)
  //       }
  //     }
  //     loadUsers()
  // }, [])

  // const {users, isLoad, error, catchError} = useContext(UserContext)
  const users = useUserData((store) => store.users)
  const error = useUserData((store) => store.error)
  const isLoad = useUserData((store) => store.isLoad)
  const catchError = useUserData((store) => store.catchError)
  const changeError = useUserData((store) => store.changeError)
  const loadUsers = useUserData((store) => store.loadUsers)

  useEffect(() => {
    loadUsers()
  }, [])

  const testUseUserData = {
    name: "Gosha",
    age: 20,
    changeName: function (newName) {
      this.name = newName
    }
  }
  console.log(testUseUserData.name)
  testUseUserData.changeName("Darya")
  console.log(testUseUserData.name)
  
  // const [users, setUser] = useState(null)

  let name = null
  if (name) {
    console.log("Выполнится")
  } else {
    console.log("Не Выполнится")
  }
  
   return(
        <>
        <button onClick={() => changeError("567")}>Изменить ошибку</button>
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