import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name:'counter',
  initialState:{
    value:1
  },
  reducers:{
    increament: (state)=>{
      state.value +=1
    },
    decreament: (state)=>{
      state.value -= 1;
    },
    increamentBy5: (state)=>{
      state.value += 5
    }
  },
})

export const {increament, decreament, increamentBy5} = counterSlice.actions
export default counterSlice.reducer