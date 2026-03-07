import React, { useState } from 'react'
import "../styles/login.scss"
import FormGroup from '../components/FormGroup'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


const Login = () => {
  const {loading, handleLogin} = useAuth()

  const nevigate = useNavigate()

  const [identifier, setidentifier] = useState("")
  const [password, setpassword] = useState("")

  const submitHandler = async (e)=>{
    e.preventDefault()

    await handleLogin({identifier, password})
    if(loading){
      return <h1>Loading...</h1>
    }
    nevigate("/")
  }

  return (
    <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <FormGroup 
            value={identifier}
            onchange={(e)=>{setidentifier(e.target.value)}}
            lable={"identifier"} placeholder={"Enter  your username / email"} />
          <FormGroup 
            value={password}
            onchange={(e)=>{setpassword(e.target.value)}}
            lable={"password"} placeholder={"Enter your password"} />
          <button className='button' type='submit'>Login</button>
          <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
        </form> 
      </div>
    </main>
  )
}

export default Login