import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationReducer from "Store/Features/Navigation/navigationSlice";

const rootReducer = combineReducers(
  {
    navigation: navigationReducer,
  }
);

const store = configureStore({
  reducer: rootReducer
});

export default store;