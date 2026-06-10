import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

    useEffect(()=>{
      axios.get("/api/users")
      .then(response =>{
        setUsers(response.data)
      })
    })



  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
