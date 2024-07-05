import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./rootSlice";

const reducers = createReducer();

const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export default store;
