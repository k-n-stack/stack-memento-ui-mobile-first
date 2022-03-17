import { createSlice } from "@reduxjs/toolkit";
import { 
  fetchUserByEmailThunk,
  fetchUserThreadCountThunk,
  fetchUserBookmarkCountThunk,
} from "Store/Thunks/userThunks";

export const login = fetchUserByEmailThunk();
export const setUserThreadCount = fetchUserThreadCountThunk();
export const setUserBookmarkCount = fetchUserBookmarkCountThunk();

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

  },

});

export const {
  setStatus,
  clearUser,
} = userSlice.actions;


export default userSlice.reducer;