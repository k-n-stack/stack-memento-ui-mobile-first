import { createSlice } from "@reduxjs/toolkit";
import { 
  fetchUserByEmailThunk,
  fetchUserRegistrationThunk,
  fetchUserRegistrationVerificationThunk,
  fetchUserThreadCountThunk,
  fetchUserBookmarkCountThunk,
  fetchUserRedirectionCountThunk,
  fetchUserCommentCountThunk,
  fetchUserVoteCountThunk,
  fetchUserThreadsThunk,
  fetchUserPinnedThreadsThunk,
  fetchUserSubscribedGroupsThunk,
  fetchUserOwnGroupsThunk,
} from "Store/Thunks/userThunks";

export const login = fetchUserByEmailThunk();
export const register = fetchUserRegistrationThunk();
export const verify = fetchUserRegistrationVerificationThunk();
export const setUserThreadCount = fetchUserThreadCountThunk();
export const setUserBookmarkCount = fetchUserBookmarkCountThunk();
export const setUserRedirectionCount = fetchUserRedirectionCountThunk();
export const setUserCommentCount = fetchUserCommentCountThunk();
export const setUserVoteCount = fetchUserVoteCountThunk();
export const setUserThreads = fetchUserThreadsThunk();
export const setUserPinnedThreads = fetchUserPinnedThreadsThunk();
export const setUserSubscribedGroups = fetchUserSubscribedGroupsThunk();
export const setUserOwnGroups = fetchUserOwnGroupsThunk();

export const userSlice = createSlice({
  
  name: "user",
  
  initialState: {
    status: "",
    email: "",
    pseudonym: "",
    image_url: "",
    email_verified_at: "",

    threadCount: 0,
    bookmarkCount: 0,
    redirectionCount: 0,
    commentCount: 0,
    voteCount: 0,

    threads: [],
    pinnedThreads: [],

    subscribedGroups: [],
    ownGroups: [],
  },

  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    clearUser: (state, action = "") => {
      state.status = "";
      state.email = "";
      state.pseudonym = "";
      state.image_url = "";
      state.email_verified_at = "";
      state.threadCount = 0;
      state.bookmarkCount = 0;
      state.redirectionCount = 0;
      state.commentCount = 0;
      state.voteCount = 0;
    },
  },
  
  extraReducers: {
    [login.rejected]: (state, action) => {},
    [login.pending]: (state, action) => {
      state.status = "pending login";
    },
    [login.fulfilled]: (state, action) => {
      state.status = action.payload.status;
      state.email = action.payload.email;
      state.pseudonym = action.payload.pseudonym;
      state.image_url = action.payload.image_url;
      state.email_verified_at = action.payload.email_verified_at;
    },

    [register.rejected]: (state, action) => {},
    [register.pending]: (state, action) => {
      state.status = "pending registration";
    },
    [register.fulfilled]: (state, action) => {
      state.status = action.payload.status;
    },

    [verify.rejected]: (state, action) => {},
    [verify.pending]: (state, action) => {
      state.status = "pending verification";
    },
    [verify.fulfilled]: (state, action) => {
      state.status = action.payload.status;
    },

    [setUserThreadCount.rejected]: (state, action) => {},
    [setUserThreadCount.pending]: (state, action) => {},
    [setUserThreadCount.fulfilled]: (state, action) => {
      state.threadCount = action.payload;
    },

    [setUserBookmarkCount.rejected]: (state, action) => {},
    [setUserBookmarkCount.pending]: (state, action) => {},
    [setUserBookmarkCount.fulfilled]: (state, action) => {
      state.bookmarkCount = action.payload;
    },

    [setUserRedirectionCount.rejected]: (state, action) => {},
    [setUserRedirectionCount.pending]: (state, action) => {},
    [setUserRedirectionCount.fulfilled]: (state, action) => {
      state.redirectionCount = action.payload;
    },

    [setUserCommentCount.rejected]: (state, action) => {},
    [setUserCommentCount.pending]: (state, action) => {},
    [setUserCommentCount.fulfilled]: (state, action) => {
      state.commentCount = action.payload;
    },

    [setUserVoteCount.rejected]: (state, action) => {},
    [setUserVoteCount.pending]: (state, action) => {},
    [setUserVoteCount.fulfilled]: (state, action) => {
      state.voteCount = action.payload;
    },

    [setUserThreads.rejected]: (state, action) => {},
    [setUserThreads.pending]: (state, action) => {},
    [setUserThreads.fulfilled]: (state, action) => {
      state.threads = action.payload;
    },

    [setUserPinnedThreads.rejected]: (state, action) => {},
    [setUserPinnedThreads.pending]: (state, action) => {},
    [setUserPinnedThreads.fulfilled]: (state, action) => {
      state.pinnedThreads = action.payload;
    },

    [setUserSubscribedGroups.rejected]: (state, action) => {},
    [setUserSubscribedGroups.pending]: (state, action) => {},
    [setUserSubscribedGroups.fulfilled]: (state, action) => {
      state.subscribedGroups = action.payload;
    },

    [setUserOwnGroups.rejected]: (state, action) => {},
    [setUserOwnGroups.pending]: (state, action) => {},
    [setUserOwnGroups.fulfilled]: (state, action) => {
      state.ownGroups = action.payload;
    },

  },

});

export const {
  setStatus,
  clearUser,
} = userSlice.actions;


export default userSlice.reducer;