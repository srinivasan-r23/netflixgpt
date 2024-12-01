import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movieReducer);
  return (
    <div className="pt-16 bg-black">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies?.nowPopularMovies} />
      <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies?.nowPopularMovies} />
      <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
