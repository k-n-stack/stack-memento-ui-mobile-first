import { createAsyncThunk } from "@reduxjs/toolkit";

const handleError = (error) => {
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
  return _error;
};

const api = process.env.REACT_APP_API_DOMAIN;

const routes = {
  fetchGlobalThreads: `${api}/global-thread-full`,
};

const defaultHeaders = {
  "Content-Type" : "application/json",
  "Access-Control-Allow-Origin" : process.env.REACT_APP_APP_DOMAIN,
}

const fetchGlobalThreadsThunk = () => createAsyncThunk(
  "users/fetchGlobalThreads",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchGlobalThreads, {
        method: "GET",
        headers: {
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export {
  fetchGlobalThreadsThunk
}