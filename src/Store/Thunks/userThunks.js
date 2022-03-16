import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserByEmailThunk = () => createAsyncThunk(
  "users/byEmail",
  async (userEmail, { rejectWithValue }) => {
    try {
      const res = await fetch("/test")
        .then(res => res.json());

      console.log(res);
      return res.get;

    } catch (error) {

      let _error = { error: "" };
      switch(error.name) {
        case "TypeError" :
          _error.error = "API Error";
          break;
        case "SyntaxError" :
          _error.error = "Not found";
          break;
        default :
          _error.error = "Default Error, check API, Store, Thunks...";
       }

      return rejectWithValue(_error);

    }
  }
);

export {
  fetchUserByEmailThunk,
};