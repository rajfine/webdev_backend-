import React, { useEffect } from 'react'
import { useChat } from '../hooks/useChat'
import { useSelector } from 'react-redux'

const Home = () => {
  const chat = useChat()
  useEffect(()=>{
    chat.initializeSocketConnection()

    return ()=>{
      chat.disconnectSocket()
    }
  },[])
  const {user} = useSelector(state=>state.auth)
  console.log(user)

  return (
    <div className='bg-black h-screen text-9xl text-white flex justify-center '>
      <h1 className='mt-3'>Home</h1>
    </div>
  )
}

export default Home
