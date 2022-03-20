import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationReducer from "Store/Features/navigationSlice";
import userReducer from "Store/Features/userSlice";
import globalReducer from "Store/Features/globalSlice";

const rootReducer = combineReducers(
  {
    navigation: navigationReducer,
    user: userReducer,
    global: globalReducer,
  }
);

const store = configureStore({
  reducer: rootReducer
});

export default store;