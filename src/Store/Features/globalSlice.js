import { createSlice } from "@reduxjs/toolkit";
import { fetchGlobalThreadsThunk } from "Store/Thunks/globalThunks";
import { postCommentThunk } from "Store/Thunks/userThunks";

export const setGlobalThreads = fetchGlobalThreadsThunk();
export const postComment = postCommentThunk();

export const globalSlice = createSlice({

  name: "global",

  initialState: {
    threads: [],
  },

  extraReducers: {
    [setGlobalThreads.rejected]: (state, action) => {},
    [setGlobalThreads.pending]: (state, action) => {},
    [setGlobalThreads.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.threads = action.payload;
    },

    [postComment.fulfilled]: (state, action) => {
      if (action.payload.status === "comment added to bookmark") {
        const bookmarkId = action.payload.bookmark.id;
        state.threads = state.threads.map(function (thread) {
          const bookmarks = thread.bookmarks.map(function (bookmark) {
            return bookmark.id == bookmarkId ? 
              action.payload.bookmark :
              bookmark;
          });
          thread.bookmarks = bookmarks;
          return thread;
        });
      }
    }
  }
});

export default globalSlice.reducer;