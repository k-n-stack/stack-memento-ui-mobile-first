import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserByEmailThunk = () => createAsyncThunk(
  "users/fetchUserByEmail",
  async (data, { rejectWithValue }) => {
    try {      
      const { email, password } = data;
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, 
          password,
        }),
      })
      .then(res => res.json());

      console.log('thunk', res);
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