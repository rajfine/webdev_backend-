import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true
})

export const register = async ({username, email, password})=>{
  const response = await  api.post("/register",{
    username,
    email,
    password
  })
  console.log(response);
  
  return response.data
} 

export const login = async ({identifier, password})=>{
  const response = await api.post("/login",{
    identifier,
    password
  })
  return response.data
}

export const getMe = async ()=>{
  const response = await api.get("/getme")
  return response.data
}

export const logout = async ()=>{
  const response = await api.get("/logout")
  return response.data
}
