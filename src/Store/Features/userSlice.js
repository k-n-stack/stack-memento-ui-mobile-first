import { createSlice } from "@reduxjs/toolkit";
import { 
  fetchUserByEmailThunk,
  fetchUserThreadCountThunk,
  fetchUserBookmarkCountThunk,
  fetchUserRedirectionCountThunk,
  fetchUserCommentCountThunk,
  fetchUserVoteCountThunk,
  fetchUserThreadsThunk,
} from "Store/Thunks/userThunks";

export const login = fetchUserByEmailThunk();
export const setUserThreadCount = fetchUserThreadCountThunk();
export const setUserBookmarkCount = fetchUserBookmarkCountThunk();
export const setUserRedirectionCount = fetchUserRedirectionCountThunk();
export const setUserCommentCount = fetchUserCommentCountThunk();
export const setUserVoteCount = fetchUserVoteCountThunk();
export const setUserThreads = fetchUserThreadsThunk()

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
    [login.pending]: (state, action) => {},
    [login.fulfilled]: (state, action) => {
      state.status = action.payload.status;
      state.email = action.payload.email;
      state.pseudonym = action.payload.pseudonym;
      state.image_url = action.payload.image_url;
      state.email_verified_at = action.payload.email_verified_at;
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

  },

});

export const {
  setStatus,
  clearUser,
} = userSlice.actions;


export default userSlice.reducer;