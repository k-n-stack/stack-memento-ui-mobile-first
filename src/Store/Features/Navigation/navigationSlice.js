import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({

  name: "navigation",

  initialState: {
    view: "homepage",
    isLogin: false,
  },

  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    }
  },

});

export const {
  setView,
  setIsLogin,
} = navigationSlice.actions;

export default navigationSlice.reducer;