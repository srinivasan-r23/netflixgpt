import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  initialState: {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    trailerVideo: null,
  },
  name: "movies",
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action?.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addNowPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
