import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({

  name: "navigation",

  initialState: {
    isLogin: false,
    view: "homepage",
    browseThread: 0,
    expandUserPanel: false,
    expandSearchPanel: false,
    expandSearchOptions: false,
    userPanelView: "stats",
    userSettingsView: "profile",
  },

  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setBrowseThread: (state, action) => {
      state.browseThread = action.payload;
    },
    setExpandUserPanel: (state, action) => {
      state.expandUserPanel = action.payload;
    },
    setExpandSearchPanel: (state, action) => {
      state.expandSearchPanel = action.payload;
    },
    setExpandSearchOptions: (state, action) => {
      state.expandSearchOptions = action.payload;
    },
    setUserPanelView: (state, action) => {
      state.userPanelView = action.payload;
    },
    setUserSettingsView: (state, action) => {
      state.userSettingsView = action.payload;
    },
  },

});

export const {
  setIsLogin,
  setView,
  setBrowseThread,
  setExpandUserPanel,
  setExpandSearchPanel,
  setExpandSearchOptions,
  setUserPanelView,
  setUserSettingsView,
} = navigationSlice.actions;

export default navigationSlice.reducer;