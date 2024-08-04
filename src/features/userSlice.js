import {createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null,
  },
  
  reducers: {
    login: (state, action) => {
      console.log("login reducer called with payload:", action.payload);
      state.user = action.payload;
    },
    logout: (state) => {
      console.log("logout reducer called");
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
