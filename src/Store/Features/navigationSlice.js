import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({

  name: "navigation",

  initialState: {
    view: "homepage",
    expandUserPanel: false,
    expandSearchPanel: false,
    expandSearchOptions: false,
    userPanelView: "stats",
    userSettingsView: "profile",
  },

  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
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
  setView,
  setExpandUserPanel,
  setExpandSearchPanel,
  setExpandSearchOptions,
  setUserPanelView,
  setUserSettingsView,
} = navigationSlice.actions;

export default navigationSlice.reducer;