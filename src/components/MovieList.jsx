import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  return (
    <div className="pl-12 py-4 px-6">
      <h1 className="text-xl py-1 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.poster_path}
              movies={movies}
              posterPath={movie?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
