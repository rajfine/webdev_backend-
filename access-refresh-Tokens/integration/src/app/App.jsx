import React from 'react'
import { axiosInstance } from '../config/axiosInstance.jsx'



const App = () => {

  const getData = async ()=>{
    try {
      let response = await axiosInstance.get("/products")
      console.log("this is UI app -> ",response)
    } catch (error) {
      console.log("error in api",error)
    }
  }
  getData()

  return (
    <div>
      <h1>Hello...👋</h1>
    </div>
  )
}

export default App