import React, { useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

const Protected = ({children}) => {
  const {user, loading, handleGetMe} = useAuth()

  // const navigate = useNavigate()

  // useEffect(() => {
  //   handleGetMe();
  // }, []);

  if(loading){
    return <h1>Loading...</h1>
  }
  if(!user){
    return <Navigate to="/login" />
    // navigate("/login")
  }
  
  return (children)
}

export default Protected