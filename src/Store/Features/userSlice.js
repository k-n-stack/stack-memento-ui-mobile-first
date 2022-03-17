import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmailThunk } from "Store/Thunks/userThunks";

export const login = fetchUserByEmailThunk();

export const userSlice = createSlice({
  
  name: "user",
  
  initialState: {
    status: "",
    email: "",
    pseudonym: "",
    image_url: "",
    email_verified_at: "",
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
    }
  },

});

export const {
  setStatus,
  clearUser,
} = userSlice.actions;


export default userSlice.reducer;