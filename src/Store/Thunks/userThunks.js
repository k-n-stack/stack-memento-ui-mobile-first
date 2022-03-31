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

const routes = {
  fetchUserByEmail: "/login",
  fetchUserRegistration: "/register",
  fetchUserThreadCount: "/user-thread-count",
  fetchUserBookmarkCount: "/user-bookmark-count",
  fetchUserRedirectionCount: "/user-redirection-count",
  fetchUserCommentCount: "/user-comment-count",
  fetchUserVoteCount: "/user-vote-count",
  fetchUserThreads: "/user-thread-full",
  fetchUserPinnedThreads: "/user-pinned",
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

const fetchUserRegistrationThunk = () => createAsyncThunk(
  "users/fetchUserRegistration",
  async (data, { rejectWithValue }) => {
    try {
      const { email, pseudonym, password } = data;
      const res = await fetch(routes.fetchUserRegistration, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, 
          pseudonym,
          password,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserRegistrationVerificationThunk = () => createAsyncThunk(
  "users/fetchUserRegistrationVerification",
  async (url, { rejectWithValue }) => {
    try {
      return await fetch(url, {
        method: "GET",
      })
      .then(res => res.json());
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
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
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
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
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
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
          },
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
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserVoteCountThunk = () => createAsyncThunk(
  "user/fetchUserVoteCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserVoteCount, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserThreadsThunk = () => createAsyncThunk(
  "user/fetchUserThreads",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserThreads, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserPinnedThreadsThunk = () => createAsyncThunk(
  "user/fetchUserPinnedThreads",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserPinnedThreads, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        }
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export {
  fetchUserByEmailThunk,
  fetchUserRegistrationThunk,
  fetchUserRegistrationVerificationThunk,
  fetchUserThreadCountThunk,
  fetchUserBookmarkCountThunk,
  fetchUserRedirectionCountThunk,
  fetchUserCommentCountThunk,
  fetchUserVoteCountThunk,
  fetchUserThreadsThunk,
  fetchUserPinnedThreadsThunk,
};