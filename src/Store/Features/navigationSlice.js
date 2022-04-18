import { createSlice } from "@reduxjs/toolkit";

import { 
  updateBookmarkThunk,
  deactivateBookmarkThunk,
} from "Store/Thunks/userThunks";

export const updateBookmark = updateBookmarkThunk();
export const deactivateBookmark = deactivateBookmarkThunk();

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

    showBookmark: false,

    myThreadsSettingsContent: {},
    fellowsSettingsContent: {},

    selectedThread: {},

    selectedBookmark: {},
    test: "",

    selectedFellow: {},
    selectedGroup: {},
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
    setSelectedThread: (state, action) => {
      state.selectedThread = action.payload;
    },
    setShowBookmark: (state, action) => {
      state.showBookmark = action.payload;
    },
    setSelectedBookmark: (state, action) => {
      state.selectedBookmark = action.payload;
    },
    setTest: (state, action) => {
      state.test = action.payload;
    },
    setSelectedFellow: (state, action) => {
      state.selectedFellow = action.payload;
    },
    setSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },

  extraReducers: {
    [updateBookmark.fulfilled]: (state, action) => {
      if (action.payload.status === "Bookmark updated") {
        state.selectedBookmark = action.payload.bookmark;
      }
    },
    [deactivateBookmark.fulfilled]: (state, action) => {
      if (action.payload.status === "bookmark deleted") {
        state.showBookmark = false;
      }
    }
  }
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
  setShowBookmark,
  setMyThreadsSettingsContent,
  setFellowsSettingsContent,
  setSelectedFellow,
  setSelectedGroup,
  setSelectedThread,
  setSelectedBookmark,
  setTest,
} = navigationSlice.actions;

export default navigationSlice.reducer;