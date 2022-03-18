import { createAsyncThunk } from "@reduxjs/toolkit";

const httpHeaders = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
};

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

const routes = {
  fetchUserByEmail: "/login",
  fetchUserThreadCount: "/user-thread-count",
  fetchUserBookmarkCount: "/user-bookmark-count",
  fetchUserRedirectionCount: "/user-redirection-count",
  fetchUserCommentCount: "/user-comment-count",
};

const fetchUserByEmailThunk = () => createAsyncThunk(
  "users/fetchUserByEmail",
  async (data, { rejectWithValue }) => {
    try {      
      const { email, password } = data;
      const res = await fetch(routes.fetchUserByEmail, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, 
          password,
        }),
      })
      .then(res => res.json());
      sessionStorage.setItem('stmn_token', res.token);
      sessionStorage.setItem('stmn_email', res.email);
      sessionStorage.setItem('stmn_pseudonym', res.pseudonym);
      sessionStorage.setItem('stmn_image_url', res.image_url);
      sessionStorage.setItem('stmn_email_verified_at', res.email_verified_at);

      return res;

    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserThreadCountThunk = () => createAsyncThunk(
  "users/fetchUserThreadCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserThreadCount, {
        method: "GET",
        headers: httpHeaders,
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserBookmarkCountThunk = () => createAsyncThunk(
  "users/fetchUserBookmarkCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserBookmarkCount, {
        method: "GET",
        headers: httpHeaders,
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserRedirectionCountThunk = () => createAsyncThunk(
  "users/fetchUserRedirectionCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserRedirectionCount, {
          method: "GET",
          headers: httpHeaders,
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserCommentCountThunk = () => createAsyncThunk(
  "users/fetchUserCommentCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserCommentCount, {
        method: "GET",
        headers: httpHeaders,
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export {
  fetchUserByEmailThunk,
  fetchUserThreadCountThunk,
  fetchUserBookmarkCountThunk,
  fetchUserRedirectionCountThunk,
  fetchUserCommentCountThunk,
};