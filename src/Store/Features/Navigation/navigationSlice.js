import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({

  name: "navigation",

  initialState: {
    view: "homepage",
    isLogin: false,
    expandUserPanel: false,
  },

  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setExpandUserPanel: (state, action) => {
      state.expandUserPanel = action.payload;
    },
  },

});

export const {
  setView,
  setIsLogin,
  setExpandUserPanel,
} = navigationSlice.actions;

export default navigationSlice.reducer;