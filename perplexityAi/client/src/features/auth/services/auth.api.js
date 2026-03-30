import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  withCredentials: true, // cooikies  access karne ke liye
})

export const register = async({username, email, password})=>{
  try{
    const response = await api.post('/api/auth/register', {username, email, password})
    return response.data
  } catch (error) {
    throw error
  }
}

export const login = async({email, password})=>{
  try{
    const response = await api.post('/api/auth/login', {email, password})
    return response.data
  } catch (error) {
    throw error
  }
}

export const getMe = async ()=>{
  try{
    const response = await api.get('/api/auth/getme')
    return response.data
  }catch(err){
    throw err
  }
}
