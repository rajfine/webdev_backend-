import {register, login, getMe, logout} from '../services/auth.api'
import {useContext, useEffect} from 'react'
import {AuthContext} from '../auth.context'

export const useAuth = ()=>{
  const context = useContext(AuthContext)
  const {user, setUser, loading, setLoading} = context

  const handleRegister = async ({username, email, password})=>{
    setLoading(true)
    const data = await register({username, email, password})
    console.log(data);
    setUser(data.user)
    setLoading(false)
  }

  const handleLogin = async ({identifier, password})=>{
    setLoading(true)
    const data = await login({identifier, password})
    console.log(data)
    setUser(data.user)
    setLoading(false)
  }

  const handleGetMe = async ()=>{
    setLoading(true)
    const data = await getMe()
    setUser(data.user)
    setLoading(false)
  }

  const handleLogout = async ()=>{
    setLoading(true)
    const data = await logout()
    setUser(null)
    setLoading(false)
  }

  // hydrate the user
  useEffect(() => {
    handleGetMe();
  }, []);


  return (
    {user, loading, handleRegister, handleLogin, handleGetMe, handleLogout}
  )
}