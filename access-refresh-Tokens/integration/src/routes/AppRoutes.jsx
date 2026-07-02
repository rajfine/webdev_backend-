import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayouts from '../layouts/AuthLayouts'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Protected from './protected/Protected'
import Public from './protected/Public'
import { axiosInstance } from '../config/Axiosinstance'
import { useDispatch } from 'react-redux'
import { removeUser, setUser } from '../state/auth.slice'



export const AppRoutes = () => {
  console.log("AppRoutes")
  const dispatch =  useDispatch()

  useEffect(()=>{
    (async ()=>{
      try {
        let res = await axiosInstance.get("api/auth/getme")
        dispatch(setUser(res?.data?.user))
      } catch (err) {
        dispatch(removeUser())
        console.log("error in getme api", err)
      }
    })()
  },[])


  let router = createBrowserRouter([
    {
      path: "/",
      element: <Public />,
      children: [
        {
          path: "",
          element: <AuthLayouts />,
          children: [
            {
              path: "",
              element: <Login />
            },
            {
              path: "/register",
              element: <Register />
            }
          ]
        }
      ]
    },
    {
      path: "/home",
      element: <Protected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />

}
