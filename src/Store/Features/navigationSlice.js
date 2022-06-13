import { createSlice } from "@reduxjs/toolkit";

import { 
  updateBookmarkThunk,
  deactivateBookmarkThunk,
  deleteBookmarkTagsThunk,
  postBookmarkTagsThunk,
  deleteCommentsThunk,
  validateCommentsThunk,
  postCommentThunk,
  fetchTagsThunk,
} from "Store/Thunks/userThunks";

export const updateBookmark = updateBookmarkThunk();
export const deactivateBookmark = deactivateBookmarkThunk();
export const deleteBookmarkTags = deleteBookmarkTagsThunk();
export const postBookmarkTags = postBookmarkTagsThunk();
export const deleteComments = deleteCommentsThunk();
export const validateComments = validateCommentsThunk();
export const postComment = postCommentThunk();
export const fetchTags = fetchTagsThunk();

export const navigationSlice = createSlice({

  name: "navigation",

  initialState: {
    isLogin: false,
    isRegistered: false,
    view: "homepage",
    overrideView: true,
    browseThread: 0,
    browseScope: "",
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
    showConfirmationModal: false,
    confirmationModalText: "",
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

    selectedComment: {},

    selectedCommentBookmarkId: 0,

    tags: [],
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
    setBrowseScope: (state, action) => {
      state.browseScope = action.payload;
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
    setShowConfirmationModal: (state, action) => {
      state.showConfirmationModal = action.payload;
    },
    setConfirmationModalText: (state, action) => {
      state.confirmationModalText = action.payload;
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
    setSelectedComment: (state, action) => {
      state.selectedComment = action.payload;
    },
    setSelectedCommentBookmarkId: (state, action) => {
      state.selectedCommentBookmarkId = action.payload;
    },
  },

  extraReducers: {
    // UPDATE SELECTED BOOKMARK STATE FORCING COMPONENT RELOAD !!!!

    [updateBookmark.fulfilled]: (state, action) => {
      if (action.payload.status === "Bookmark updated") {
        state.selectedBookmark = action.payload.bookmark;
      }
    },
    [deactivateBookmark.fulfilled]: (state, action) => {
      if (action.payload.status === "bookmark deleted") {
        state.showBookmark = false;
      }
    },
    [deleteBookmarkTags.fulfilled]: (state, action) => {
      if (action.payload.status === "tags removed from bookmark") {
        state.selectedBookmark = action.payload.bookmark;
      }
    },
    [deleteComments.fulfilled]: (state, action) => {
      if (action.payload.status === "comments deleted") {
        state.selectedBookmark = action.payload.bookmark;
      }
    },
    [postBookmarkTags.fulfilled]: (state, action) => {
      if (action.payload.status === "tags added to bookmark") {
        state.selectedBookmark = action.payload.bookmark;
      }
    },
    [validateComments.fulfilled]: (state, action) => {
      if (action.payload.status === "comments validated") {
        state.selectedBookmark = action.payload.bookmark;
      }
    },
    [postComment.fulfilled]: (state, action) => {
      if (action.payload.status === "comment added to bookmark") {
        const bookmarkId = action.payload.bookmark.id;
        state.browseThread.bookmarks = state.browseThread.bookmarks.map(function (bookmark) {
          return bookmark.id == bookmarkId ?
            action.payload.bookmark :
            bookmark;
        });
      }
    },

    [fetchTags.rejected]: (state, action) => {},
    [fetchTags.pending]: (state, action) => {},
    [fetchTags.fulfilled]: (state, action) => {
      state.tags = action.payload;
    },
  }
});

export const {
  setIsLogin,
  setIsRegistered,
  setView,
  setOverrideView,
  setBrowseThread,
  setBrowseScope,
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
  setShowConfirmationModal,
  setConfirmationModalText,
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
  setSelectedComment,
  setSelectedCommentBookmarkId,
} = navigationSlice.actions;

export default navigationSlice.reducer;