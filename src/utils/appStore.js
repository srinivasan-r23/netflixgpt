import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from './movieSlice';

const appStore = configureStore({
  reducer: {
    userReducer: userReducer,
    movieReducer: movieReducer,
  },
});

export default appStore;
