import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: [],
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state?.showGptSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action?.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions;
