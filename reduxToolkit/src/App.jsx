import React from 'react'
import{ useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentBy5 } from './redux/slices/counter.slice'
import { toggletheme } from './redux/slices/theme.slice'

const App = () => {
  const num = useSelector((state) => state.counter.value)
  
  const theme = useSelector((state) => state.theme.value )
  
  const dispatch = useDispatch()

  return (
      <div>
        <h1>{num}, {theme}</h1>

        <button onClick={()=>{
          dispatch(increament())
        }}>increament</button>

        <button onClick={()=>{
          dispatch(decreament())
        }}>decreament</button>

        {/* <button onClick={()=>{
          dispatch(increamentBy5())
        }}>increament by 5</button> */}

        <br />
        <button onClick={()=>{
          dispatch(toggletheme())
        }}>toggle theme</button>
      </div>
  )
}

export default App
