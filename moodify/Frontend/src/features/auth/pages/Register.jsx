import React, { useState } from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/register.scss"
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


const Register = () => {
  const {loading, handleRegister} = useAuth()

  const nevigate = useNavigate()

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const submitHandler = async (e)=>{
    e.preventDefault()
    await handleRegister({username, email, password})
    if(loading){
      return(
        <h1>loading...</h1>
      )
    }
    nevigate("/")
  } 

  return (
    <div className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <FormGroup
            value={username}
            onchange={(e)=>{setusername(e.target.value)}}
            label={"username"} placeholder={"Enter your username"} />
          <FormGroup 
            value={email}
            onchange={(e)=>{setemail(e.target.value)}}
            label={"email"} placeholder={"Enter your email"} />
          <FormGroup 
            value={password}
            onchange={(e)=>{setpassword(e.target.value)}}
            label={"password"} placeholder={"Enter your password"} type={"password"} />
          <button className='button' type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    </div>
  )
}

export default Register