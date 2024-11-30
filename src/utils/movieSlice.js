import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  name: "movies",
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action?.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
