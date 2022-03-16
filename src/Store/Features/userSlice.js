import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmailThunk } from "Store/Thunks/userThunks";

export const login = fetchUserByEmailThunk();

export const userSlice = createSlice({
  
  name: "user",
  
  initialState: {
    isLogin: false,
    email: "",
    pseudonym: "",
    image_url: "",
    email_verified_at: "",
  },
  
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    }
  },
  
  extraReducers: {
    [login.rejected]: (state, action) => {},
    [login.pending]: (state, action) => {},
    [login.fulfilled]: (state, action) => {
      state.isLogin = action.payload.status === "authenticated";
      state.email = action.payload.email;
      state.pseudonym = action.payload.pseudonym;
      state.image_url = action.payload.image_url;
      state.email_verified_at = action.payload.email_verified_at;
    }
  },

});

export const {
  setIsLogin,
} = userSlice.actions;


export default userSlice.reducer;