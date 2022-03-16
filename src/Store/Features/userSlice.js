import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmailThunk } from "Store/Thunks/userThunks";

export const fetchUserByEmail = fetchUserByEmailThunk();

export const userSlice = createSlice({
  
  name: "user",
  
  initialState: {
    email: "",
    pseudonym: "",
    test: "initial",
  },
  
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPseudonym: (state, action) => {
      state.pseudonym = action.payload;
    },
  },
  
  extraReducers: {
    [fetchUserByEmail.rejected]: (state, action) => {},
    [fetchUserByEmail.pending]: (state, action) => {},
    [fetchUserByEmail.fulfilled]: (state, action) => {
      state.test = action.payload;
    }
  },
  
});

export const {
  setEmail,
  setPseudonym,
} = userSlice.actions;


export default userSlice.reducer;