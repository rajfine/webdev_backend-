import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState:{
    value: "light"
  },
  reducers: {
    toggletheme:(state)=>{
      if(state.value==="light"){
        state.value="dark"
      }else{
        state.value="light"
      }
    }
  }
})

export const {toggletheme} = themeSlice.actions
export default themeSlice.reducer