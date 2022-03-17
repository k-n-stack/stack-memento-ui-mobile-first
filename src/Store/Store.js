import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationReducer from "Store/Features/navigationSlice";
import userReducer from "Store/Features/userSlice";

const rootReducer = combineReducers(
  {
    navigation: navigationReducer,
    user: userReducer,
  }
);

const store = configureStore({
  reducer: rootReducer
});

export default store;