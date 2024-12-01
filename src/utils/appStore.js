import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    userReducer: userReducer,
    movieReducer: movieReducer,
    gptReducer: gptReducer,
    configSlice: configSlice,
  },
});

export default appStore;
