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
  fetchUserByEmail: `${api}/login`,
  fetchUserRegistration: `${api}/register`,
  fetchUserThreadCount: `${api}/user-thread-count`,
  fetchUserBookmarkCount: `${api}/user-bookmark-count`,
  fetchUserRedirectionCount: `${api}/user-redirection-count`,
  fetchUserCommentCount: `${api}/user-comment-count`,
  fetchUserVoteCount: `${api}/user-vote-count`,
  fetchUserThreads: `${api}/user-thread-full`,
  fetchUserPinnedThreads: `${api}/user-pinned`,
  fetchUserSubscribedGroups: `${api}/user-subscribed-group`,
  fetchUserOwnGroups: `${api}/user-own-group`,
  fetchUserFriends: `${api}/user-fellows`,
  postBookmarks: `${api}/post-bookmark`,
  postThread: `${api}/post-thread`,
  updateBookmark: `${api}/update-bookmark`,
  deactivateBookmark: `${api}/deactivate-bookmark`,
  postBookmarkTags: `${api}/post-bookmark-tags`,
  deleteBookmarkTags: `${api}/delete-bookmark-tags`,
  deleteComments: `${api}/delete-comments`,
  validateComments: `${api}/validate-comments`,
  postComment: `${api}/post-comment`,
  fetchTags: `${api}/tag`,
  deleteThread: `${api}/delete-thread`,
};

const defaultHeaders = {
  "Content-Type" : "application/json",
  "Access-Control-Allow-Origin" : process.env.REACT_APP_APP_DOMAIN,
}

const fetchUserByEmailThunk = () => createAsyncThunk(
  "users/fetchUserByEmail",
  async (data, { rejectWithValue }) => {
    try {      
      const { email, password } = data;
      const res = await fetch(routes.fetchUserByEmail, {
        method: "POST",
        headers: {...defaultHeaders},
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
        headers: {...defaultHeaders},
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

const fetchUserBookmarkCountThunk = () => createAsyncThunk(
  "users/fetchUserBookmarkCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserBookmarkCount, {
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

const fetchUserRedirectionCountThunk = () => createAsyncThunk(
  "users/fetchUserRedirectionCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserRedirectionCount, {
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

const fetchUserCommentCountThunk = () => createAsyncThunk(
  "users/fetchUserCommentCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserCommentCount, {
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

const fetchUserVoteCountThunk = () => createAsyncThunk(
  "user/fetchUserVoteCount",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserVoteCount, {
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

const fetchUserThreadsThunk = () => createAsyncThunk(
  "user/fetchUserThreads",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserThreads, {
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

const fetchUserPinnedThreadsThunk = () => createAsyncThunk(
  "user/fetchUserPinnedThreads",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserPinnedThreads, {
        method: "GET",
        headers: {
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        }
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserSubscribedGroupsThunk = () => createAsyncThunk(
  "user/fetchUserSubscribedGroups",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserSubscribedGroups, {
        method: "GET",
        headers: {
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        }
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserOwnGroupsThunk = () => createAsyncThunk(
  "user/fetchUserOwnGroups",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserOwnGroups, {
        method: "GET",
        headers: {
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        }
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchUserFriendsThunk = () => createAsyncThunk(
  "user/fetchUserFriends",
  async (data, { rejectWithValue }) => {
    try {
      return await fetch(routes.fetchUserFriends, {
        method: "GET",
        headers: {
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        }
      })
      .then(res => res.json());
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const postBookmarksThunk = () => createAsyncThunk(
  "user/postBookmarks",
  async (data, { rejectWithValue }) => {
    try {
      const { thread_anids, url, description, comment, tags } = data;
      const res = await fetch(routes.postBookmarks, {
        method: "POST",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          thread_anids, 
          url,
          description,
          comment,
          tags,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const postThreadThunk = () => createAsyncThunk(
  "user/postThread",
  async (data, { rejectWithValue }) => {
    try {
      const { title, visibility, color } = data;
      const res = await fetch(routes.postThread, {
        method: "POST",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          title,
          visibility,
          color,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const updateBookmarkThunk = () => createAsyncThunk(
  "user/updateBookmark",
  async (data, { rejectWithValue }) => {
    try {
      const { description, url, id } = data;
      const res = await fetch(routes.updateBookmark, {
        method: "PUT",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          description,
          url,
          id,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const deactivateBookmarkThunk = () => createAsyncThunk(
  "user/deactivateBookmark",
  async (data, { rejectWithValue }) => {
    try {
      const { id } = data;
      const res = await fetch(routes.deactivateBookmark, {
        method: "DELETE",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          id,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const postBookmarkTagsThunk = () => createAsyncThunk(
  "user/postBookmarkTagsThunk",
  async (data, { rejectWithValue }) => {
    try {
      const { bookmark_id, tags } = data;
      const res = await fetch(routes.postBookmarkTags, {
        method: "POST",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          bookmark_id,
          tags,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const deleteBookmarkTagsThunk = () => createAsyncThunk(
  "user/deleteBookmarkTagsThunk",
  async (data, { rejectWithValue }) => {
    try {
      const { bookmark_id, tags } = data;
      const res = await fetch(routes.deleteBookmarkTags, {
        method: "DELETE",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          bookmark_id,
          tags,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const deleteCommentsThunk = () => createAsyncThunk(
  "user/deleteCommentsThunk",
  async (data, { rejectWithValue }) => {
    try {
      const { comments } = data;
      const res = await fetch(routes.deleteComments, {
        method: "DELETE",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          comments,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const validateCommentsThunk = () => createAsyncThunk(
  "user/validateCommentsThunk",
  async (data, { rejectWithValue }) => {
    try {
      const { comments } = data;
      const res = await fetch(routes.validateComments, {
        method: "PUT",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          comments,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const postCommentThunk = () => createAsyncThunk(
  "user/postCommentThunk",
  async (data, { rejectWithValue }) => {
    try {
      const { body, bookmark_id, parent_id } = data;
      const res = await fetch(routes.postComment, {
        method: "POST",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          body,
          bookmark_id,
          parent_id,
        }),
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const fetchTagsThunk = () => createAsyncThunk(
  "user/fetchTagsThunk",
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(routes.fetchTags, {
        method: "GET",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
      })
      .then(res => res.json());
      return res;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const deleteThreadThunk = () => createAsyncThunk(
  "user/deleteThreadThunk",
  async (data, { rejectWithValue }) => {
    try {
      const { alphanumeric_id } = data;
      const res = await fetch(routes.deleteThread, {
        method: "DELETE",
        headers: { 
          ...defaultHeaders,
          "Authorization": `Bearer ${sessionStorage.getItem('stmn_token')}`,
        },
        body: JSON.stringify({
          alphanumeric_id,
        }),
      })
      .then(res => res.json());
      return res;
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
  fetchUserSubscribedGroupsThunk,
  fetchUserOwnGroupsThunk,
  fetchUserFriendsThunk,
  postBookmarksThunk,
  postThreadThunk,
  updateBookmarkThunk,
  deactivateBookmarkThunk,
  postBookmarkTagsThunk,
  deleteBookmarkTagsThunk,
  deleteCommentsThunk,
  validateCommentsThunk,
  postCommentThunk,
  fetchTagsThunk,
  deleteThreadThunk,
};