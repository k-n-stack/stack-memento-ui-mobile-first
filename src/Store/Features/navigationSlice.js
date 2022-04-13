import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({

  name: "navigation",

  initialState: {
    isLogin: false,
    isRegistered: false,
    view: "homepage",
    overrideView: true,
    browseThread: 0,
    expandUserPanel: false,
    expandSearchPanel: false,
    expandSearchOptions: false,
    expandNavbar: false,
    expandSubNavbar: false,
    expandSemiSub: false,
    userPanelView: "stats",
    userSettingsView: "profile",

    editionPanelOptions: [],
    myThreadsSelection: "",
    pinnedThreadsSelection: "",
    fellowsSelection: "",
    groupsSelection: "",
    groupOwner: false,

    showModal: false,
    modalView: "",
    modalSubOptions: [],

    myThreadsSettingsContent: {},
    fellowsSettingsContent: {},

    selectedFellow: {},

  },

  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setOverrideView: (state, action) => {
      state.overrideView = action.payload;
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
    setExpandNavbar: (state, action) => {
      state.expandNavbar = action.payload;
    },
    setExpandSubNavbar: (state, action) => {
      state.expandSubNavbar = action.payload;
    },
    setExpandSemiSub: (state, action) => {
      state.expandSemiSub = action.payload;
    },
    setUserPanelView: (state, action) => {
      state.userPanelView = action.payload;
    },
    setUserSettingsView: (state, action) => {
      state.userSettingsView = action.payload;
    },
    setEditionPanelOptions: (state, action) => {
      state.editionPanelOptions = action.payload;
    },
    setMyThreadsSelection: (state, action) => {
      state.myThreadsSelection = action.payload;
    },
    setPinnedThreadsSelection: (state, action) => {
      state.pinnedThreadsSelection = action.payload;
    },
    setFellowsSelection: (state, action) => {
      state.fellowsSelection = action.payload;
    },
    setGroupsSelection: (state, action) => {
      state.groupsSelection = action.payload;
    },
    setGroupOwner: (state, action) => {
      state.groupOwner = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setModalView: (state, action) => {
      state.modalView = action.payload;
    },
    setModalSubOptions: (state, action) => {
      state.modalSubOptions = action.payload;
    },
    setMyThreadsSettingsContent: (state, action) => {
      state.myThreadsSettingsContent = action.payload;
    },
    setFellowsSettingsContent: (state, action) => {
      state.fellowsSettingsContent = action.payload;
    },
    setSelectedFellow: (state, action) => {
      state.selectedFellow = action.payload;
    },
  },
});

export const {
  setIsLogin,
  setIsRegistered,
  setView,
  setOverrideView,
  setBrowseThread,
  setExpandUserPanel,
  setExpandSearchPanel,
  setExpandSearchOptions,
  setExpandNavbar,
  setExpandSubNavbar,
  setExpandSemiSub,
  setUserPanelView,
  setUserSettingsView,
  setEditionPanelOptions,
  setMyThreadsSelection,
  setPinnedThreadsSelection,
  setFellowsSelection,
  setGroupsSelection,
  setGroupOwner,
  setShowModal,
  setModalView,
  setModalSubOptions,
  setMyThreadsSettingsContent,
  setFellowsSettingsContent,
  setSelectedFellow,
} = navigationSlice.actions;

export default navigationSlice.reducer;